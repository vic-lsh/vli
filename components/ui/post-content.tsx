import ReactMarkdown from "react-markdown";
import { Post } from "../../libs/posts";

export const PostContent: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl dark:text-dark-accent">{post.meta.title}</h2>
      <div className="dark:text-blue-200">{post.meta.dateStr}</div>

      <div
        className="flex flex-col py-4 gap-8 dark:text-gray-300"
        data-cy="post-body"
      >
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};
