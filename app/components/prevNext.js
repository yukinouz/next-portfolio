import Link from "next/link";
import arrowLeftImg from "@/public/images/arrow-left.svg";
import arrowRightImg from "@/public/images/arrow-right.svg";
import Image from "next/image";

const PrevNext = (props) => {
  return (
    <div className="pnWrapper">
      {0 < props.prev.length && (
        <Link href={`/blog/${props.prev[0].slug}`}>
          <Image
            src={arrowLeftImg}
            alt="arrow-left"
            width={24}
            height={27}
            sizes="100vw"
          />
          <h3> {props.prev[0].frontmatter.title}</h3>
        </Link>
      )}
      {0 < props.next.length && (
        <Link href={`/blog/${props.next[0].slug}`}>
          <h3>{props.next[0].frontmatter.title}</h3>
          <Image
            src={arrowRightImg}
            alt="arrow-right"
            width={24}
            height={27}
            sizes="100vw"
          />
        </Link>
      )}
    </div>
  );
};

export default PrevNext;
