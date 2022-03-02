import styles from "./index.module.css";
import square from "../../assets/img/frame6/square.png";
import chanpin from "../../assets/img/frame6/chanpin.png";
import shijue from "../../assets/img/frame6/shijue.png";
import yidong from "../../assets/img/frame6/yidongg.png";
import yunwei from "../../assets/img/frame6/yunwei.png";
import web from "../../assets/img/frame6/web.png";
import Image from "next/image";
export default function Frame6({ vh }) {
  return (
    <div className={styles.frame} style={{ paddingTop: 118 * vh }}>
      <div
        className={styles.square}
        style={{
          height: 205 * vh,
        }}
      >
        <div
          className={styles.pic1}
          style={{ marginTop: 28 * vh, marginBottom: 13 * vh }}
        >
          <Image src={chanpin}></Image>
        </div>
        <div
          className={styles.title2 + " font2"}
          style={{ marginBottom: 4 * vh }}
        >
          产品策划及运营部
        </div>
        <div className={styles.title2 + " font1"}>“创意聚集港，产品造梦厂”</div>
      </div>
      <div
        className={styles.square}
        style={{
          height: 205 * vh,
        }}
      >
        <div
          className={styles.pic2}
          style={{ marginTop: 20 * vh, marginBottom: 4 * vh }}
        >
          <Image src={shijue}></Image>
        </div>
        <div
          className={styles.title3 + " font2"}
          style={{ marginBottom: 4 * vh }}
        >
          视觉设计部
        </div>
        <div className={styles.title3 + " font1"}>
          “色彩涂抹梦想，画笔创造未来”
        </div>
      </div>
      <div className={styles.fragment1} style={{ height: 205 * vh }}></div>
      <div
        className={styles.square}
        style={{
          height: 205 * vh,
        }}
      >
        <div
          className={styles.pic1}
          style={{ marginTop: 28 * vh, marginBottom: 16 * vh }}
        >
          <Image src={yidong}></Image>
        </div>
        <div
          className={styles.title3 + " font2"}
          style={{ marginBottom: 4 * vh }}
        >
          移动开发部
        </div>
        <div className={styles.title3 + " font1"}>“方寸间世界的创造者“</div>
      </div>
      <div className={styles.fragment2} style={{ height: 205 * vh }}></div>
      <div className={styles.square2}>
        <Image src={square}></Image>
      </div>
      <div
        className={styles.square}
        style={{
          height: 205 * vh,
        }}
      >
        <div
          className={styles.pic2}
          style={{ marginTop: 9 * vh, marginBottom: 8 * vh }}
        >
          <Image src={web}></Image>
        </div>
        <div
          className={styles.title3 + " font2"}
          style={{ marginBottom: 4 * vh }}
        >
          WEB研发部
        </div>
        <div className={styles.title3 + " font1"}>
          “WEB，实现互联网的不可思议”
        </div>
      </div>
      <div
        className={styles.square}
        style={{
          height: 205 * vh,
        }}
      >
        <div
          className={styles.pic1}
          style={{ marginTop: 28 * vh, marginBottom: 13 * vh }}
        >
          <Image src={yunwei}></Image>
        </div>
        <div
          className={styles.title3 + " font2"}
          style={{ marginBottom: 4 * vh }}
        >
          运维安全部
        </div>
        <div className={styles.title3 + " font1"}>“运维安全在，网校没意外”</div>
      </div>
    </div>
  );
}
