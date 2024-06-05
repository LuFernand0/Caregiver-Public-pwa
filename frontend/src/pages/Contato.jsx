import React from 'react';
import contato1 from '../assets/images/contato-1.jpg';

const Contato = () => {
  return (
    <section style={{ background: "#f5f5f5", padding: "50px 0" }}>
      <div className="container" style={containerStyle}>
        <div className="image-container" style={imageContainerStyle}>
          <img src={contato1} alt="Imagem de contato" style={imgStyle} />
        </div>
        <div className="form-container" style={formContainerStyle}>
          <h2 className="heading text-center" style={{ color: "#333" }}>Contate-nos</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text__para" style={{ color: "#666" }}>Encontrou algum problema técnico ou deseja enviar feedback sobre alguma funcionalidade? Por favor, informe-nos.</p>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="form__label">Seu email</label>
              <input type="email"
                id="email"
                placeholder="exemplo@gmail.com"
                className="form__input mt-1"
                style={inputStyle} />
            </div>
            <div>
              <label htmlFor="subject" className="form__label">Assunto</label>
              <input type="text"
                id="subject"
                placeholder="Informe-nos como podemos ajudar"
                className="form__input mt-1"
                style={inputStyle} />
            </div>
            <div>
              <label htmlFor="message" className="form__label">Sua mensagem</label>
              <textarea
                rows="6"
                type="text"
                id="message"
                placeholder="Deixe um comentário..."
                className="form__input mt-1"
                style={textareaStyle} />
            </div>
            <button type="submit" className="btn rounded sm:w-fit"  >Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  background: "#fff",
  borderRadius: "15px",
  boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
  overflow: 'hidden',
  flexWrap: 'wrap'
};

const imageContainerStyle = {
  flex: '1',
  padding: '20px',
  minWidth: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const imgStyle = {
  width: '100%',
  borderRadius: '15px',
  objectFit: 'cover'
};

const formContainerStyle = {
  flex: '1',
  padding: '40px',
  minWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const inputStyle = {
  width: '100%',
  padding: '10px 15px',
  borderRadius: '5px',
  border: '1px solid #ddd',
  marginBottom: '20px',
  fontSize: '1rem'
};

const textareaStyle = {
  width: '100%',
  padding: '10px 15px',
  borderRadius: '5px',
  border: '1px solid #ddd',
  marginBottom: '20px',
  fontSize: '1rem',
  resize: 'none'
};

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '10px 15px',
  borderRadius: '5px',
  backgroundColor: '#ff9933',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background 0.3s'
};

export default Contato;
