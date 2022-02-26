import styles from "../styles/about-us.module.css";
import Image from "next/image";
import dizou from "../assets/img/dizuo.png";
import quanquan from "../assets/img/quanquan.png";
import juanjuan from "../assets/img/juanjuan.png";
import ball from "../assets/img/ball.png";
import bolikuai from "../assets/img/bolikuai.png";
import zuoxia from "../assets/img/zouxia.png";
import zhongjian from "../assets/img/zhongjian.png";
import youshang from "../assets/img/youshang.png";
import yes from "../assets/img/yes.png";
import banzi from "../assets/img/banzi.png";
import yun from "../assets/img/youshangyun.png";
import youxia from "../assets/img/youxia.png";
import ball2 from "../assets/img/ball2.png";
import { useState } from "react";
import font from "../assets/img/frame2/We are Redrocker.png";
import star1 from "../assets/img/frame2/Star 1.png";
import star2 from "../assets/img/frame2/Star 2.png";
import vector from "../assets/img/frame2/Vector 1.png";
import vector2 from "../assets/img/frame3/Vector 43.png";
import arrow from "../assets/img/frame4/arrow.png";
import bolikuai2 from "../assets/img/frame4/bolikuai2.png";
import p1 from "../assets/img/frame4/1.png";
import qrcode1 from "../assets/img/frame4/qrcode1.png";
import qrcode2 from "../assets/img/frame4/qrcode2.png";
import p2 from "../assets/img/frame4/2.png";
import p3 from "../assets/img/frame4/3.png";
import p4 from "../assets/img/frame4/4.png";
import xingyun from "../assets/img/frame4/xingyun.png";
import xingyun2 from "../assets/img/frame4/xingyun2.png";
import vector3 from "../assets/img/frame5/Vector 43 (1).png";
import square from "../assets/img/frame6/square.png";
import chanpin from "../assets/img/frame6/chanpin.png";
import shijue from "../assets/img/frame6/shijue.png";
import yidong from "../assets/img/frame6/yidongg.png";
import yunwei from "../assets/img/frame6/yunwei.png";
import web from "../assets/img/frame6/web.png";
import vector4 from "../assets/img/frame7/Vector 43.png";
import Frame8 from "../components/frame8";
import Frame9 from "../components/frame9";
import Frame10 from "../components/frame10";
import Frame11 from "../components/frame11";
/*
 *
 * about-us首页
 */

