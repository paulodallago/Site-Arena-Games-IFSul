import React from "react";
import styles from "./Schedule.module.css";
import Hero from "../../components/Hero/Hero";
import ModalitiesCarousel from "../../components/ModalitiesCarousel/ModalitiesCarousel";
import EntertainmentCarousel from "../../components/EntertainmentCarousel/EntertainmentCarousel";

const Schedule = () => {
  return (
    <>
      <Hero />

      <div className={styles.schedule}>
        <h1 className={styles.scheduleTitle}>Arena Games</h1>
        <ModalitiesCarousel />
        <h1 className={styles.scheduleTitle}>Entretenimento</h1>
        <EntertainmentCarousel />
      </div>
    </>
  );
};

export default Schedule;
