import React from "react";
import Styles from "./styled";
import news1 from '../../img/news1.png'
import news2 from '../../img/news2.png'
import news3 from '../../img/news3.png'
import news4 from '../../img/news4.png'
import news5 from '../../img/news5.png'
import arrowRight from "../../img/arrow.png";
import CasesCard from "../shared/CasesCard";
const NewsContent = () => {
  return (
    <Styles>
        <section>
        <div className="title">
        <p>/Plan news</p>
        <h1>/Cases Games</h1>
        <span>03.</span>

      </div>
      <div className="button">
        clique aqui para ver todo o blog 
        <img src={arrowRight} alt="Flecha icone" />
        </div>
        </section>
        <section className="cards">
        <CasesCard
    img={news1}
    gameName='SKA'
    title='Plan cria o novo site da SKA'
    text='Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...'
    />
        <CasesCard
    img={news2}
    gameName='tintas killing'
    title='Plan cria o novo site para a Tintas Killing'
    text='Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...'
    />
        <CasesCard
    img={news3}
    gameName='cargo br'
    title='Estamos desenvolvendo o novo site da CargoBR'
    text='Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum fermentum mattis'
    />
            <CasesCard
    img={news4}
    gameName='xalingo'
    title='Clubinho Xalingo com novidades'
    text='Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...'
    />
            <CasesCard
    img={news5}
    gameName='Aromatic'
    title='Novo site da Aromatic no ar'
    text='Aliquam ullamcorper augue a ligula aliquam rhoncus. Nullam accumsan auctor elementum Nam fermentum mattis ligula vulputate bibendum...'
    />
        </section>

    </Styles>
  );
};

export default NewsContent;
