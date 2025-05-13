import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import {
	ThemeProvider,
	useThemeKeyboardShortcut,
} from "./components/theme-provider.tsx";

// Wrapper component that enables the global keyboard shortcut
function ThemeKeyboardShortcutProvider({
	children,
}: { children: React.ReactNode }) {
	useThemeKeyboardShortcut();
	return <>{children}</>;
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
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
		<ThemeKeyboardShortcutProvider>
			<RouterProvider router={router} />
		</ThemeKeyboardShortcutProvider>
	</ThemeProvider>,
);
