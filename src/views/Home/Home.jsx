import React from "react";
import YouTubeCard from "../../components/YouTubeCard/YouTubeCard";
import Footer from "../../components/Footer/Footer";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import Contact from "../../components/Contact/Contact";
import Registration from "../../components/Registration/Registration";
import Modalities from "../../components/Modalities/Modalities";
import Editions from "../../components/Editions/Editions";

const Home = () => {
  return (
    <>
      <MainCarousel />
      <YouTubeCard />
      {/* <Editions /> */}
      <Modalities />
      <Registration />
      <Contact />
    </>
  );
};

export default Home;
