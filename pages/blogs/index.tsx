import { GetStaticProps } from "next";
import { Post, readPosts } from "../../libs/posts";
import { BlogPost } from "../../components/blog-post";

interface StaticProps {
  posts: Post[];
}

export default function Blogs({ posts }: StaticProps) {
  return (
    <div>
      <h1 data-cy="header">Blogs</h1>
      {posts.map((post) => (
        <BlogPost key={post.slug} post={post} />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const posts = await readPosts();
  return { props: { posts } };
};
