import { useEffect, useRef, useState } from "react";
import Head from "../components/head";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/footer";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const [vh, setVh] = useState(0);
  const router = useRouter();
  const { route } = router;
  const app = useRef(null);
  useEffect(() => {
    const body = document.querySelector("body");
    setVh(body.clientHeight / 720);
  }, []);

  useEffect(() => {
    if (route !== "/about-us") {
      app.current.style.overflow = "hidden auto";
    } else {
      app.current.style.overflow = "hidden";
    }
  }, [route]);

  return (
    <div id="app" ref={app}>
      <Head vh={vh} />
      <Component {...pageProps} vh={vh} />
      <Footer vh={vh} />
    </div>
  );
}

export default MyApp;
