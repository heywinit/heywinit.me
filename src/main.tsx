import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import { Loader } from "./components/ui/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404</div>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Loader />
    <RouterProvider router={router} />
  </ThemeProvider>,
);
