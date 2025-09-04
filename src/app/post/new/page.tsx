"use client";

import { createPost } from "@/services/api";
import { useState } from "react";


export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = await createPost({ title, body, userId: 1 });
    alert("Post created: " + JSON.stringify(newPost));
  };

  return (
    <form onSubmit={handleSubmit} className="p-10 max-w-xl mx-auto space-y-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 w-full"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create
      </button>
    </form>
  );
}
