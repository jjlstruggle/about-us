import { useEffect, useState } from "react";
import Head from "../components/head";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const body = document.querySelector("body");
    setVh(body.clientHeight / 720);
  }, []);

  return (
    <div id="app">
      <Head vh={vh} />
      <Component {...pageProps} vh={vh} />
      <Footer vh={vh} />
    </div>
  );
}

export default MyApp;
