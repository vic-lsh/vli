import React from "react";
import { Post } from "../libs/posts";

interface Props {
  post: Post;
}

export const BlogPost: React.FC<Props> = ({ post }) => {
  const { title } = post.meta;

  return (
    <div data-cy="blog-post">
      <h2>{title}</h2>
    </div>
  );
};
