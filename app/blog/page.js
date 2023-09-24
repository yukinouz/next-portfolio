import fs from "fs"; // ファイル読み込みに
import matter from "gray-matter";
import Link from "next/link";
import path from "path"; // ファイルへのパスを扱う
import Image from "next/image";

async function getAllBlogs() {
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
  return {
    blogs: orderedBlogs,
  };
}

const Blog = async () => {
  const { blogs } = await getAllBlogs();
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>ブログページです。</h1>
          <p>記事一覧です</p>
          {blogs.map((blog, index) => (
            <div key={index} className="blogCard">
              <div className="cardContainer">
                <h2>{blog.frontmatter.title}</h2>
                <p>{blog.frontmatter.excerpt}</p>
                <p>{blog.frontmatter.date}</p>
                <Link href={`/blog/${blog.slug}`}>Read More</Link>
              </div>
              <div className="blogImg">
                <Image
                  src={blog.frontmatter.image}
                  alt="card-image"
                  width={1000}
                  height={300}
                  quality={90}
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
