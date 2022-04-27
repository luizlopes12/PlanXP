import React from "react";
import Styles from "./styled";
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
        <form>
            <div>
                <p>Nome:</p>
                <input type="text" />
            </div>
            <div>
            <p>E-mail:</p>

                <input type="text" />
            </div>
            <div>
            <p>Telefone:</p>

                <input type="text" />
            </div>
            <div>
            <p>Mensagem:</p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </form>
      </section>
    </Styles>
  );
};

export default ContactContent;
