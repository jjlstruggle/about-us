import styles from "./index.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import logo1 from "../../assets/img/logo1.png";
export default function Head() {
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const body = document.querySelector("body");
    setVh(body.clientHeight / 720);
  }, []);

  return (
    <div
      className={styles.frame1_bar + " flex-center-center"}
      style={{ height: 72 * vh }}
    >
      <div className={styles.logo}>
        <Image src={logo1}></Image>
      </div>
      <div className={styles.frame1_nav + " flex-center-center"}>
        <div>首页</div>
        <div>关于我们</div>
        <div>加入我们</div>
      </div>
    </div>
  );
}
