import React from "react";
import badgeIcon from "../../../img/badgeIcon.png";
import arrowRight from "../../../img/arrow.png";

import Styles from "./styled";
const CasesCard = ({ gameName, img, title, text }) => {
  return (
    <Styles>
      <div className="img">
        <img src={img} alt="Imagem game" />
        <span className="badge">
          <img src={badgeIcon} alt="" />
        </span>
      </div>
      <div className="desc">
        <div className="gamename">{gameName}</div>
        <p className="title">{title}</p>
        <p className="text">{text}</p>
        <span className="link">
          saiba mais
          <img src={arrowRight} alt="Flecha" />
        </span>
      </div>
    </Styles>
  );
};

export default CasesCard;
