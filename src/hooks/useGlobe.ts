import { useRef, useCallback } from "react";

interface GlobeInstance {
  globe: any;
  router: any;
}

export const useGlobe = () => {
  const globeInstanceRef = useRef<GlobeInstance | null>(null);
  const pendingRouterActionsRef = useRef<Array<(router: any) => void>>([]);

  const runPendingRouterActions = useCallback(() => {
    const router = globeInstanceRef.current?.router;
    if (!router || pendingRouterActionsRef.current.length === 0) {
      return;
    }

    const actions = [...pendingRouterActionsRef.current];
    pendingRouterActionsRef.current = [];
    actions.forEach((action) => action(router));
  }, []);

  const scheduleRouterAction = useCallback(
    (action: (router: any) => void) => {
      const router = globeInstanceRef.current?.router;

      if (!router) {
        pendingRouterActionsRef.current.push(action);
        return;
      }

      const execute = () => {
        try {
          action(router);
        } catch (error) {
          console.error("Globe router action failed:", error);
        }
      };

      if (!router._inTransition) {
        execute();
        return;
      }

      const handleComplete = () => {
        cleanup();
        execute();
      };

      const timeoutId = setTimeout(() => {
        cleanup();
        execute();
      }, 1500);

      const cleanup = () => {
        clearTimeout(timeoutId);
        if (typeof router.removeEventListener === "function") {
          router.removeEventListener("complete", handleComplete);
        }
      };

      if (typeof router.addEventListener === "function") {
        router.addEventListener("complete", handleComplete);
      } else {
        cleanup();
        execute();
      }
    },
    []
  );

  const setGlobe = useCallback(
    (globe: any, router: any) => {
      globeInstanceRef.current = { globe, router };
      runPendingRouterActions();
    },
    [runPendingRouterActions]
  );

  const flyTo = useCallback(
    (countryCode: string) => {
      scheduleRouterAction((router) => {
        router.setLocation(`travel/${countryCode.toUpperCase()}`);
      });
    },
    [scheduleRouterAction]
  );

  const goToSection = useCallback(
    (sectionId: string) => {
      scheduleRouterAction((router) => {
        router.setLocation(sectionId);
      });
    },
    [scheduleRouterAction]
  );

  const highlightCountry = useCallback((countryName: string) => {
    if (globeInstanceRef.current?.globe) {
      globeInstanceRef.current.globe.globe.selectCountry(countryName);
      globeInstanceRef.current.globe.render();
    }
  }, []);

  const resetView = useCallback(() => {
    scheduleRouterAction((router) => {
      router.setLocation("branding-interstitial");
    });

    const globe = globeInstanceRef.current?.globe;

    if (globe?.globe?.deselectCountries) {
      globe.globe.deselectCountries();
    }

    if (globe?.render) {
      globe.render();
    }
  }, [scheduleRouterAction]);

  return {
    setGlobe,
    flyTo,
    goToSection,
    highlightCountry,
    resetView,
  };
};
