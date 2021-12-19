import path from "path";
import fs from "fs";
import matter from "gray-matter";

interface ReadPostsConfig {
  directory: string;
}

const getFullPathTo = (...pathSegment: string[]) => {
  const paths = [process.cwd(), ...pathSegment];
  console.log(paths, path.join(...paths));

  return path.join(...paths);
};

const defaultPostsDirectory = getFullPathTo("blogs", "content", "posts");

const getPost = (directory: string, fileName: string) => {
  return new Promise((resolve, reject) => {
    const fullFilePath = path.join(directory, fileName);

    fs.readFile(fullFilePath, "utf8", (err, fileData) => {
      if (err) {
        reject(`file at location '${fullFilePath}' does not exist`);
      }

      const { data, content } = matter(fileData);

      resolve({ data, content });
    });
  });
};

export const readPosts = (config: Partial<ReadPostsConfig> = {}) => {
  const { directory = defaultPostsDirectory } = config;

  return new Promise((resolve, reject) => {
    fs.readdir(directory, (err, postFileNames) => {
      if (err) {
        reject(`posts directory does not exist: ${directory}`);
      }
      resolve(
        Promise.all(postFileNames.map((name) => getPost(directory, name)))
      );
    });
  });
};
