import Footer from "./components/footer";
import Header from "./components/header";
import "./styles/all.css";
import "./styles/blog.css";
import "./styles/common.css";
import "./styles/contact.css";
import "./styles/index.css";
import "./styles/singleBlog.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="jp">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
