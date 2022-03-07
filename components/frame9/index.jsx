import styles from "./index.module.css";
import React from "react";
import Image from "next/image";
import vector from "../../assets/img/frame9/Vector 43.png";

export default function Frame9({ vh }) {
  return (
    <div className={styles.frame}>
      <div className={styles.vector} style={{ top: 91 * vh }}>
        <Image src={vector} />
      </div>
      <div className={styles.font1 + " font2"} style={{ top: 91 * vh }}>
        想知道
      </div>
      <div className={styles.font2 + " font3"} style={{ top: 156 * vh }}>
        我们的小伙伴去哪了吗？
      </div>
    </div>
  );
}