export default function Home({ vh }) {
  const [choose, setChoose] = useState(0);
  const [mode, setMode] = useState("default");
  const createNav = () => {
    const navs = [];
    for (let i = 0; i < 5; i++) {
      navs.push(
        <div
          key={i}
          className={choose === i ? styles.active : ""}
          onClick={() => {
            setChoose(i);
          }}
        ></div>
      );
    }
    return navs;
  };

  return (
    <div className={styles.home}>
      <div className={styles.frame1}>
        <div
          className={styles.diZuo}
          style={{
            top: 72 * vh,
          }}
        >
          <Image src={dizou}></Image>
        </div>
        <div
          className={styles.quanquan}
          style={{
            top: 148.89 * vh,
          }}
        >
          <Image src={quanquan}></Image>
        </div>
        <div
          className={styles.juanjuan}
          style={{
            top: 95 * vh,
          }}
        >
          <Image src={juanjuan}></Image>
        </div>
        <div
          className={styles.ball}
          style={{
            top: 60 * vh,
          }}
        >
          <Image src={ball}></Image>
        </div>
        <div
          className={styles.bolikuai}
          style={{
            top: 139 * vh,
          }}
        >
          <Image src={bolikuai}></Image>
        </div>
        <div className={styles.zuoxia}>
          <Image src={zuoxia}></Image>
        </div>
        <div
          className={styles.zhongjian}
          style={{
            top: 246 * vh,
          }}
        >
          <Image src={zhongjian}></Image>
        </div>
        <div className={styles.yun}>
          <Image src={yun}></Image>
        </div>
        <div className={styles.youshang}>
          <Image src={youshang}></Image>
        </div>
        <div
          className={styles.banzi}
          style={{
            top: 296.62 * vh,
          }}
        >
          <Image src={banzi}></Image>
        </div>
        <div
          className={styles.yes}
          style={{
            top: 417 * vh,
          }}
        >
          <Image src={yes}></Image>
        </div>
        <div className={styles.youxia}>
          <Image src={youxia}></Image>
        </div>
        <div className={styles.ball2}>
          <Image src={ball2}></Image>
        </div>
      </div>
      <div className={styles.frame2}>
        <div
          className={styles.bannar}
          style={{
            height: 258 * vh,
            top: 136 * vh,
          }}
        >
          <div
            className={styles.font1}
            style={{
              top: 35 * vh,
            }}
          >
            <Image src={font}></Image>
          </div>
          <div className={styles.star1}>
            <Image src={star1}></Image>
          </div>
          <div
            className={styles.star2}
            style={{
              top: 54 * vh,
            }}
          >
            <Image src={star2}></Image>
          </div>
          <div
            className={styles.vector}
            style={{
              top: 54 * vh,
            }}
          >
            <Image src={vector}></Image>
          </div>
          <div
            className={styles.font2}
            style={{
              top: 192 * vh,
              height: 24 * vh,
            }}
          >
            <span>坚持独立与创新的互联网人</span>
          </div>
        </div>
        <div
          className={styles.title1 + " font2"}
          style={{
            top: 466 * vh,
            height: 34 * vh,
          }}
        >
          “互联网大咖的摇篮”，“技术宅俱乐部”,"最强大脑聚集地“
        </div>
        <div
          className={styles.article1 + " font1"}
          style={{
            top: 516 * vh,
            height: 80 * vh,
          }}
        >
          红岩网校工作站成立于2000年，是由一群坚持独立与创新的redeocker组成的学生组织，是学校学生党建与网络思想政治教育的重要阵地，也是学校唯一一个从事互联网产品开发运营的校级组织。在校团委的指导下，由学生自我管理，多年来走出了一大批优秀的IT互联网人才，深受腾讯、阿里巴巴、字节跳动、华为等知名互联网企业的青睐。
          团队先后获评“全国五四红旗团支部”、“团中央新媒体专业工作室”、“重庆市IT杰出青年群体”等系列荣誉。开发上线了“重邮小帮手”微信公众号，“重邮帮”微信小程序、“掌上重邮”APP等一系列优秀的校园网络产品，深受广大师生好评。
        </div>
      </div>
      <div className={styles.frame3} style={{ height: 500 * vh }}>
        <div className={styles.box}>
          <span
            className={styles.font3 + " font2"}
            style={{
              top: 167 * vh,
              height: 34 * vh,
            }}
          >
            来看看
          </span>
          <span
            className={styles.font4 + " font3"}
            style={{
              top: 232 * vh,
              height: 50 * vh,
            }}
          >
            我们的产品吧!
          </span>
          <div className={styles.vector2}>
            <Image src={vector2}></Image>
          </div>
        </div>
      </div>
      <div className={styles.frame4}>
        <div
          className={styles.p1}
          style={{
            transform: `translate(${-100 * choose}%)`,
          }}
        >
          <div
            className={styles.p1box}
            style={{
              height: 280 * vh,
              top: 200 * vh,
            }}
          >
            <div
              className={styles.font5 + " font3"}
              style={{
                height: 50 * vh,
              }}
            >
              掌上重邮
            </div>
            <div
              className={styles.font6 + " font4"}
              style={{
                height: 24 * vh,
                top: 54 * vh,
              }}
            >
              “掌上重邮APP，你的重邮信息资源整合站!”
            </div>
            <div
              className={styles.font7 + " font4"}
              style={{
                height: 96 * vh,
                top: 120 * vh,
              }}
            >
              校园行程表和课表帮你轻松规划在校每一天；重邮地图带你游历美丽校园；
              一体化查询系统搞定你的志愿时长、考试成绩，校内信息查询；
              更有邮问，和邮子一同谈天说地，畅聊校园。精彩校园生活，尽在掌上重邮。
            </div>
            <div
              className={styles.font8 + " font1"}
              style={{
                height: 20 * vh,
                top: 240 * vh,
              }}
            >
              了解更多：www. .com
            </div>
            <div
              className={styles.arrow}
              style={{
                top: 268 * vh,
              }}
            >
              <Image src={arrow}></Image>
            </div>
          </div>
          <div
            className={styles.bolikuai2}
            style={{
              top: 526 * vh,
            }}
          >
            <Image src={bolikuai2}></Image>
          </div>
          <div
            className={styles.back}
            style={{
              height: 558 * vh,
            }}
          ></div>
          <div
            className={styles.zu1}
            style={{
              top: 113 * vh,
            }}
          >
            <Image src={p1}></Image>
          </div>
          <div
            className={styles.xingyun}
            style={{
              top: 150 * vh,
            }}
          >
            <Image src={xingyun}></Image>
          </div>
          <div
            className={styles.xingyun2}
            style={{
              top: 526 * vh,
            }}
          >
            <Image src={xingyun2}></Image>
          </div>
        </div>
        <div
          className={styles.p1}
          style={{
            transform: `translate(${-100 * choose}%)`,
          }}
        >
          <div
            className={styles.xingyun2}
            style={{
              top: 526 * vh,
            }}
          >
            <Image src={xingyun2}></Image>
          </div>
          <div
            className={styles.p2box}
            style={{
              height: 304 * vh,
              top: 200 * vh,
            }}
          >
            <div
              className={styles.font5 + " font3"}
              style={{
                height: 50 * vh,
              }}
            >
              重邮帮
            </div>
            <div
              className={styles.font6 + " font4"}
              style={{
                height: 24 * vh,
                top: 54 * vh,
              }}
            >
              “ 重邮帮，你的专属校园活动管家! ”
            </div>
            <div
              className={styles.font7 + " font4"}
              style={{
                height: 96 * vh,
                top: 120 * vh,
              }}
            >
              在此了解最详细的校园活动信息，快速参与各种校园活动。一站式志愿报名服务，更快发现更多志愿服务；便携影票系统，体验线上抢票的惊心动魄。重邮帮，帮你发现大学生活的更多可能。
            </div>
            <div className={styles.qrcode1}>
              <Image src={qrcode1}></Image>
            </div>
          </div>
          <div
            className={styles.bolikuai3}
            style={{
              top: 557 * vh,
            }}
          >
            <Image src={bolikuai2}></Image>
          </div>
          <div
            className={styles.bolikuai4}
            style={{
              top: 136 * vh,
            }}
          >
            <Image src={bolikuai2}></Image>
          </div>
          <div
            className={styles.back2}
            style={{
              height: 712 * vh,
              top: -104 * vh,
            }}
          ></div>
          <div
            className={styles.zu2}
            style={{
              top: 186 * vh,
            }}
          >
            <Image src={p2}></Image>
          </div>
        </div>
        <div
          className={styles.p1}
          style={{
            transform: `translate(${-100 * choose}%)`,
          }}
        >
          <div
            className={styles.xingyun2}
            style={{
              top: 526 * vh,
            }}
          >
            <Image src={xingyun2}></Image>
          </div>
          <div
            className={styles.p3box}
            style={{
              height: 384 * vh,
              top: 200 * vh,
            }}
          >
            <div
              className={styles.font9 + " font3"}
              style={{
                height: 50 * vh,
              }}
            >
              重邮小帮手
            </div>
            <div
              className={styles.font6 + " font4"}
              style={{
                height: 24 * vh,
                top: 54 * vh,
              }}
            >
              “ 重邮粉丝量最大的全功能微社区平台! ”
            </div>
            <div
              className={styles.font7 + " font4"}
              style={{
                height: 96 * vh,
                top: 120 * vh,
              }}
            >
              重邮小帮手是红岩网校工作站在重庆邮电大学团委指导下运营的公众号平台。作为重邮校园全功能微社区平台，重邮小帮手为邮子们提供了查询服务、丰富精彩的推文、寓教于乐的H5等。同时也在校团委的领导和支持下，积极推动校园媒体融合发展。
            </div>
            <div
              className={styles.qrcode2}
              style={{
                top: 240 * vh,
              }}
            >
              <Image src={qrcode2}></Image>
            </div>
            <div className={styles.bolikuai5}>
              <Image src={bolikuai2}></Image>
            </div>
          </div>

          <div
            className={styles.back3}
            style={{
              height: 698.78 * vh,
              top: -50.31 * vh,
            }}
          ></div>
          <div
            className={styles.zu3}
            style={{
              top: 158 * vh,
            }}
          >
            <Image src={p3}></Image>
          </div>
        </div>
        <div
          className={styles.p1}
          style={{
            transform: `translate(${-100 * choose}%)`,
          }}
        >
          <div
            className={styles.xingyun2}
            style={{
              top: 526 * vh,
            }}
          >
            <Image src={xingyun2}></Image>
          </div>
          <div
            className={styles.p4box}
            style={{
              height: 264 * vh,
              top: 200 * vh,
            }}
          >
            <div
              className={styles.font10 + " font3"}
              style={{
                height: 54 * vh,
              }}
            >
              开源镜像站
            </div>
            <div
              className={styles.font6 + " font4"}
              style={{
                height: 24 * vh,
                top: 54 * vh,
              }}
            >
              “ 为邮子提供海量开源镜像服务! ”
            </div>
            <div
              className={styles.font7 + " font4"}
              style={{
                height: 72 * vh,
                top: 120 * vh,
              }}
            >
              重邮开源软件镜像站面向全国提供服务，致力于在重邮校内以及西南地区提供高质量的开源软件镜像、Linux
              镜像源服务，帮助邮子们和广大开源爱好者更方便地获取开源软件。
            </div>
            <div
              className={styles.font11 + " font1"}
              style={{
                height: 20 * vh,
                top: 216 * vh,
                textAlign: "end",
              }}
            >
              http://mirrors.cqupt.edu.cn/
            </div>
            <div
              className={styles.arrow2}
              style={{
                top: 252 * vh,
              }}
            >
              <Image src={arrow}></Image>
            </div>
          </div>
          <div
            className={styles.bolikuai6}
            style={{
              top: 506 * vh,
            }}
          >
            <Image src={bolikuai2}></Image>
          </div>
          <div
            className={styles.bolikuai4}
            style={{
              top: 136 * vh,
            }}
          >
            <Image src={bolikuai2}></Image>
          </div>
          <div
            className={styles.back4}
            style={{
              height: 583.89 * vh,
              top: -31.44 * vh,
            }}
          ></div>
          <div
            className={styles.zu4}
            style={{
              top: 125 * vh,
            }}
          >
            <Image src={p4}></Image>
          </div>
          <div
            className={styles.xingyun}
            style={{
              top: 158 * vh,
            }}
          >
            <Image src={xingyun}></Image>
          </div>
        </div>
        <div
          className={styles.p1}
          style={{
            transform: `translate(${-100 * choose}%)`,
          }}
        >
          <div
            className={styles.p5box}
            style={{
              height: 280 * vh,
              top: 200 * vh,
            }}
          >
            <div
              className={styles.font5 + " font3"}
              style={{
                height: 50 * vh,
              }}
            >
              媒体站
            </div>
            <div
              className={styles.font6 + " font4"}
              style={{
                height: 24 * vh,
                top: 54 * vh,
              }}
            >
              “ 属于重邮人的媒体资源整合站! ”
            </div>
            <div
              className={styles.font7 + " font4"}
              style={{
                height: 96 * vh,
                top: 120 * vh,
              }}
            >
              这里为邮子们提供了丰富的高清影视资源、音乐音频、网络课程等多媒体资源的浏览与下载，为你的大学生活增添一抹别样色彩。
            </div>
            <div
              className={styles.font8 + " font1"}
              style={{
                height: 20 * vh,
                top: 192 * vh,
              }}
            >
              了解更多：www. .com
            </div>
            <div
              className={styles.arrow}
              style={{
                top: 234 * vh,
              }}
            >
              <Image src={arrow}></Image>
            </div>
          </div>
          <div
            className={styles.bolikuai2}
            style={{
              top: 526 * vh,
            }}
          >
            <Image src={bolikuai2}></Image>
          </div>

          <div
            className={styles.zu1}
            style={{
              top: 113 * vh,
            }}
          >
            <Image src={p1}></Image>
          </div>
          <div
            className={styles.xingyun}
            style={{
              top: 150 * vh,
            }}
          >
            <Image src={xingyun}></Image>
          </div>
          <div
            className={styles.xingyun2}
            style={{
              top: 526 * vh,
            }}
          >
            <Image src={xingyun2}></Image>
          </div>
        </div>
        <div
          className={styles.producet_nav}
          style={{
            top: 648 * vh,
            height: 12 * vh,
          }}
        >
          {createNav()}
        </div>
      </div>
      <div className={styles.frame5} style={{ height: 500 * vh }}>
        <div
          className={styles.font12 + " font2"}
          style={{
            height: 34 * vh,
            top: 147 * vh,
          }}
        >
          关于
        </div>
        <div
          className={styles.font13 + " font3"}
          style={{
            height: 50 * vh,
            top: 212 * vh,
          }}
        >
          我们的部门！
        </div>
        <div
          className={styles.box2}
          style={{
            top: 75 * vh,
          }}
        >
          <Image src={vector3}></Image>
        </div>
      </div>
      <div className={styles.frame6} style={{ paddingTop: 118 * vh }}>
        <div
          className={styles.square}
          style={{
            height: 205 * vh,
          }}
        >
          <div
            className={styles.pic1}
            style={{ marginTop: 28 * vh, marginBottom: 13 * vh }}
          >
            <Image src={chanpin}></Image>
          </div>
          <div
            className={styles.title2 + " font2"}
            style={{ marginBottom: 4 * vh }}
          >
            产品策划及运营部
          </div>
          <div className={styles.title2 + " font1"}>
            “创意聚集港，产品造梦厂”
          </div>
        </div>
        <div
          className={styles.square}
          style={{
            height: 205 * vh,
          }}
        >
          <div
            className={styles.pic2}
            style={{ marginTop: 20 * vh, marginBottom: 4 * vh }}
          >
            <Image src={shijue}></Image>
          </div>
          <div
            className={styles.title3 + " font2"}
            style={{ marginBottom: 4 * vh }}
          >
            视觉设计部
          </div>
          <div className={styles.title3 + " font1"}>
            “色彩涂抹梦想，画笔创造未来”
          </div>
        </div>
        <div className={styles.fragment1} style={{ height: 205 * vh }}></div>
        <div
          className={styles.square}
          style={{
            height: 205 * vh,
          }}
        >
          <div
            className={styles.pic1}
            style={{ marginTop: 28 * vh, marginBottom: 16 * vh }}
          >
            <Image src={yidong}></Image>
          </div>
          <div
            className={styles.title3 + " font2"}
            style={{ marginBottom: 4 * vh }}
          >
            移动开发部
          </div>
          <div className={styles.title3 + " font1"}>“方寸间世界的创造者“</div>
        </div>
        <div className={styles.fragment2} style={{ height: 205 * vh }}></div>
        <div className={styles.square2}>
          <Image src={square}></Image>
        </div>
        <div
          className={styles.square}
          style={{
            height: 205 * vh,
          }}
        >
          <div
            className={styles.pic2}
            style={{ marginTop: 9 * vh, marginBottom: 8 * vh }}
          >
            <Image src={web}></Image>
          </div>
          <div
            className={styles.title3 + " font2"}
            style={{ marginBottom: 4 * vh }}
          >
            WEB研发部
          </div>
          <div className={styles.title3 + " font1"}>
            “WEB，实现互联网的不可思议”
          </div>
        </div>
        <div
          className={styles.square}
          style={{
            height: 205 * vh,
          }}
        >
          <div
            className={styles.pic1}
            style={{ marginTop: 28 * vh, marginBottom: 13 * vh }}
          >
            <Image src={yunwei}></Image>
          </div>
          <div
            className={styles.title3 + " font2"}
            style={{ marginBottom: 4 * vh }}
          >
            运维安全部
          </div>
          <div className={styles.title3 + " font1"}>
            “运维安全在，网校没意外”
          </div>
        </div>
      </div>
      <div className={styles.frame7} style={{ height: 500 * vh }}>
        <div
          className={styles.box3}
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
          className={styles.box4}
          style={{
            marginTop: 129 * vh,
          }}
        >
          <Image src={square}></Image>
        </div>
      </div>
      <Frame8 vh={vh} />
      <Frame9 vh={vh} />
      <Frame10 vh={vh} />
      <Frame11 vh={vh} />
    </div>
  );
}
