import { Carousel } from "primereact/carousel";
import grid_cs from "../../assets/img/grids/cs.png";
import styles from "./Editions.module.css";

import React from "react";
import { Button } from "primereact/button";

const Editions = () => {
  const carousel = [
    {
      title: "Arena Games",
      description: "Participe do maior evento de games do IFSul.",
      image: grid_cs,
    },
    {
      title: "Valorant Championship",
      description: "Monte seu time e dispute o campeonato.",
      image: grid_cs,
    },
    {
      title: "League of Legends",
      description: "Mostre sua habilidade no Rift.",
      image: grid_cs,
    },
  ];

  // @ts-ignore
  const itemTemplate = (item) => {
    return (
      <div className={styles.carouselItem}>
        <img src={item.image} alt={item.title} className={styles.carouselImg} />
        <div className={styles.carouselContent}>
          <h3>{item.title}</h3>
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
            numVisible={3}
            numScroll={1}
            itemTemplate={itemTemplate}
            circular
            autoplayInterval={4000}
          />
        </div>
      </div>
    </>
  );
};

export default Editions;
