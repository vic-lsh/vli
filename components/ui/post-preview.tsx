import Link from "next/link";
import React, { useMemo } from "react";
import { Post } from "../../libs/posts";

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
      <span data-cy="post-preview" className="py-6 cursor-pointer">
        <span className="flex flex-col gap-2 py-2 md:flex-row md:items-center md:justify-between">
          <span
            data-cy="title"
            className="text-2xl font-medium dark:text-dark-accent"
          >
            <span className="hover:underline cursor-pointer">{title}</span>
          </span>
          <span data-cy="date" className="dark:text-gray-400">
            {dateStr}
          </span>
        </span>
        <span data-cy="summary" className="dark:text-gray-300">
          {summary}
        </span>
      </span>
    </Link>
  );
};
