import { GetStaticPaths, GetStaticProps } from "next";

import React from "react";
import ReactMarkdown from "react-markdown";
import { PostBody } from "../../components/post-body";
import { PostLayout } from "../../components/post-layout";
import { getPostBySlug, Post, readPosts } from "../../libs/posts";

interface StaticProps {
  post: Post;
}

export default function BlogPost({ post }: StaticProps) {
  return (
    <PostLayout>
      <PostBody post={post} />
    </PostLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const postSlug = typeof slug === "string" ? slug : slug.at(-1);
  const post = await getPostBySlug(postSlug);

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await readPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};
