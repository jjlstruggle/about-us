import Image from "next/image";
import styles from "./index.module.css";
import dizou from "../../assets/img/dizuo.png";
import quanquan from "../../assets/img/quanquan.png";
import juanjuan from "../../assets/img/juanjuan.png";
import ball from "../../assets/img/ball.png";
import bolikuai from "../../assets/img/bolikuai.png";
import zuoxia from "../../assets/img/zouxia.png";
import zhongjian from "../../assets/img/zhongjian.png";
import youshang from "../../assets/img/youshang.png";
import yes from "../../assets/img/yes.png";
import banzi from "../../assets/img/banzi.png";
import yun from "../../assets/img/youshangyun.png";
import youxia from "../../assets/img/youxia.png";
import ball2 from "../../assets/img/ball2.png";
import yun2 from "../../assets/img/zuobianyun.png";
import { useEffect, useRef } from "react";
import anime from "animejs";

export default function Frame1({ vh }) {
  const $ban = useRef(null);
  const $yes = useRef(null);
  const $juanjuan = useRef(null);
  const $square = useRef(null);
  const $frame = useRef(null);
  useEffect(() => {
    if (vh) {
      let app = document.querySelector("#app");
      setTimeout(() => {
        anime({
          targets: $ban.current,
          opacity: [0.4, 1],
          translateY: 0,
        });
        $yes.current.style.visibility = "unset";
        anime({
          targets: $yes.current,
          opacity: 1,
          delay: 200,
        });
      }, 500);
      $yes.current.onclick = () => {
        anime({
          targets: $ban.current,
          translateX: 9999,
          delay: 0,
          duration: 10000,
        });
        anime({
          targets: $juanjuan.current,
          translateX: -9999,
          delay: 0,
        });
        anime({
          targets: $square.current,
          translateY: 9999,
          delay: 0,
        });
        anime({
          targets: $frame.current,
          scale: 2,
          delay: 0,
          opacity: 0,
        });
        setTimeout(() => {
          console.dir(vh);
          app.scrollTop = 720 * vh;
        }, 1000);
      };
    }
  }, [vh]);
  return (
    <div className={styles.frame} ref={$frame}>
      <div
        className={styles.zuobianyun}
        style={{
          top: -42 * vh,
        }}
      >
        <Image src={yun2}></Image>
      </div>
      <div
        className={styles.diZuo}
        style={{
          top: 72 * vh,
        }}
      >
        <Image src={dizou}></Image>
      </div>
      <div
        className={styles.quanquan}
        style={{
          top: 148.89 * vh,
        }}
      >
        <Image src={quanquan}></Image>
      </div>
      <div
        className={styles.juanjuan}
        style={{
          top: 95 * vh,
        }}
        ref={$juanjuan}
      >
        <Image src={juanjuan}></Image>
      </div>
      <div
        className={styles.ball}
        style={{
          top: 60 * vh,
        }}
      >
        <Image src={ball}></Image>
      </div>
      <div
        className={styles.bolikuai}
        style={{
          top: 139 * vh,
        }}
        ref={$square}
      >
        <Image src={bolikuai}></Image>
      </div>
      <div className={styles.zuoxia}>
        <Image src={zuoxia}></Image>
      </div>
      <div
        className={styles.zhongjian}
        style={{
          top: 246 * vh,
        }}
      >
        <Image src={zhongjian}></Image>
      </div>
      <div className={styles.yun} style={{ top: 13 * vh }}>
        <Image src={yun}></Image>
      </div>
      <div className={styles.youshang} style={{ top: 60 * vh }}>
        <Image src={youshang}></Image>
      </div>
      <div
        className={styles.banzi}
        style={{
          top: 296.62 * vh,
        }}
        ref={$ban}
      >
        <Image src={banzi}></Image>
      </div>
      <div
        className={styles.yes}
        style={{
          top: 417 * vh,
        }}
        ref={$yes}
      >
        <Image src={yes}></Image>
      </div>
      <div className={styles.youxia}>
        <Image src={youxia}></Image>
      </div>
      <div className={styles.ball2}>
        <Image src={ball2}></Image>
      </div>
    </div>
  );
}
