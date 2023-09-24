import fs from "fs"; // ファイル読み込みに
import matter from "gray-matter";
import path from "path"; // ファイルへのパスを扱う

export const blogsPerPage = 5; // ページあたりに表示する記事の数

export async function getAllBlogs() {
  // dataディレクトリにアクセスし、中のデータをfilesに格納
  const files = fs.readdirSync(path.join("data"));
  const blogs = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const fileData = fs.readFileSync(path.join("data", fileName), "utf-8");
    const { data } = matter(fileData);
    return {
      frontmatter: data,
      slug: slug,
    };
  });
  const orderedBlogs = blogs.sort((a, b) => {
    // id順に並べる
    return b.frontmatter.id - a.frontmatter.id;
  });

  const numberPages = Math.ceil(orderedBlogs.length / blogsPerPage); // 合計記事数 / 1ページあたりに表示する記事数 = ページネーションの数(numberPages)

  return {
    blogs: orderedBlogs,
    numberPages: numberPages,
  };
}

export async function getSingleBlog(context) {
  const { slug } = context.params;
  const data = await import(`@/data/${slug}.md`);
  const singleDocument = matter(data.default);

  return {
    singleDocument: singleDocument,
  };
}
