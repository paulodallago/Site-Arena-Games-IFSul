import { Button } from "primereact/button";
import React from "react";
import "./YouTubeCard.css";

const YouTubeCard = () => {
  return (
    <>
      <div className="yt-section">
        <div className="yt-card">
          <div className="left">
            <h1>Você já conhece a Arena Games?</h1>
            <p>
              Acompanhe nossa playlist no YouTube para conhecer nossas
              atividades.
            </p>
            <Button className="yt-button" icon="pi pi-youtube"></Button>
          </div>

          <div className="right">
            <iframe
              src="https://www.youtube.com/embed/Mwk04vJpkPk"
              title="YouTube video"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTubeCard;
