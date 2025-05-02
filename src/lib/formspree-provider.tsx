import { FormspreeProvider } from "@formspree/react";
import type { ReactNode } from "react";

interface FormspreeProviderWrapperProps {
	children: ReactNode;
}

export function FormspreeProviderWrapper({
	children,
}: FormspreeProviderWrapperProps) {
	return (
		<FormspreeProvider project={import.meta.env.FORMSPREE_PROJECT_ID || ""}>
			{children}
		</FormspreeProvider>
	);
}
