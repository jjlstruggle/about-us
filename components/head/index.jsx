import styles from "./index.module.css";
import logo from "../../assets/img/logo.png";
import logo1 from "../../assets/img/logo1.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
let open = true;
export default function Head({ vh }) {
  const router = useRouter();
  const [mode, setMode] = useState("default");
  function whell(e) {
    const s = e.wheelDelta || e.detail;
    if (s === 150 && open && mode === "default") {
      setMode("over");
      return;
    }
    if (s === 150 && mode === "over") {
      setMode("default");
      open = false;
      return;
    }
    if (s < 0) {
      setMode("default");
      open = true;
    }
  }
  useEffect(() => {
    if (router.route === "/about-us") document.onmousewheel = whell;
    else document.onmousewheel = null;
  }, [router.route, mode]);
  if (router.route === "/about-us")
    return (
      <div
        className={styles.frame1_bar + " flex-center-center"}
        style={{
          height: 72 * vh,
          color: mode === "default" ? "#fafafa" : "#141414",
          backgroundColor: mode === "default" ? "" : "#f9f9f9",
          position: "absolute",
        }}
        onMouseOver={() => {
          if (mode === "default") {
            setMode("over");
          }
        }}
        onMouseLeave={() => {
          setMode("default");
        }}
      >
        <div className={styles.logo}>
          <Image src={mode === "default" ? logo : logo1}></Image>
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
  return (
    <div
      className={styles.frame1_bar + " flex-center-center"}
      style={{
        height: 72 * vh,
        color: "#141414",
        backgroundColor: "#f9f9f9",
        position: router.route === "/about-us" ? "absolute" : "relative",
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
