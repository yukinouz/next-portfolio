import Link from "next/link";
import Image from "next/image";
import { getAllBlogs, blogsPerPage } from "../utils/mdQueries";
import Pagination from "../components/pagination";

export const metadata = {
  title: "ブログ",
  description: "ブログページです。",
};

const Blog = async () => {
  const { blogs, numberPages } = await getAllBlogs();
  const limitedBlogs = blogs.slice(0, blogsPerPage);
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>ブログページです。</h1>
          <p>記事一覧です</p>
          {limitedBlogs.map((blog, index) => (
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
        <Pagination numberPages={numberPages} />
      </div>
    </>
  );
};

export default Blog;
