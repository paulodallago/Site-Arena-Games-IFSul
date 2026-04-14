import { Carousel } from "primereact/carousel";
import arena from "../../assets/img/arena/logo.jpeg";
import off from "../../assets/img/partners/off.jpg";
import styles from "./EntertainmentCarousel.module.css";

import React from "react";
import { Button } from "primereact/button";

const EntertainmentCarousel = () => {
  const carousel = [
    {
      title: "Laboratório de Jogos Antigos / Emulador de Jogos",
      image: arena,
      date: "09/05/2026",
      time: "Durante todo o evento",
      location: "IFSul - Passo Fundo",
    },
    {
      title: "Sala de Jogos de Tabuleiro (Espaço Off)",
      image: off,
      date: "09/05/2026",
      time: "Durante todo o evento",
      location: "IFSul - Passo Fundo",
    },
  ];

  // @ts-ignore
  const itemTemplate = (item) => {
    return (
      <div className={`${styles.carouselItem} defaultHover`}>
        <img src={item.image} alt={item.title} className={styles.carouselImg} />
        <div className={styles.carouselContent}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className={styles.info}>
            <p>
              <i className="pi pi-calendar" />
              {item.date}
            </p>
            <p>
              <i className="pi pi-clock" />
              {item.time}
            </p>
            <p>
              <i className="pi pi-map-marker" />
              {item.location}
            </p>
          </div>
          <Button
            label="Saiba mais"
            icon="pi pi-info-circle"
            className="transparent-button"
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <Carousel
            value={carousel}
            numVisible={2}
            numScroll={1}
            itemTemplate={itemTemplate}
            circular
            showNavigators={false}
            showIndicators={false}
            // autoplayInterval={4000}
          />
        </div>
      </div>
    </>
  );
};

export default EntertainmentCarousel;
