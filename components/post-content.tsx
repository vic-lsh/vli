import ReactMarkdown from "react-markdown";
import { Post } from "../libs/posts";

export const PostContent: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl dark:text-blue-300">{post.meta.title}</h2>
      <div className="dark:text-gray-300">{post.meta.dateStr}</div>

      <div className="flex flex-col gap-2" data-cy="post-body">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};
