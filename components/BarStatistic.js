import React from "react";
import styles from "../styles/BarStatics.module.scss";

export default function BarStatistic(props) {
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const maximumAmountSpent = 1000;
  const minimumAmountSpent = 400;
  const randomAmount =
    Math.random() * (maximumAmountSpent - minimumAmountSpent + 1) +
    minimumAmountSpent;

  return (
    <>
      {days.map((day, index) => (
        <div key={index} className={styles["bar"]}>
          {day}
        </div>
      ))}
    </>
  );
}
