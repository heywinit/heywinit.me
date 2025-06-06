import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import { ScrollToTop } from "./components/ScrollToTop.tsx";
import { Analytics } from "@vercel/analytics/react";

// Root layout that includes ScrollToTop
function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "blog/:title",
        element: <BlogPage />,
      },
    ],
  },
  {
    path: "/discord",
    element: (
      <Navigate to="https://discord.com/users/1272156033896153113" replace />
    ),
  },
]);

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <ThemeProvider defaultTheme="dark">
    <RouterProvider router={router} />
    <Analytics />
  </ThemeProvider>
);
