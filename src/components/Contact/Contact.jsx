import React from "react";
import logo from "../../assets/img/arena/logo_dark.png";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            {/* LEFT IMAGE */}
            <div className={styles.contactImage}>
              <img src={logo} alt="Entre em contato" />
            </div>

            {/* MIDDLE TEXT */}
            <div className={styles.contactIntro}>
              <h2>Tem interesse em apoiar?</h2>
              <p>
                Entre em contato conosco por meio de algum dos nossos contatos
                ao lado.
              </p>
            </div>

            {/* RIGHT INFO */}
            <div className={styles.contactText}>
              <h2 className={styles.sectionTitle}>Fale Conosco</h2>

              <div className={styles.contactInfo}>
                <p>📍 Est. Perimetral Leste, 150. Passo Fundo - RS</p>
                <p>✉️ pf-arenagames@ifsul.edu.br</p>
                <p>📞 (54) 2024-0400</p>
              </div>

              <div className={styles.footerSocial}>
                <a
                  href="https://www.instagram.com/arenagamesifsul/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  <i className="bi bi-instagram"></i>
                </a>

                <a
                  href="https://www.youtube.com/@ArenaGamesIFSULPF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
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
