import ReactMarkdown from "react-markdown";
import { Post } from "../libs/posts";

export const PostContent: React.FC<{ post: Post }> = ({ post }) => {
  return <ReactMarkdown>{post.content}</ReactMarkdown>;
};
