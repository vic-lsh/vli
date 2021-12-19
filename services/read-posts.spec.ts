import path from "path";
import { readPosts } from "./read-posts";

describe("readPosts", () => {
  const fixturePostsDir = path.join(
    process.cwd(),
    "blogs",
    "content",
    "__fixtures__",
    "functional"
  );

  it("should read posts from the posts directory", async () => {
    const posts = await readPosts({ directory: fixturePostsDir });
    expect(posts).toMatchSnapshot();
  });

  it("can be called without arguments", async () => {
    expect(await readPosts()).not.toBeNull();
  });
});
