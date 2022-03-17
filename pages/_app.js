import { useEffect, useRef, useState } from "react";
import Head from "../components/head";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import styles from "../styles/search.module.css";
import Image from "next/image";
import search from "../assets/img/search.png";
import close from "../assets/img/close.png";
import anime from "animejs";
import debonce from "../util/debonce";
function MyApp({ Component, pageProps }) {
  const [vh, setVh] = useState(0);
  const router = useRouter();
  const { route } = router;
  const app = useRef(null);
  const model = useRef(null);
  const $setVh = debonce((v) => {
    setVh(v);
  }, 1000);
  useEffect(() => {
    let body = document.querySelector("body");
    setVh(body.clientHeight / 720);
    window.onresize = () => {
      $setVh(body.clientHeight / 720);
    };
  }, []);
  useEffect(() => {
    if (route !== "/about-us") {
      app.current.style.overflow = "hidden auto";
    } else {
      app.current.style.overflow = "hidden";
    }
  }, [route]);

  const showModel = () => {
    if (!model) return;
    model.current.style.background = "#00000073";
    model.current.style.transform = "translateY(0)";
  };

  const toClose = () => {
    if (!model) return;
    anime({
      targets: model.current,
      rotateY: "150deg",
      duration: 500,
      complete: function () {
        model.current.style.background = "transparent";
        anime({
          targets: model.current,
          translateY: "-100%",
          duration: 300,
          complete: function () {
            model.current.style.transform = "translateY(-100%)";
          },
        });
      },
    });
  };

  return (
    <>
      <div id="app" ref={app}>
        <Head vh={vh} showModel={showModel} />
        <Component {...pageProps} vh={vh} />
        <Footer vh={vh} />
      </div>
      <div
        className={styles.mask}
        style={{ height: 720 * vh, paddingTop: 72 * vh }}
        ref={model}
      >
        <div className={styles.search_box} style={{ paddingTop: 70 * vh }}>
          <div
            className={styles.search_head}
            style={{ height: 388 * vh, paddingTop: 120 * vh }}
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
            <div className={styles.close} onClick={toClose}>
              <Image src={close} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
