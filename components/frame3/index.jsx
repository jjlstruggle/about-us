import Image from "next/image";
import styles from "./index.module.css";
import vector2 from "../../assets/img/frame3/Vector 43.png";

export default function Frame3({ vh }) {
  return (
    <div className={styles.frame}>
      <div className={styles.box}>
        <span
          className={styles.font + " font2"}
          style={{
            top: 167 * vh,
            height: 34 * vh,
          }}
        >
          来看看
        </span>
        <span
          className={styles.font1 + " font3"}
          style={{
            top: 232 * vh,
            height: 50 * vh,
          }}
        >
          我们的产品吧!
        </span>
        <div className={styles.vector2}>
          <Image src={vector2}></Image>
        </div>
      </div>
    </div>
  );
}
