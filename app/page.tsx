import { Blog } from "../types";

const fetchMockBlogs = async (): Promise<Blog[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "force-cache",
      next: { revalidate: 3600 },
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
    return (
      <div>
        <h4>
          {b.title} by {b.userId}
        </h4>
        <p>{b.body}</p>
      </div>
    );
  });

  return list;
}
