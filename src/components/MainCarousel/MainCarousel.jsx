import { Carousel } from "primereact/carousel";
import hero_arena from "../../assets/img/heroes/arena.png";
import hero_cs from "../../assets/img/heroes/cs.png";
import hero_valorant from "../../assets/img/heroes/valorant.jpg";
import hero_lol from "../../assets/img/heroes/lol.png";
import hero_chess from "../../assets/img/heroes/chess.jpg";
import React from "react";
import { Button } from "primereact/button";
import "./MainCarousel.css";

const MainCarousel = () => {
  const carousel = [
    {
      title: "Arena Games",
      description: "Participe do maior evento de games do IFSul.",
      image: hero_arena,
    },
    {
      title: "CS",
      description: "Monte seu time e dispute o campeonato.",
      image: hero_cs,
    },
    {
      title: "League of Legends",
      description: "Mostre sua habilidade no Rift.",
      image: hero_lol,
    },
    {
      title: "Valorant",
      description: "Monte seu time e dispute o campeonato.",
      image: hero_valorant,
    },
    {
      title: "Xadrez",
      description: "Monte seu time e dispute o campeonato.",
      image: hero_chess,
    },
  ];

  // @ts-ignore
  const itemTemplate = (item) => {
    return (
      <div className="carousel-item">
        <div
          className="carousel-img"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="carousel-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Button label="Saiba mais" />
          </div>
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
            numVisible={1}
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

export default MainCarousel;
