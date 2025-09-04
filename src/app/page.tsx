import { getPosts } from "@/services/api";
import Link from "next/link";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
  const posts = await getPosts(10);

  return (
    <div className="grid grid-cols-3 p-10 gap-4">
      {posts.map((post: Post) => (
        <Link
          key={post.id}
          href={`/post/${post.id}`}
          className="border p-3 rounded shadow-sm block hover:bg-gray-50 transition"
        >
          <h2 className="font-semibold">{post.title}</h2>
          <p className="text-gray-600 line-clamp-2">{post.body}</p>
        </Link>
      ))}
    </div>
  );
}
