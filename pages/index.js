import styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "../assets/img/logo.png";

/*
 *
 * about-us首页
 */

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.frame1}>
        <div className={styles.frame1_bar + " flex-center-center"}>
          <Image
            src={logo}
            className={styles.logo}
            width={256}
            height={30}
          ></Image>
          <div className={styles.frame1_nav + " flex-center-center"}>
            <div>首页</div>
            <div>关于我们</div>
            <div>加入我们</div>
          </div>
        </div>
      </div>
    </div>
  );
}
