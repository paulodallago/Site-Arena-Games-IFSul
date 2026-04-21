import React from "react";
import styles from "./Modalities.module.css";
import modalitiesContent from "../../assets/json/modalitiesContent";

const Modalities = () => {
  return (
    <>
      <section className={styles.gameModes}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionTitle} underline`}>Modalidades</h2>

          <div className={styles.modesGrid}>
            {modalitiesContent.map((mode, index) => (
              <div key={index} className={styles.gameModeCard}>
                <img
                  src={mode.image}
                  alt={mode.title}
                  className={styles.gameImage}
                />
                <h3 className={styles.gameTitle}>{mode.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Modalities;
