import styles from "./index.module.css";
import Image from "next/image";
import square from "../../assets/img/frame10/square.png";
import { useEffect, useState } from "react";
import data from "../../data/data.json";

let yearArr = data.map((item) => item.year);
console.log(data);

export default function Frame10({ vh }) {
  const [select, setSelect] = useState(2016);
  const [member, setMember] = useState([]);

  useEffect(() => {
    let body = document.querySelector("body");
    let canvas = document.querySelector("canvas");
    window.onresize = () => {
      canvas.width = body.clientWidth;
      canvas.height = body.clientHeight;
    };
    canvas.width = body.clientWidth;
    canvas.height = body.clientHeight;
    let ctx = canvas.getContext("2d");
    // 扩展random
    let random = (max) => Math.floor(Math.random * max);

    // 测量函数
    let measureText = (text) => {
      const metrics = ctx.measureText(text);
      let width = metrics.width;
      let height =
        metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
      return { width, height };
    };
    // 绘画函数
    let createText = (text, color, size, x, y) => {
      ctx.fillStyle = color;
      ctx.font = size + "px pingfang-regular";
      ctx.fillText(text, x, y);
    };
    // 边界储存左上,右下
    let boundary = [];
    // 随机的x和y
    let getCoordinate = () => {
      let x = random(body.clientWidth);
      let y = random(body.clientHeight);
      return { x, y };
    };
  }, []);

  useEffect(() => {
    let member = data.filter((item) => item.year == select);
    setMember(member);
  }, [select]);

  return (
    <div className={styles.frame}>
      <div className={styles.square} style={{ top: 136 * vh }}>
        <Image src={square} />
      </div>
      <div className={styles.year_selector}></div>
      <canvas id="canvas"></canvas>
    </div>
  );
}
