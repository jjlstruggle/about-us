import styles from "../styles/Home.module.css";
import Image from "next/image";
import logo from "../assets/img/logo.png";
import leftWind from "../assets/img/zuobianyun.png";
import dizou from "../assets/img/dizuo.png";
import quanquan from "../assets/img/quanquan.png";
import juanjuan from "../assets/img/juanjuan.png";
import ball from "../assets/img/ball.png";
import bolikuai from "../assets/img/bolikuai.png";
import zuoxia from "../assets/img/zouxia.png";
import zhongjian from "../assets/img/zhongjian.png";
import youshang from "../assets/img/youshang.png";
import yes from "../assets/img/yes.png";
import banzi from "../assets/img/banzi.png";
import yun from "../assets/img/youshangyun.png";
import youxia from "../assets/img/youxia.png";
import ball2 from "../assets/img/ball2.png";

/*
 *
 * about-us首页
 */

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.frame1}>
        <div className={styles.leftWind}>
          <Image src={leftWind}></Image>
        </div>
        <div className={styles.frame1_bar + " flex-center-center"}>
          <div className={styles.logo}>
            <Image src={logo}></Image>
          </div>

          <div className={styles.frame1_nav + " flex-center-center"}>
            <div>首页</div>
            <div>关于我们</div>
            <div>加入我们</div>
          </div>
        </div>
        <div className={styles.diZuo}>
          <Image src={dizou}></Image>
        </div>
        <div className={styles.quanquan}>
          <Image src={quanquan}></Image>
        </div>
        <div className={styles.juanjuan}>
          <Image src={juanjuan}></Image>
        </div>
        <div className={styles.ball}>
          <Image src={ball}></Image>
        </div>
        <div className={styles.bolikuai}>
          <Image src={bolikuai}></Image>
        </div>
        <div className={styles.zuoxia}>
          <Image src={zuoxia}></Image>
        </div>
        <div className={styles.zhongjian}>
          <Image src={zhongjian}></Image>
        </div>
        <div className={styles.yun}>
          <Image src={yun}></Image>
        </div>
        <div className={styles.youshang}>
          <Image src={youshang}></Image>
        </div>
        <div className={styles.banzi}>
          <Image src={banzi}></Image>
        </div>
        <div className={styles.yes}>
          <Image src={yes}></Image>
        </div>
        <div className={styles.youxia}>
          <Image src={youxia}></Image>
        </div>
        <div className={styles.ball2}>
          <Image src={ball2}></Image>
        </div>
      </div>
      <div className={styles.frame2}></div>
    </div>
  );
}
