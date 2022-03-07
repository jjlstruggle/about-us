import styles from "./index.module.css";
import vector4 from "../../assets/img/frame7/Vector 43.png";
import Image from "next/image";
import square from "../../assets/img/frame6/square.png";

export default function Frame7({ vh }) {
  return (
    <div className={styles.frame}>
      <div
        className={styles.box}
        style={{
          marginTop: 117 * vh,
        }}
      >
        <Image src={vector4}></Image>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <div
          className={"font2"}
          style={{
            height: 34 * vh,
            marginBottom: 31 * vh,
            marginTop: 135 * vh,
          }}
        >
          看看
        </div>
        <div
          className={"font3"}
          style={{
            height: 50 * vh,
          }}
        >
          我们的21年!
        </div>
      </div>
      <div
        className={styles.box2}
        style={{
          marginTop: 129 * vh,
        }}
      >
        <Image src={square}></Image>
      </div>
    </div>
  );
}
