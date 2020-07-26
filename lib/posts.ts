import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortBy } from "lodash"

export function getPost(fileName: string) {
  const { data, content } = matter(
    fs.readFileSync(path.join(process.cwd(), "posts", fileName), "utf8").trim()
  );
  const title = data.title;
  const slug = data.slug;
  const tag = data.tag || "";
  const date = data.date.toISOString();
  return { title, slug, date, tag, content };
}

export function getPosts() {
  const fileNames = fs.readdirSync(path.join(process.cwd(), "posts"));
  let posts = [];

  for (const fileName of fileNames) {
    if ([".DS_Store", "..", "."].includes(fileName)) {
      continue;
    }

    posts.push(getPost(fileName));
  }

  return sortBy(posts, post => post.date).reverse()
}