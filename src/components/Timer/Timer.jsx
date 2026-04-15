import React from "react";
import styles from "./Timer.module.css";
import Countdown from "react-countdown";

const Timer = () => {
  return (
    <div className={styles.timer}>
      <Countdown
        date={new Date("2026-05-09T08:00:00-03:00")}
        renderer={({ days, hours, minutes, seconds }) => (
          <div>
            <span>A Arena Games IFSul começa em </span>
            <span className={styles.countdown}>
              {days}d {hours}h {minutes}m {seconds}s
            </span>
          </div>
        )}
      />
    </div>
  );
};

export default Timer;
