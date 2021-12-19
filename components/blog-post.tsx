import React, { useMemo, useRef } from "react";
import { Post } from "../libs/posts";

interface Props {
  post: Post;
}

const trimSummary = (nWords: number, body: string) => {
  return body.split(" ").slice(0, nWords).join(" ");
};

export const BlogPost: React.FC<Props> = ({ post }) => {
  const { title, dateStr } = post.meta;
  const summary = useMemo(() => trimSummary(50, post.content), [post.content]);

  return (
    <header data-cy="blog-post" className="py-3">
      <div className="flex items-center justify-between">
        <h2 data-cy="title" className="text-xl font-medium">
          {title}
        </h2>
        <span data-cy="date">{dateStr}</span>
      </div>
      <span data-cy="summary">{summary}</span>
    </header>
  );
};
