import Link from "next/link";
import React, { useMemo } from "react";
import { Post } from "../libs/posts";

interface Props {
  post: Post;
}

const trimSummary = (nWords: number, body: string) => {
  return body.split(" ").slice(0, nWords).join(" ");
};

export const PostPreview: React.FC<Props> = ({ post }) => {
  const { title, dateStr } = post.meta;
  const summary = useMemo(() => trimSummary(50, post.content), [post.content]);

  return (
    <Link href="/blogs/[slug]" as={`/blogs/${post.slug}`} passHref>
      <header data-cy="post-preview" className="py-6 cursor-pointer">
        <div className="flex items-center justify-between">
          <h2 data-cy="title" className="text-2xl font-medium py-2">
            <a className="hover:underline cursor-pointer">{title}</a>
          </h2>
          <span data-cy="date">{dateStr}</span>
        </div>
        <span data-cy="summary" className="dark:text-gray-300">
          {summary}
        </span>
      </header>
    </Link>
  );
};
