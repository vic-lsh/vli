import React from "react";
import { PostContent } from "../../../components/ui/post-content";
import { PostLayout } from "../../../components/ui/post-layout";
import { getPostBySlug, readPosts } from "../../../libs/posts";

export default async function BlogPost({ params }) {
  const { slug } = params;

  const postSlug = typeof slug === "string" ? slug : slug.at(-1);
  const post = await getPostBySlug(postSlug);

  return (
    <PostLayout>
      <PostContent post={post} />
    </PostLayout>
  );
}

export async function generateStaticParams() {
  const posts = await readPosts();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return paths;
}
