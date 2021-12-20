import path from "path";

const makeAbsPath = (...pathSegment: string[]) => {
  const paths = [process.cwd(), ...pathSegment];
  return path.join(...paths);
};

export const makePostsFixturePath = (...subDirectory: string[]) => {
  const segments = ["blogs", "__fixtures__", ...subDirectory];
  return makeAbsPath(...segments);
};

export const resolvePostsDir = (): string => {
  const env = process.env.NODE_ENV;

  // APP_ENV is set to `test` in builds for tests, such as a build for e2e tests.
  // NODE_ENV is never set to `test`. See:
  // https://github.com/vercel/next.js/issues/9123#issuecomment-543784086
  const appEnv = process.env.APP_ENV;

  if (env === "development" || appEnv === "test") {
    return makePostsFixturePath("functional");
  } else {
    return makeAbsPath("blogs", "content", "posts");
  }
};
