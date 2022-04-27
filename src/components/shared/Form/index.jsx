import React, { useState } from "react";
import arrowRight from "../../../img/whiteArrow.png";
import ReCAPTCHA from "react-google-recaptcha";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState(false);

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
    if (
      name.length > 0 &&
      email.length > 0 &&
      tel.length > 0 &&
      message.length > 0
    ) {
      if (captcha === true) {
        alert(
          `Sua mensagem foi enviada\n\nDados do formulário:\nNome: ${name}\nEmail: ${email}\nTelefone: ${tel}\nMensagem: ${message}`
        );
        setName("");
        setEmail("");
        setTel("");
        setMessage("");
      } else {
        alert(`Faça a verificação ReCAPTCHA`);
      }
    } else {
      alert("Preencha todos os campos do formulario");
    }
  };
  const verifyCallback = async (value) => {
    value.length > 0 ? setCaptcha(true) : setCaptcha(false);
  };

  return (
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
  );
};

export default Form;
