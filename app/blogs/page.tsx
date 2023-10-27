import { Post, readPosts } from "../../libs/posts";
import { PostPreview } from "../../components/post-preview";
import { PostLayout } from "../../components/post-layout";
import { SubrouteHeading } from "../../components/subroute-heading";

const BlogPreviews: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const NO_POSTS_MSG = "Oops, there's no blog post yet.";

  return (
    <div className="py-6">
      {!posts || posts.length === 0 ? (
        <div>{NO_POSTS_MSG}</div>
      ) : (
        posts.map((post) => <PostPreview key={post.slug} post={post} />)
      )}
    </div>
  );
};

export default async function Blogs() {
  const posts = await readPosts();
  return (
    <PostLayout>
      <SubrouteHeading>
        <span data-cy="header">/blogs</span>
      </SubrouteHeading>

      <BlogPreviews posts={posts}></BlogPreviews>
    </PostLayout>
  );
}
