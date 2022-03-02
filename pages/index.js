import styles from "../styles/index.module.css";
import Slider from "react-slick";
import Image from "next/image";
import p from "../assets/img/about/preview (1).jpg";
import p1 from "../assets/img/about/preview (2).jpg";
import p2 from "../assets/img/about/preview.jpg";

import a1 from "../assets/img/about/unsplash_WmnsGyaFnCQ (1).png";
import a2 from "../assets/img/about/unsplash_WmnsGyaFnCQ (2).png";
import a3 from "../assets/img/about/unsplash_WmnsGyaFnCQ (3).png";
import a4 from "../assets/img/about/unsplash_WmnsGyaFnCQ (4).png";
import a5 from "../assets/img/about/unsplash_WmnsGyaFnCQ (5).png";
import a6 from "../assets/img/about/unsplash_WmnsGyaFnCQ (6).png";
import a7 from "../assets/img/about/unsplash_WmnsGyaFnCQ.png";

import bolikuai from "../assets/img/frame6/square.png";
import arrow from "../assets/img/about/arrow.png";
import r from "../assets/img/about/r.png";
import xbs from "../assets/img/frame4/qrcode2.png";
import arrow2 from "../assets/img/frame4/arrow.png";

import yinhao from "../assets/img/about/Vector.png";

const imgs = [p, p1, p2];
const picUrls = [
  {
    picUrl: a1,
    title: "一天天yiyiyiyiy雨鱼鱼鱻",
    article: "体育uuu发一份会更好 uuu更丰富的动态添加u很符合很讨厌",
  },
  {
    picUrl: a2,
    title: "一天天yiyiyiyiy雨鱼鱼鱻",
    article: "体育uuu发一份会更好 uuu更丰富的动态添加u很符合很讨厌",
  },
  {
    picUrl: a3,
    title: "一天天yiyiyiyiy雨鱼鱼鱻",
    article: "体育uuu发一份会更好 uuu更丰富的动态添加u很符合很讨厌",
  },
  {
    picUrl: a4,
    title: "一天天yiyiyiyiy雨鱼鱼鱻",
    article: "体育uuu发一份会更好 uuu更丰富的动态添加u很符合很讨厌",
  },
  {
    picUrl: a5,
    title: "一天天yiyiyiyiy雨鱼鱼鱻",
    article: "体育uuu发一份会更好 uuu更丰富的动态添加u很符合很讨厌",
  },
  {
    picUrl: a6,
    title: "一天天yiyiyiyiy雨鱼鱼鱻",
    article: "体育uuu发一份会更好 uuu更丰富的动态添加u很符合很讨厌",
  },
  {
    picUrl: a7,
    title: "一天天yiyiyiyiy雨鱼鱼鱻",
    article: "体育uuu发一份会更好 uuu更丰富的动态添加u很符合很讨厌",
  },
];

const product = [
  {
    picUrl: xbs,
    title: "红岩研究所",
    article: "这是红岩网校2021年秋季招新H5",
  },
  {
    picUrl: xbs,
    title: "红岩研究所",
    article: "这是红岩网校2021年秋季招新H5",
  },
  {
    picUrl: xbs,
    title: "红岩研究所",
    article: "这是红岩网校2021年秋季招新H5",
  },
];

const style = (index, marginBottom) =>
  (index + 1) % 4 === 0
    ? {
        marginRight: 0,
        marginBottom,
      }
    : {
        marginBottom,
      };

const Event = ({ picUrl, title, article, marginBottom, index, vh }) => (
  <div className={styles.event} style={style(index, marginBottom * vh)}>
    <div className={styles.pic}>
      <Image src={picUrl} layout="responsive" />
    </div>
    <div
      className="font5"
      style={{ marginTop: 24 * vh, color: "#141414", marginBottom: 4 * vh }}
    >
      {title}
    </div>
    <div className="font1" style={{ color: "#6a6a6a" }}>
      {article}
    </div>
  </div>
);

const Product = ({ picUrl, title, article, vh }) => (
  <div className={styles.product} style={{ height: 134 * vh }}>
    <div className={styles.pic2} style={{ top: 24 * vh }}>
      <Image src={picUrl} />
    </div>
    <div
      className="font5"
      style={{ marginTop: 31 * vh, color: "#141414", marginBottom: 4 * vh }}
    >
      {title}
    </div>
    <div className="font1" style={{ color: "#2e2e2e" }}>
      {article}
    </div>
  </div>
);

export default function About({ vh }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => (
      <ul style={{ position: "absolute", bottom: 42 * vh }}>{dots}</ul>
    ),
    arrows: false,
    customPaging: (i) => <span />,
    dotsClass: styles.nav_box,
  };

  return (
    <>
      <div className={styles.box} style={{ height: 647 * vh }}>
        <Slider {...settings}>
          {imgs.map((item, index) => (
            <div key={index}>
              <div className={styles.item} style={{ height: 648 * vh }}>
                <Image src={item} layout="fill" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.wraper}>
        <div className={styles.box2} style={{ paddingTop: 80 * vh }}>
          <div className={styles.h1 + " font2"}>
            <span />
            <div>近期活动</div>
          </div>
          <div className={styles.event_box} style={{ marginTop: 48 * vh }}>
            {picUrls.map((item, index) => (
              <Event
                {...item}
                key={index}
                marginBottom={28}
                index={index}
                vh={vh}
              />
            ))}
            <div
              className={styles.moreEvent}
              style={{ height: 119 * vh, marginBottom: 28 * vh }}
            >
              <div className="font4" style={{ marginTop: 39 * vh }}>
                查看更多
              </div>
              <div style={{ top: 75 * vh }}>
                <Image src={arrow} />
              </div>
              <div style={{ top: -49 * vh }}>
                <Image src={bolikuai} />
              </div>
            </div>
          </div>
          <div className={styles.h1 + " font2"} style={{ marginTop: 90 * vh }}>
            <span />
            <div>活动产品</div>
          </div>
          <div className={styles.event_box} style={{ marginTop: 48 * vh }}>
            {product.map((item, index) => (
              <Product {...item} key={index} vh={vh} />
            ))}
          </div>
          <div
            className={styles.box3}
            style={{ height: 165 * vh, top: 1007 * vh }}
          >
            <div></div>
            <div>
              <div className="font4" style={{ marginBottom: 12 * vh }}>
                查看更多
              </div>
              <div>
                <Image src={arrow2} />
              </div>
            </div>
          </div>
          <div className={styles.h1 + " font2"} style={{ marginTop: 166 * vh }}>
            <span />
            <div>课程分享</div>
          </div>
          <div className={styles.event_box} style={{ marginTop: 48 * vh }}>
            <div className={styles.box4} style={{ height: 212 * vh }}>
              <div className={styles.yinhao} style={{ top: 32 * vh }}>
                <Image src={yinhao} />
              </div>
              <div className={styles.art + " font4"}>
                红岩网校工作站发展21年以来，已经逐步建立起了成熟的人才培养体系和课程制度。
                本着相互学习，互相成长的初心，目前我们的课程将在官方B站号进行上传，感兴趣的同学可以进行查看和学习。
              </div>
              <button
                className={styles.btn + " font5"}
                style={{ height: 48 * vh }}
              >
                立即查看
              </button>
            </div>
            <div className={styles.r}>
              <Image src={r} />
            </div>
          </div>
          <div style={{ height: 80 * vh }}></div>
        </div>
      </div>
    </>
  );
}
