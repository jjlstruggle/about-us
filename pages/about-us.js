import Frame8 from "../components/frame8";
import Frame9 from "../components/frame9";
import Frame10 from "../components/frame10";
import Frame11 from "../components/frame11";
import Frame7 from "../components/frame7";
import Frame6 from "../components/frame6";
import Frame5 from "../components/frame5";
import Frame4 from "../components/frame4";
import Frame3 from "../components/frame3";
import Frame2 from "../components/frame2";
import Frame1 from "../components/frame1";
const frames = [
  Frame1,
  Frame2,
  Frame3,
  Frame4,
  Frame5,
  Frame6,
  Frame7,
  Frame8,
  Frame9,
  Frame10,
  Frame11,
];

/*
 *
 * about-us首页
 */

export default function Home({ vh }) {
  return (
    <div>
      {frames.map((Item, index) => (
        <Item vh={vh} key={index} />
      ))}
    </div>
  );
}
