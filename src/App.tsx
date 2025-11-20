import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import { lazy, Suspense } from "react";
import Loading from "./components/ui/loading";
import Home from "./pages/Home";

// Lazy load all pages for code splitting
const InvestmentOpportunities = lazy(
  () => import("./pages/InvestmentOpportunities")
);
const Sectors = lazy(() => import("./pages/Sectors"));

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
