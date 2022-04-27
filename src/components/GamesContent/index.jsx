import React from "react";
import Styles from "./styled";
import games1 from "../../img/games1.png";
import games2 from "../../img/games2.png";
import games3 from "../../img/games3.png";
import gamesicon from "../../img/gamesicon.png";

import arrowRight from "../../img/arrow.png";

const GamesContent = () => {
  return (
    <Styles>
      <section>
        <div className="title">
          <p>/O que fazemos</p>
          <h1>/Games</h1>
          <span>02.</span>
        </div>
        <div className="texts">
          <h2>Desenvolvimento de games digitais.</h2>
          <span>
            Empresa especialista em desenvolvimento games digitais e
            gamificação.
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            aliquam ultricies sollicitudin. Cras vehicula congue odio, quis
            lobortis leo gravida non. In ornare erat tortor, mattis sodales leo
            efficitur at. In hac habitasse platea dictumst. Quisque ante tortor,
            egestas a lorem a, tempor lacinia nisi.
          </p>
        </div>
      </section>
      <section>
        <div className="cards">
          <div className="card">
            <div className="cardImage">
              <img src={games1} alt="Imagem card" />
            </div>
            <p>
              A <strong>PlanXP</strong> tem uma equipe qualificada para o
              <strong> desenvolvimento de jogos digitais</strong> para
              <strong> dispositivos móveis</strong> (smartphones, tablets e
              afins).
            </p>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src={games2} alt="Imagem card" />
            </div>
            <p>
              Desenvolvemos games para anunciar seus produtos e serviços,
              através da <strong>gamificação</strong> (aplicações que utilizam
              dinâmicas de jogos para engajamento de usuários, resolução de
              problemas e melhoria no aprendizado).
            </p>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src={games3} alt="Imagem card" />
            </div>
            <p>
              Utilizando as últimas tecnologias para a
              <strong> criação de games</strong>, trabalhamos de acordo com as
              necessidades dos clientes, sempre buscando oferecer o resultado
              que ele busca.
            </p>
          </div>
          <div className="card">
            <div className="cardImage">
              <img src={gamesicon} alt="Imagem card" className="icon" />
            </div>
            <p className="action">
              Experimente inovar com a<strong> PlanXP</strong> para
              <strong> desenvolver os seus jogos digitais!</strong>
            </p>
            <span>
              Entre em contato agora mesmo 
              <img src={arrowRight} alt="Flecha icone" />
            </span>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default GamesContent;
