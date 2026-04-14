import React from "react";
import logo_if from "../../assets/img/if/logo_pf.png";
import logo_off from "../../assets/img/partners/off.jpg";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          {/* SUPPORT */}
          <div className="footer-support">
            {/* REALIZAÇÃO */}
            <div className="footer-section">
              <h3>Realização</h3>
              <div className="support-logos">
                <a
                  href="https://passofundo.ifsul.edu.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_if} alt="IFSul Logo" />
                </a>
              </div>
            </div>

            <hr className="footer-divider" />

            {/* APOIO */}
            <div className="footer-section">
              <h3>Apoio</h3>
              <div className="support-logos">
                <a
                  href="https://www.instagram.com/offclubpf/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo_off} alt="OffClub Logo" />
                </a>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="footer-content">
            <p className="footer-copyright">
              © 2025 - IFSul - Câmpus Passo Fundo:{" "}
              <a
                href="https://passofundo.ifsul.edu.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                passofundo.ifsul.edu.br
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
