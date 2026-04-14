import React from "react";
import background from "../../assets/img/general/background_registrations.jpg";
import { Button } from "primereact/button";
import "./Registration.css";

const Registration = () => {
  return (
    <>
      <section
        className="arena"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="arena-content">
            <h2 className="section-title">Inscrições</h2>

            <p>
              A Arena Games IFSul – Passo Fundo está te esperando! Competições,
              premiações e muito networking. Monte sua equipe, escolha sua
              modalidade e partiu campeonato!
            </p>

            <Button
              label="Inscrições"
              onClick={() =>
                window.open(
                  "https://painel.passofundo.ifsul.edu.br/syseve/inscricoes/",
                  "_blank",
                )
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
