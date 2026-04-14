import React from "react";
import "./Schedule.css";
import Hero from "../../components/Hero/Hero";
import ModalitiesCarousel from "../../components/ModalitiesCarousel/ModalitiesCarousel";
import EntertainmentCarousel from "../../components/EntertainmentCarousel/EntertainmentCarousel";

const Schedule = () => {
  return (
    <>
      <Hero />

      <div className="schedule">
        <h1 className="schedule-title">Arena Games</h1>
        <ModalitiesCarousel />
        <h1 className="schedule-title">Entretenimento</h1>
        <EntertainmentCarousel />
      </div>
    </>
  );
};

export default Schedule;
