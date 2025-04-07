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
			className="fixed top-4 right-4 transition-colors"
			size="icon"
		>
			{theme === "light" ? "D" : "L"}
		</Button>
	);
}
