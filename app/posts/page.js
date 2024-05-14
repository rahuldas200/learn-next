import React from "react";
import {getAllPosts } from "@/lib/getAllPosts";
import Link from "next/link";

export default async function page() {
  const posts = await getAllPosts();

  return (
    <div>
      <p>All posts</p>
      {posts.map((item) => (
        <div className="mt-5 bg-blue-900">
          <p className="mb-2 text-xl">
            <Link href={`/posts/${item.id}`}>{item.title}</Link>
          </p>
        </div>
      ))}
    </div>
  );
}
