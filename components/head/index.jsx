import "./index.module.css";

import { useEffect, useState } from "react";

const [vh, setVh] = useState(0);
const [choose, setChoose] = useState(0);

useEffect(() => {
  const body = document.querySelector("body");
  setVh(720 / body.clientHeight);
}, []);

export default function Head() {
  return <div>index</div>;
}
