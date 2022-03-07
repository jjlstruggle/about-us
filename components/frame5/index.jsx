import styles from "./index.module.css";
import vector3 from "../../assets/img/frame5/Vector 43 (1).png";
import Image from "next/image";
export default function Frame5({ vh }) {
  return (
    <div className={styles.frame}>
      <div
        className={styles.font1 + " font2"}
        style={{
          height: 34 * vh,
          top: 147 * vh,
        }}
      >
        关于
      </div>
      <div
        className={styles.font2 + " font3"}
        style={{
          height: 50 * vh,
          top: 212 * vh,
        }}
      >
        我们的部门！
      </div>
      <div
        className={styles.box}
        style={{
          top: 75 * vh,
        }}
      >
        <Image src={vector3}></Image>
      </div>
    </div>
  );
}
