import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  // We need to listen for pathname changes to scroll to top
  // biome-ignore lint/correctness/useExhaustiveDependencies: We only want to scroll on pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
