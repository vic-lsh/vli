import { makePostsFixturePath } from "./posts-dir";
import { getPostBySlug, readPosts } from "./read-posts";

const fixturePostsDir = makePostsFixturePath("functional");

describe("readPosts", () => {
  describe("load posts", () => {
    it("should read posts from the posts directory", async () => {
      const posts = await readPosts({ directory: fixturePostsDir });
      expect(posts).toMatchSnapshot();
    });

    it("can be called without arguments", async () => {
      // this gets posts from the real directory, where actual posts live
      expect(await readPosts()).not.toBeNull();
    });

    it("sorts posts in reverse-chronological order", async () => {
      const posts = await readPosts({ directory: fixturePostsDir });

      // validate posts are sorted in descending date order
      posts.reduce((prevPostDate, currPost) => {
        const currPostDate = new Date(currPost.meta.dateStr);
        expect(currPostDate.getTime()).toBeLessThanOrEqual(prevPostDate);
        return currPostDate.getTime();
      }, new Date().getTime());
    });

    it("does not return any unpublished posts", async () => {
      const posts = await readPosts({ directory: fixturePostsDir });

      const containsUnpublished = posts.some(
        (post) => post.meta.published === false
      );

      expect(containsUnpublished).toEqual(false);
    });
  });

  describe("load invalid posts", () => {
    const expectGetPostsRejection = async (
      directory: string,
      expectedError: any
    ) => {
      expect.assertions(1);
      const getPosts = readPosts({ directory });
      await expect(getPosts).rejects.toEqual(expectedError);
    };

    it("should reject if a blog post does not contain title", async () => {
      await expectGetPostsRejection(
        makePostsFixturePath("invalid", "missing-title"),
        new Error("Post must have a title")
      );
    });

    it("should reject if a blog post does not contain publish date", async () => {
      await expectGetPostsRejection(
        makePostsFixturePath("invalid", "missing-date"),
        new Error("Post must have a date")
      );
    });

    it("should reject if a blog post does not contain published flag", async () => {
      await expectGetPostsRejection(
        makePostsFixturePath("invalid", "missing-published-state"),
        new Error("Post must have a 'published' flag")
      );
    });
  });
});

describe("getPostBySlug", () => {
  it("should be able to retrieve a blog post", async () => {
    expect(
      await getPostBySlug("sample-post", { directory: fixturePostsDir })
    ).toMatchSnapshot();
  });
});
