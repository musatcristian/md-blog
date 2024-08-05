import Link from "next/link";

import { Blog } from "@/types/blog";

export default function (b: Blog) {
  return (
    <div>
      <Link href={`/blog/${b.id}`}>
        <h4>
          {b.title} by {b.userId}
        </h4>
      </Link>
      <p>{b.body}</p>
    </div>
  );
}
