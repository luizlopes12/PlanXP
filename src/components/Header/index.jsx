import React, { useState } from "react";
import Styles from "./styled";
import logo from "../../img/logo.png";
import arrowRight from "../../img/arrow.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggled, setToggled] = useState(true);
  const navOpen = () => {
    setToggled(!toggled);
  };
  return (
    <Styles toggled={toggled}>
      <aside>
        <img className="logo" src={logo} alt="Logo Plan XP" />
        <div className="navbutton" onClick={navOpen}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <nav>
          <ul>
            <li>
              <Link className='link' to="/" onClick={navOpen}>
                /Quem somos
              </Link>
              <span>01.</span>
            </li>
            <li>
              <Link className='link' to="/" onClick={navOpen}>
                /o que fazemos
              </Link>
              <span>02.</span>
            </li>
            <li>
              <Link className='link' to="/news" onClick={navOpen}>
                /plan news
              </Link>
              <span>03.</span>
            </li>
            <li>
              <Link className='link' to="/" onClick={navOpen}>
                /nossos clientes
              </Link>
              <span>04.</span>
            </li>
            <li>
              <Link className='link' to="/contact" onClick={navOpen}>
                /contato
              </Link>
              <span>05.</span>
            </li>
          </ul>

          <div className="bottomLink">
            <p>
              <Link className='link' to="/">Que tal inovar com a gente?</Link>
            </p>
            <span> ;) </span>
            <img src={arrowRight} alt="Seta" />
          </div>
        </nav>
      </aside>
    </Styles>
  );
};

export default Header;
