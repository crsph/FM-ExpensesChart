import React from "react";
import styles from "../styles/BarStatics.module.scss";

export default function BarStatistic(props) {
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  return (
    <>
      <div className={styles["bar-container"]}>
        {days.map((day, index) => (
          <div key={index} className={styles["bar"]}>
            {day}
          </div>
        ))}
      </div>
    </>
  );
}
