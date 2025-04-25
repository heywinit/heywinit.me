import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<Button
			type="button"
			onClick={toggleTheme}
			className="fixed bottom-4 right-4 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all hover:scale-110 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary-hover"
			aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
		>
			{theme === "light" ? "D" : "L"}
		</Button>
	);
}
