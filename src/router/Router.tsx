import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App.tsx";
import RootLayout from "@/router/Layout/RootLayout.tsx";
import ToastPage from "src/components/Pages/ToastPage";
import AtomsPage from "@/components/Pages/AtomsPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/toast",
          element: <ToastPage />,
        },
        {
          path: "/atoms",
          element: <AtomsPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
