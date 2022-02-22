import styles from "./index.module.css";
import Image from "next/image";
import flower from "../../assets/img/frame11/flower.png";
import yinhao from "../../assets/img/frame11/Vector (2).png";
import logo from "../../assets/img/frame11/logo.png";
import qrcode1 from "../../assets/img/frame4/qrcode2.png";
import qrcode2 from "../../assets/img/frame11/qrcode.png";
export default function Frame10({ vh }) {
  return (
    <div className={styles.frame}>
      <div className={styles.head} style={{ height: 256 * vh }}>
        <div className={styles.y1} style={{ top: 46 * vh }}>
          <Image src={yinhao} />
        </div>
        <div className={styles.flower}>
          <Image src={flower} />
        </div>
        <div className={styles.y2} style={{ top: 128 * vh }}>
          <Image src={yinhao} />
        </div>
        <div className={styles.font + " font2"} style={{ top: 80 * vh }}>
          我们之所以来到这个世界上 ，是因为上天想让我们遇见 ，一些可爱又有趣的人
          红岩网校工作站期待你的加入！！！
        </div>
      </div>
      <div className={styles.foot} style={{ height: 260 * vh }}>
        <div className={styles.logo} style={{ top: 73 * vh }}>
          <Image src={logo} />
        </div>
        <div className={styles.link} style={{ top: 64 * vh }}>
          <div>重邮小帮手</div>
          <div>官方QQ</div>
          <div>|</div>
          <div>媒体站</div>
          <div>掌上重邮</div>
          <div>开源镜像站</div>
        </div>
        <div className={styles.imf} style={{ top: 131 * vh }}>
          <div className="font1">Email：redrock@cqupt.edu.cn(023-62461084)</div>
          <div className="font1">
            地址：重庆市南岸区崇文路2号（重庆邮电大学）400065
          </div>
          <div className="font1">copyright@红岩网校工作站</div>
        </div>
      </div>
    </div>
  );
}
