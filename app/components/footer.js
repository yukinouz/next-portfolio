import Link from "next/link";
import Image from "next/image";
import githubImg from "@/public/images/github.svg";
import linkedinImg from "@/public/images/linkedin.svg";
import twitterImg from "@/public/images/twitter.svg";
import facebookImg from "@/public/images/facebook.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.google.com/">
          <Image
            src={githubImg}
            alt="GitHub"
            width={40}
            height={40}
            sizes="100vw"
          />
        </a>
        <a href="https://www.google.com/">
          <Image
            src={linkedinImg}
            alt="Linkedin"
            width={40}
            height={40}
            sizes="100vw"
          />
        </a>
        <a href="https://www.google.com/">
          <Image
            src={twitterImg}
            alt="Twitter"
            width={40}
            height={40}
            sizes="100vw"
          />
        </a>
        <a href="https://www.google.com/">
          <Image
            src={facebookImg}
            alt="Facebook"
            width={40}
            height={40}
            sizes="100vw"
          />
        </a>
        <hr />
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <p>©{new Date().getFullYear()} Abe Hiroki</p>
      </div>
    </footer>
  );
};

export default Footer;
