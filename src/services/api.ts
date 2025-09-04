const API_URL = process.env.API_URL;

export const getPosts = async (limit?: number) => {
  const url = limit ? `${API_URL}/posts?_limit=${limit}` : `${API_URL}/posts`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export const getPost = async (id: number) => {
  const res = await fetch(`${API_URL}/posts/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
};

export const getPostComments = async (id: number) => {
  const res = await fetch(`${API_URL}/posts/${id}/comments`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
};

export const getCommentsByPost = async (postId: number) => {
  const res = await fetch(`${API_URL}/comments?postId=${postId}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch comments by postId");
  return res.json();
};

export const createPost = async (data: {
  title: string;
  body: string;
  userId: number;
}) => {
  const res = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create post");
  return res.json();
};

export const updatePost = async (
  id: string,
  data: { title: string; body: string; userId: number }
) => {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update post");
  return res.json();
};

export const patchPost = async (
  id: string,
  data: Partial<{ title: string; body: string; userId: number }>
) => {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to patch post");
  return res.json();
};

export const deletePost = async (id: string) => {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete post");
  return { success: true };
};
