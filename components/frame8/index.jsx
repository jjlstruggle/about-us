import styles from "./index.module.css";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

const data = [
  { time: "2000-10", article: "红岩网校工作站正式成立" },
  {
    time: "2016-12-20",
    article:
      "掌上重邮第一次大改版：新增备忘录，课前提醒，空教室查询，考试与成绩查询，校历查询功能",
  },
  { time: "2000-10", article: "红岩网站第三次被评为年度十佳全国高校学生网站" },
  { time: "2000-10", article: "重邮小帮手公众号上线" },
  {
    time: "2000-10",
    article: "掌上重邮APP上线，推出课表，没课约，资讯，发现四大功能",
  },
  { time: "2000-10", article: "红岩网校工作站正式成立" },
  { time: "2008-10", article: "红岩网校首次登上人民日报" },
];

let offsetLeftArr = [];

const Event = ({ time, article, index, vh, select, setSelect }) => (
  <div
    className={
      index === select
        ? styles.event + " event " + styles.active
        : styles.event + " event"
    }
    style={{
      height: 198 * vh,
      marginTop: 243 * vh,
      transform: `translateY(${select === index ? 316 - 243 : 0}px)`,
    }}
    onClick={() => {
      setSelect(index);
    }}
  >
    <div
      className={
        index === select ? styles.time + " " + styles.active : styles.time
      }
      style={{ marginTop: 24 * vh, marginBottom: 12 * vh }}
    >
      {time}
    </div>
    <div
      className={
        index === select
          ? styles.article + " font4 " + styles.active
          : styles.article + " font4"
      }
    >
      {article}
    </div>
    <div className={styles.range_box} style={{ transform: "rotate(30deg)" }}>
      <div
        className={
          index === select ? styles.active + " " + styles.range : styles.range
        }
      ></div>
    </div>
  </div>
);

export default function Frame8() {
  const [vh, setVh] = useState(0);
  const [select, setSelect] = useState(0);

  useEffect(() => {
    const body = document.querySelector("body");
    setVh(720 / body.clientHeight);
  }, []);

  useEffect(() => {
    if (vh === 0) {
      return;
    }
    const events = [...document.querySelectorAll(".event")];
    const windowWidth = document.querySelector("body").clientWidth;
    const rangeOffsetLeft = (105 * 1440) / windowWidth;
    console.log(events);
    // 弧形的偏移量
    offsetLeftArr = events.map((item) => {
      return item.offsetLeft + rangeOffsetLeft - 35;
    });
    // 强制刷新一次
    setSelect(1);
  }, [vh]);

  return (
    <div className={styles.frame}>
      <div className={styles.event_container}>
        {data.map((item, index) => {
          return (
            <Event
              {...item}
              vh={vh}
              select={select}
              index={index}
              setSelect={setSelect}
              key={index}
            />
          );
        })}
      </div>
      <div className={styles.line} style={{ top: 571 * vh }}></div>
      <div
        className={styles.line2}
        style={{
          top: 570.5 * vh,
          height: 24 * vh,
          transform: `translateX(${offsetLeftArr[select] || 0}px)`,
        }}
      ></div>
    </div>
  );
}
