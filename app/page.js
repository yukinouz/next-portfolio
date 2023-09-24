import Link from "next/link";
import Image from "next/image";
import heroPic from "@/public/images/index-hero.jpg";
import profilePic from "@/public/images/profile.jpg";
import jsImg from "@/public/images/javascript.svg";
import reactImg from "@/public/images/react.svg";
import gatsbyImg from "@/public/images/gatsby.svg";
import nextImg from "@/public/images/next.svg";

export default function Home() {
  return (
    <main>
      <>
        <div className="hero">
          <Image src={heroPic} alt="hero" />
          <div className="textContainer">
            <h1>I&apos;m Abe Hiroki!</h1>
            <h3>JavaScript Developer</h3>
          </div>
        </div>
        <div className="container">
          <div className="profile">
            <div>
              <h2>JavaScript Nerd</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div>
              <Image src={profilePic} alt="hero" />
            </div>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <div className="skillsContainer">
              <div>
                <Image
                  src={jsImg}
                  alt="javascript"
                  width={100}
                  height={100}
                  sizes="100vw"
                />
                <span>JavaScript / 10 years</span>
              </div>
              <div>
                <Image
                  src={reactImg}
                  alt="react"
                  width={100}
                  height={100}
                  sizes="100vw"
                />
                <span>React / 5 years</span>
              </div>
              <div>
                <Image
                  src={gatsbyImg}
                  alt="gatsby"
                  width={100}
                  height={100}
                  sizes="100vw"
                />
                <span>Gatsby / 3 years</span>
              </div>
              <div>
                <Image
                  src={nextImg}
                  alt="next"
                  width={100}
                  height={100}
                  sizes="100vw"
                />
                <span>Next.JS / 3 years</span>
              </div>
            </div>
          </div>
          <div className="ctaButton">
            <Link href="/contact">Make It Happen!</Link>
          </div>
        </div>
      </>
    </main>
  );
}
