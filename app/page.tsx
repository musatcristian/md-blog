import B from "@/components/Blog";
import { Blog } from "@/types/blog";

const fetchMockBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "force-cache",
      next: { revalidate: 3600, tags: ["blogs"] },
    });

    return response.json();
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export default async function Page() {
  const blogs = await fetchMockBlogs();

  const list = blogs.slice(0, 5).map((b) => {
    return <B key={b.id} {...b} />;
  });

  return list;
}
