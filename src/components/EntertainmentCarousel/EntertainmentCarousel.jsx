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
      description: "Participe do maior evento de games do IFSul.",
      image: arena,
    },
    {
      title: "Sala de Jogos de Tabuleiro (Espaço Off)",
      description: "Monte seu time e dispute o campeonato.",
      image: off,
    },
  ];

  // @ts-ignore
  const itemTemplate = (item) => {
    return (
      <div className={styles.carouselItem}>
        <img src={item.image} alt={item.title} className={styles.carouselImg} />
        <div className={styles.carouselContent}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <Button label="Saiba mais" />
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
            // autoplayInterval={4000}
          />
        </div>
      </div>
    </>
  );
};

export default EntertainmentCarousel;
