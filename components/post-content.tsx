import ReactMarkdown from "react-markdown";
import { Post } from "../libs/posts";

export const PostContent: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl">{post.meta.title}</h2>
      <div>{post.meta.dateStr}</div>

      <div className="flex flex-col gap-2">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};
