import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/search.module.css";
import search from "../assets/img/search.png";
import close from "../assets/img/close.png";
import { useRouter } from "next/router";

export default function Search({ vh }) {
  let height = (720 - 72 - 260) * vh;
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.search_box} style={{ height }}>
      <div
        className={styles.search_head}
        style={{ paddingTop: 120 * vh, marginTop: 70 * vh }}
      >
        <div className={styles.ipt_box}>
          <input
            className={styles.search_ipt}
            placeholder="我想找找"
            style={{ paddingBottom: 20 * vh }}
          />
          <div className={styles.search_icon + " flex-center-center"}>
            <Image src={search} />
          </div>
        </div>
        <div
          className={styles.search_line}
          style={{ borderBottomWidth: 1.5 * vh }}
        ></div>
        <div className={styles.close} onClick={router.back}>
          <Image src={close} />
        </div>
      </div>
    </div>
  );
}
