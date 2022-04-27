import React, { useState } from "react";
import Styles from "./styled";
import arrowRight from "../../img/whiteArrow.png";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import youtube from "../../img/youtube.png";
import locate from "../../img/locate.png";
import marketing from '../../img/logo-marketing.png'
import logo from '../../img/logo.png'
import fullup from '../../img/fullup.png'
import Form from "../shared/Form";

const ContactContent = () => {
  return (
    <Styles>
      <section>
        <div className="title">
          <h1>/Contato</h1>
          <span>05.</span>
        </div>
        <div className="texts">
          <p>
            Gostou de saber mais sobre as inovações tecnológicas e também quer
            oferecer novas experiências aos seus clientes? Então entre em
            contato e marque um encontro real conosco para conversamos sobre as
            infinitas possibilidades do mundo virtual.
          </p>
        </div>
      <Form/>
      </section>
      <section>
        <div className="cards">
          <div className="card">
            <p>Siga-nos</p>
            <span>
              Fique sempre por dentro de todas as novidades da Plan XP e de
              todas empresas do Grupo Plan Marketing.
            </span>
            <div className="socials">
              <img src={facebook} alt="Facebook Plan XP" />
              <img src={instagram} alt="Instagram Plan XP" />
              <img src={youtube} alt="Youtube Plan XP" />
            </div>
          </div>
          <div className="card">
            <p>
              <img src={locate} />
              /RS
            </p>
            <span>
              Rua Onze de Junho, 243 Novo Hamburgo / RS Brasil
              <br />
              +55 51 98229.0400
            </span>
            <div className="maps">
              <p>
                ver no google maps
                <img src={arrowRight} />
              </p>
            </div>
          </div>
          <div className="card">
            <p>
              <img src={locate} />
              /SP
            </p>
            <span>
              Rua Ibijaú, 355/Sala 1309 São Paulo / SP Brasil
              <br />
              +55 11 98871.8556
            </span>
            <div className="maps">
              <p>
                ver no google maps
                <img src={arrowRight} />
              </p>
            </div>
          </div>
          <div className="card">
            <p>
              <img src={marketing} className='logo' alt="Logo marketing"/>
            </p>
            <span>
            A Plan faz parte do Grupo Plan Marketing, um grupo de comunicação completo.
            </span>
            <div className="maps">
              <p>
              conheça
                <img src={arrowRight} />
              </p>
            </div>
          </div>
          <div className="card">
            <p>
              <img src={logo} className='logo' alt="Logo Plan"/>
            </p>
            <span>
            A Plan XP é especializada em realidade virtual, realidade aumentada e jogos.
            </span>
            <div className="maps">
              <p>
              conheça
                <img src={arrowRight} />
              </p>
            </div>
          </div>
          <div className="card">
            <p>
              <img src={fullup} className='logo' alt="Logo fullup"/>
            </p>
            <span>
            A FullUp é uma agência especializada em branding, design e campanhas.
            </span>
            <div className="maps">
              <p>
                conheça
                <img src={arrowRight} />
              </p>
            </div>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default ContactContent;
