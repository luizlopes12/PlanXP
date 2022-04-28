import React from "react";
import badgeIcon from "../../../img/badgeIcon.png";
import arrowRight from "../../../img/arrow.png";
import { Link } from "react-router-dom";
import Styles from "./styled";
const CasesCard = ({ gameName, img, title, text }) => {
  return (
    <Styles>
      <div className="img">
        <img src={img} alt="Imagem game" />
        <span className="badge">
          <img src={badgeIcon} alt="badge" />
        </span>
      </div>
      <div className="desc">
        <div className="gamename">{gameName}</div>
        <p className="title">{title}</p>
        <p className="text">{text}</p>
        <Link className="link" to="/">
          saiba mais
          <img src={arrowRight} alt="Flecha" />
        </Link>
      </div>
    </Styles>
  );
};

export default CasesCard;
