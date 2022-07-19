import { useState } from "react";
import MainInfo from "./MainInfo";
import LeftLeaf from "../assets/left.png";
import RightLeaf from "../assets/right.png";
import RoundImg from "../assets/Round.png";

function InfosBloc() {
  const [infos, setInfos] = useState([
    "Our prices are pocket friendly and lower compared to competators",
    "with us, get your personal accout to memorize your preferences",
    "a hair removal tratment and a premium customer service",
    "We Use high technology that is gentle on all skin colors",
  ]);
  return (
    <div id="infos" className="w-full">
      <div>
        <img width={500} src={LeftLeaf} />
        <MainInfo title={infos[0]} />
      </div>
      <div>
        <MainInfo title={infos[1]} />
        <img width={500} src={RoundImg} />
      </div>
      <div>
        <img width={500} src={RoundImg} />
        <MainInfo title={infos[2]} />
      </div>
      <div>
        <MainInfo title={infos[3]} />
        <img width={500} src={RightLeaf} />
      </div>
    </div>
  );
}

export default InfosBloc;
