import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
]);

const root = document.getElementById("root");

if (!root) {
	throw new Error("Root element not found");
}

createRoot(root).render(
	<ThemeProvider>
		<RouterProvider router={router} />
	</ThemeProvider>,
);
