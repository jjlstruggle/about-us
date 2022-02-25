import styles from "./index.module.css";
import logo from "../../assets/img/logo.png";
import logo1 from "../../assets/img/logo1.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Head({ vh }) {
  const router = useRouter();
  return (
    <div
      className={styles.frame1_bar + " flex-center-center"}
      style={{
        height: 72 * vh,
        color: "#141414",
        backgroundColor: "#f9f9f9",
        position: router.route === "/" ? "absolute" : "relative",
      }}
    >
      <div className={styles.logo}>
        <Image src={logo1}></Image>
      </div>
      <div className={styles.frame1_nav + " flex-center-center"}>
        <Link href="/">
          <div>首页</div>
        </Link>
        <Link href="/about-us">
          <div>关于我们</div>
        </Link>
        <Link href="/join">
          <div>加入我们</div>
        </Link>
      </div>
    </div>
  );
}
