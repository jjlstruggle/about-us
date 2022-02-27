import styles from "../styles/join.module.css";
import Image from "next/image";
import cyb from "../assets/img/frame4/qrcode1.png";
import xbs from "../assets/img/frame4/qrcode2.png";
import Tab from "../components/tab";
import { useState } from "react";
import web from "../assets/img/frame6/web.png";
import chanpin from "../assets/img/frame6/chanpin.png";
import yunwei from "../assets/img/frame6/yunwei.png";
import shijue from "../assets/img/frame6/shijue.png";
import yidong from "../assets/img/frame6/yidongg.png";
import qita from "../assets/img/frame6/square.png";

const zhinan = [
  { a: "2021年秋季招新已经开启，快去重邮帮小程序青春邮约板块吧！", p: cyb },
  { a: "2021年红岩网校工作站招新H5", p: xbs },
  { a: "2021年红岩网校工作站招新H5", p: xbs },
];

const dataSource = [
  "产品策划及运营部",
  "视觉设计部",
  "移动开发部",
  "WEB研发部",
  "运维安全部",
  "其他",
];

const $data = [
  {
    Q: "Q：暑假可以自己提前学一些什么呢？",
    A: `暑假可以自学HTML和CSS，简单学习一下你就可以开发网页了，学有余力的话还可以自己学习一些JavaScript的内容。网络上有许多的学习资料，但质量参差不齐，在这里我们推荐以下内容供大家使用。
  HTML/CSS：初识HTML+CSS
  JavaScript:现代JavaScript教程
  使用的软件：浏览器推荐Chrome，前端编辑器推荐VSCode
  （VSCode是我们前端常用的代码编辑器，切忌不要下载成VS，VS和VSCode是完全不同的俩东西。戳这直达官网）`,
    P: chanpin,
  },
  {
    Q: "Q：暑假可以自己提前学一些什么呢？",
    A: `暑假可以自学HTML和CSS，简单学习一下你就可以开发网页了，学有余力的话还可以自己学习一些JavaScript的内容。网络上有许多的学习资料，但质量参差不齐，在这里我们推荐以下内容供大家使用。
  HTML/CSS：初识HTML+CSS
  JavaScript:现代JavaScript教程
  使用的软件：浏览器推荐Chrome，前端编辑器推荐VSCode
  （VSCode是我们前端常用的代码编辑器，切忌不要下载成VS，VS和VSCode是完全不同的俩东西。戳这直达官网）`,
    P: shijue,
  },
  {
    Q: "Q：暑假可以自己提前学一些什么呢？",
    A: `暑假可以自学HTML和CSS，简单学习一下你就可以开发网页了，学有余力的话还可以自己学习一些JavaScript的内容。网络上有许多的学习资料，但质量参差不齐，在这里我们推荐以下内容供大家使用。
  HTML/CSS：初识HTML+CSS
  JavaScript:现代JavaScript教程
  使用的软件：浏览器推荐Chrome，前端编辑器推荐VSCode
  （VSCode是我们前端常用的代码编辑器，切忌不要下载成VS，VS和VSCode是完全不同的俩东西。戳这直达官网）`,
    P: yidong,
  },
  {
    Q: "Q：暑假可以自己提前学一些什么呢？",
    A: `暑假可以自学HTML和CSS，简单学习一下你就可以开发网页了，学有余力的话还可以自己学习一些JavaScript的内容。网络上有许多的学习资料，但质量参差不齐，在这里我们推荐以下内容供大家使用。
  HTML/CSS：初识HTML+CSS
  JavaScript:现代JavaScript教程
  使用的软件：浏览器推荐Chrome，前端编辑器推荐VSCode
  （VSCode是我们前端常用的代码编辑器，切忌不要下载成VS，VS和VSCode是完全不同的俩东西。戳这直达官网）`,
    P: web,
  },
  {
    Q: "Q：暑假可以自己提前学一些什么呢？",
    A: `暑假可以自学HTML和CSS，简单学习一下你就可以开发网页了，学有余力的话还可以自己学习一些JavaScript的内容。网络上有许多的学习资料，但质量参差不齐，在这里我们推荐以下内容供大家使用。
  HTML/CSS：初识HTML+CSS
  JavaScript:现代JavaScript教程
  使用的软件：浏览器推荐Chrome，前端编辑器推荐VSCode
  （VSCode是我们前端常用的代码编辑器，切忌不要下载成VS，VS和VSCode是完全不同的俩东西。戳这直达官网）`,
    P: yunwei,
  },
  {
    Q: "Q：暑假可以自己提前学一些什么呢？",
    A: `暑假可以自学HTML和CSS，简单学习一下你就可以开发网页了，学有余力的话还可以自己学习一些JavaScript的内容。网络上有许多的学习资料，但质量参差不齐，在这里我们推荐以下内容供大家使用。
  HTML/CSS：初识HTML+CSS
  JavaScript:现代JavaScript教程
  使用的软件：浏览器推荐Chrome，前端编辑器推荐VSCode
  （VSCode是我们前端常用的代码编辑器，切忌不要下载成VS，VS和VSCode是完全不同的俩东西。戳这直达官网）`,
    P: qita,
  },
];

export default function Join({ vh }) {
  const [data, setData] = useState($data[0]);
  return (
    <div className={styles.box} style={{ paddingBlock: 117 * vh }}>
      <div
        className={styles.h1 + " font2"}
        style={{ marginTop: 48 * vh, marginBottom: 48 * vh }}
      >
        <span />
        <div>萌新指南</div>
      </div>
      <div style={{ marginTop: 48 * vh }} className="flex-center-center">
        {zhinan.map((item, index) => (
          <div
            key={index}
            className={styles.item + " flex-center-center"}
            style={{ height: 194 * vh }}
          >
            <div className={styles.a}>{item.a}</div>
            <div className={styles.p}>
              <Image src={item.p} />
            </div>
          </div>
        ))}
      </div>
      <div
        className={styles.h1 + " font2"}
        style={{ marginTop: 80 * vh, marginBottom: 48 * vh }}
      >
        <span />
        <div>Q&A</div>
      </div>
      <div>
        <Tab
          dataSource={dataSource}
          select={0}
          onChange={(s) => setData($data[s])}
        />
        <div className={styles.tab_container} style={{ paddingTop: 64 * vh }}>
          <div className="font6" style={{ marginBottom: 32 * vh }}>
            {data.Q}
          </div>
          <div className="font4" style={{ paddingBottom: 208 * vh }}>
            {data.A}
          </div>
          <div className={styles.pic} style={{ bottom: 36 * vh }}>
            <Image src={data.P} />
          </div>
          <button
            className={styles.btn + " font5"}
            style={{ height: 48 * vh, bottom: 56 * vh }}
          >
            我要提问
          </button>
        </div>
      </div>
    </div>
  );
}
