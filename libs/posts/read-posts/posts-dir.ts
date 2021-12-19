import path from "path";

const makeAbsPath = (...pathSegment: string[]) => {
  const paths = [process.cwd(), ...pathSegment];
  return path.join(...paths);
};

export const makePostsFixturePath = (...subDirectory: string[]) => {
  const segments = ["blogs", "__fixtures__", ...subDirectory];
  return makeAbsPath(...segments);
};
