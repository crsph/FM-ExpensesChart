import React from "react";
import styles from "../styles/BarStatics.module.scss";

export default function BarStatistic(props) {
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  return (
    <>
      <div className={styles["weekly-stat-container"]}>
        {days.map((day, index) => (
          <div key={index}>
            <div className={styles["weekly-stat-container__bar"]}/>
            {day}
          </div>
        ))}
      </div>
    </>
  );
}
