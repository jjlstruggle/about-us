import { useRouter } from "next/router";
import styles from "../styles/article.module.css";

export default function Article() {
  const router = useRouter();
  return <div className={styles.article}></div>;
}
