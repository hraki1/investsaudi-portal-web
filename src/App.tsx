import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import { lazy, Suspense } from "react";
import Loading from "./components/ui/loading";
import Home from "./pages/Home";

const InvestmentOpportunities = lazy(
  () => import("./pages/InvestmentOpportunities")
);
const Sectors = lazy(() => import("./pages/Sectors"));
const Earth = lazy(() => import("./pages/Earth"));
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "investment-opportunities",
          element: <InvestmentOpportunities />,
        },
        { path: "sectors", element: <Sectors /> },
        { path: "earth", element: <Earth /> },
      ],
    },
  ]);
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
