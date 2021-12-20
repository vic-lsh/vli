import { GetStaticPaths, GetStaticProps } from "next";

import React from "react";
import { PostContent } from "../../components/post-content";
import { PostLayout } from "../../components/post-layout";
import { getPostBySlug, Post, readPosts } from "../../libs/posts";

export default function BlogPost() {
  return <div></div>;
}
