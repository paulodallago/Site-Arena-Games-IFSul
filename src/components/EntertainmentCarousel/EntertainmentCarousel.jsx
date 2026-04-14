import { Carousel } from "primereact/carousel";
import grid_cs from "../../assets/img/grids/cs.png";
import "./EntertainmentCarousel.css";

import React from "react";
import { Button } from "primereact/button";

const EntertainmentCarousel = () => {
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
      <div className="carousel-item">
        <img src={item.image} alt={item.title} className="carousel-img" />
        <div className="carousel-content">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <Button label="Saiba mais" />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
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

export default EntertainmentCarousel;
