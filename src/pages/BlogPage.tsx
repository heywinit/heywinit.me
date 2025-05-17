import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlog } from "@/services/blogService";
import Header from "@/components/Header";
import Background from "@/components/Background";

export default function BlogPage() {
  const { title } = useParams<{ title: string }>();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (!title) {
          setError("Blog title is missing");
          return;
        }

        setLoading(true);
        const blogContent = await getBlog(title);
        setContent(blogContent);
        setLoading(false);
      } catch (err) {
        setError("Failed to load blog content");
        setLoading(false);
        console.error("Error fetching blog:", err);
      }
    };

    fetchBlog();
  }, [title]);

  // Extract title and date from content if available
  const blogTitle = title ? title.replace(/-/g, " ") : "Blog Post";
  const formattedTitle = blogTitle
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden pt-24 pb-24"
    >
      <Background containerRef={containerRef} />

      <div className="max-w-3xl w-full space-y-12 relative z-10">
        <Header />

        <motion.h1
          className="text-5xl sm:text-6xl font-bold relative inline-block"
          transition={{ duration: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {formattedTitle}
          </span>
        </motion.h1>

        {loading ? (
          <div className="flex justify-center p-8">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="text-red-500 p-8 text-center">{error}</div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="prose prose-green dark:prose-invert max-w-none"
          >
            <div className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: (props) => (
                    <h1 className="text-3xl font-bold my-4" {...props} />
                  ),
                  h2: (props) => (
                    <h2 className="text-2xl font-bold my-3" {...props} />
                  ),
                  h3: (props) => (
                    <h3 className="text-xl font-bold my-2" {...props} />
                  ),
                  a: (props) => (
                    <a
                      className="text-accent hover:text-accent dark:hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  p: (props) => (
                    <p
                      className="text-neutral-700 dark:text-neutral-300 my-4"
                      {...props}
                    />
                  ),
                  ul: (props) => (
                    <ul className="list-disc pl-6 my-4 space-y-2" {...props} />
                  ),
                  ol: (props) => (
                    <ol
                      className="list-decimal pl-6 my-4 space-y-2"
                      {...props}
                    />
                  ),
                  li: (props) => (
                    <li
                      className="text-neutral-700 dark:text-neutral-300"
                      {...props}
                    />
                  ),
                  blockquote: (props) => (
                    <blockquote
                      className="border-l-4 border-primary pl-4 italic my-4 text-neutral-600 dark:text-neutral-400"
                      {...props}
                    />
                  ),
                  code: (props) => {
                    const { className, children, ...rest } = props;
                    const match = /language-(\w+)/.exec(className || "");
                    const isInline =
                      !match &&
                      typeof children === "string" &&
                      !children.includes("\n");

                    return isInline ? (
                      <code
                        className="bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded-sm font-mono text-sm"
                        {...rest}
                      >
                        {children}
                      </code>
                    ) : (
                      <code
                        className="block bg-neutral-100 dark:bg-neutral-800 p-4 rounded-sm font-mono text-sm overflow-auto my-4"
                        {...rest}
                      >
                        {children}
                      </code>
                    );
                  },
                  pre: (props) => (
                    <pre
                      className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-sm overflow-auto my-4"
                      {...props}
                    />
                  ),
                  img: (props) => {
                    const { src, alt, ...rest } = props;
                    return (
                      // biome-ignore lint/a11y/useAltText: <explanation>
                      <img
                        src={src}
                        alt={alt ? alt : "Blog content image"}
                        className="max-w-full h-auto rounded-sm my-4"
                        {...rest}
                      />
                    );
                  },
                  hr: (props) => (
                    <hr
                      className="border-neutral-200 dark:border-neutral-800 my-8"
                      {...props}
                    />
                  ),
                  table: (props) => (
                    <div className="overflow-x-auto my-4">
                      <table
                        className="min-w-full border border-neutral-200 dark:border-neutral-800"
                        {...props}
                      />
                    </div>
                  ),
                  th: (props) => (
                    <th
                      className="border border-neutral-200 dark:border-neutral-800 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 font-medium"
                      {...props}
                    />
                  ),
                  td: (props) => (
                    <td
                      className="border border-neutral-200 dark:border-neutral-800 px-4 py-2"
                      {...props}
                    />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          className="text-center text-neutral-500 text-sm pt-10 border-t border-neutral-200 dark:border-neutral-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p>© {new Date().getFullYear()} winit. All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}
