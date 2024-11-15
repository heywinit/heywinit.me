import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/Home";
import { Loader } from "./components/ui/Loader";
import "./index.css";
import Arsenal from "./pages/Arsenal";
import About from "./pages/About";
import Projects from "./pages/Projects/Projects";
import AvionicsAviation from "./pages/AvionicsAviation";
import Blog from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404</div>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/arsenal",
    element: <Arsenal />,
  },
  {
    path: "/avionics-aviation",
    element: <AvionicsAviation />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Loader />
    <RouterProvider router={router} />
  </ThemeProvider>,
);
