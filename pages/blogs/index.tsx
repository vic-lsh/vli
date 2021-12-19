import { GetStaticProps } from "next";
import { Post, readPosts } from "../../libs/posts";
import { PostPreview } from "../../components/post-preview";
import { PostLayout } from "../../components/post-layout";

interface StaticProps {
  posts: Post[];
}

export default function Blogs({ posts }: StaticProps) {
  return (
    <PostLayout>
      <h1 data-cy="header" className="text-5xl">
        Blogs
      </h1>

      <div className="py-8">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </PostLayout>
  );
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const posts = await readPosts();
  return { props: { posts } };
};
