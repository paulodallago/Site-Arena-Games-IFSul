import React from "react";
import logo from "../../assets/img/arena/logo_dark.png";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            {/* LEFT IMAGE */}
            <div className="contact-image">
              <img src={logo} alt="Entre em contato" />
            </div>

            {/* MIDDLE TEXT */}
            <div className="contact-intro">
              <h3>Tem interesse em apoiar?</h3>
              <p>
                Entre em contato conosco por meio de algum dos nossos contatos
                ao lado.
              </p>
            </div>

            {/* RIGHT INFO */}
            <div className="contact-text">
              <h2 className="section-title">Fale Conosco</h2>

              <div className="contact-info">
                <p>📍 Est. Perimetral Leste, 150. Passo Fundo - RS</p>
                <p>✉️ pf-arenagames@ifsul.edu.br</p>
                <p>📞 (54) 2024-0400</p>
              </div>

              <div className="footer-social">
                <a
                  href="https://www.instagram.com/arenagamesifsul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-instagram"></i>
                </a>

                <a
                  href="https://www.youtube.com/@ArenaGamesIFSULPF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
