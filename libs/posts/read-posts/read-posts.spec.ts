import path from "path";
import { readPosts } from "./read-posts";

const makeAbsPath = (...pathSegment: string[]) => {
  const paths = [process.cwd(), ...pathSegment];
  return path.join(...paths);
};

const makeFixturePath = (...subDirectory: string[]) => {
  const segments = ["blogs", "__fixtures__", ...subDirectory];
  return makeAbsPath(...segments);
};

describe("readPosts", () => {
  describe("load posts", () => {
    const fixturePostsDir = makeFixturePath("functional");

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
        makeFixturePath("invalid", "missing-title"),
        new Error("Post must have a title")
      );
    });
    ``;

    it("should reject if a blog post does not contain publish date", async () => {
      await expectGetPostsRejection(
        makeFixturePath("invalid", "missing-date"),
        new Error("Post must have a date")
      );
    });

    it("should reject if a blog post does not contain published flag", async () => {
      await expectGetPostsRejection(
        makeFixturePath("invalid", "missing-published-state"),
        new Error("Post must have a 'published' flag")
      );
    });
  });
});
