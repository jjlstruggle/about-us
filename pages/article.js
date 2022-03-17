import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getArticleInfo } from "../api";
import styles from "../styles/article.module.css";

export default function Article() {
  const router = useRouter();

  const [articleInfo, setArticleInfo] = useState({});
  const [loading, setLoadingState] = useState(true);
  useEffect(() => {
    const { aid } = router.query;
    if (!aid) {
      return;
    }
    getArticleInfo(aid).then((res) => {
      console.log(res);
      if (res) {
        setArticleInfo(res.essay);
        setLoadingState(false);
      }
    });
  }, [router.query]);
  return <div className={styles.article}></div>;
}
