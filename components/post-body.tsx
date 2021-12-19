import ReactMarkdown from "react-markdown";
import { Post } from "../libs/posts";

export const PostBody: React.FC<{ post: Post }> = ({ post }) => {
  return <ReactMarkdown>{post.content}</ReactMarkdown>;
};
