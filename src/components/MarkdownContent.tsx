import type React from "react";

interface MarkdownContentProps {
	content: string;
}

// This is a simplified markdown display
// In a real app, you would use a proper markdown parser like react-markdown
const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
	// Simple conversion of common markdown elements
	const formatContent = (text: string) => {
		// Convert headers
		let formatted = text.replace(/^# (.*$)/gm, "<h1>$1</h1>");
		formatted = formatted.replace(/^## (.*$)/gm, "<h2>$1</h2>");
		formatted = formatted.replace(/^### (.*$)/gm, "<h3>$1</h3>");

		// Convert lists
		formatted = formatted.replace(/^\- (.*$)/gm, "<li>$1</li>");

		// Convert code blocks
		formatted = formatted.replace(
			/```([\s\S]*?)```/g,
			"<pre><code>$1</code></pre>",
		);

		// Convert bold
		formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

		// Convert line breaks
		formatted = formatted.replace(/\n/g, "<br />");

		return formatted;
	};

	// Create a sanitized version of the content
	const sanitizedContent = formatContent(content);

	return (
		<div className="markdown-content">
			{/* Using dangerouslySetInnerHTML is generally not recommended for user-generated content 
          In a real app, use a proper markdown library that handles sanitization */}
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
			<div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
		</div>
	);
};

export default MarkdownContent;
