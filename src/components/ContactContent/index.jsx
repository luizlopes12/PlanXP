import React, { useState } from "react";
import Styles from "./styled";
import ReCAPTCHA from "react-google-recaptcha";
import arrowRight from "../../img/arrow.png";

const ContactContent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleTel = (e) => {
    setTel(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Sua mensagem foi enviada\n\nDados do formulário:\nNome: ${name}\nEmail: ${email}\nTelefone: ${tel}\nMensagem: ${message}`
    );
  };
  const verifyCallback = (value) => {
    console.log(value);
  };

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
        <form onSubmit={formSubmit}>
          <div>
            <p>Nome:</p>
            <input type="text" onChange={handleName} />
          </div>
          <div className="group">
            <div className="group-input">
              <p>E-mail:</p>

              <input type="email" onChange={handleEmail} />
            </div>
            <div className="group-input">
              <p>Telefone:</p>

              <input type="text" onChange={handleTel} />
            </div>
          </div>
          <div>
            <p>Mensagem:</p>
            <textarea cols="30" rows="10" onChange={handleMessage}></textarea>
          </div>
          <ReCAPTCHA
            sitekey="6Lc4RagfAAAAALM1QR_rSLoRI_SuxFL3HbK9dHGa"
            onChange={verifyCallback}
          />
          <button type="submit">
            Enviar
            <img src={arrowRight} alt="Flecha icone" />
          </button>
        </form>
      </section>
      <section></section>
    </Styles>
  );
};

export default ContactContent;
