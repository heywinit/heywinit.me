const BASE_URL = "https://raw.githubusercontent.com/heywinit/blogs/main";

export const getBlogs = async () => {
  const response = await fetch(`${BASE_URL}/index.md`, { cache: "no-store" });

  const content = await response.text();
  const blogEntries = content.split("---");

  return blogEntries
    .map((entry) => {
      if (entry.split("\n").length < 3) {
        return null;
      }
      const [title, date, summary] = entry.split("\n");
      return {
        title,
        date,
        summary,
        url: `/blog/${title.toLowerCase().replace(/ /g, "-")}`,
      };
    })
    .filter((blog) => blog !== null);
};

export const getBlog = async (title: string) => {
  const response = await fetch(
    `${BASE_URL}/${title.toLowerCase().replace(/ /g, "-")}.md`,
    { cache: "no-store" }
  );
  const content = await response.text();
  return content;
};
