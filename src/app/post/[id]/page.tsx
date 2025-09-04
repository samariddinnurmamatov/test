import { getPost, getPostComments } from "@/services/api";

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}


export default async function PostPage({ params }: any) {
  const postId = parseInt(params.id, 10);

  console.log(params.id);

  const post: Post = await getPost(postId);
  const comments: Comment[] = await getPostComments(postId);

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.body}</p>

      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      <ul className="space-y-3">
        {comments.map((c) => (
          <li key={c.id} className="border p-3 rounded">
            <p className="font-medium">{c.name}</p>
            <p className="text-gray-600">{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}