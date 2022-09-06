import React, { useEffect, useState } from "react";
import styles from "../styles/BarStatics.module.scss";

export default function BarStatistic(props) {
  const dailyExpenseObjectArray = [
    { day: "mon", expense: 0.0, percentage: "" },
    { day: "tue", expense: 0.0, percentage: "" },
    { day: "wed", expense: 0.0, percentage: "" },
    { day: "thu", expense: 0.0, percentage: "" },
    { day: "fri", expense: 0.0, percentage: "" },
    { day: "sat", expense: 0.0, percentage: "" },
    { day: "sun", expense: 0.0, percentage: "" },
  ];

  const [dailyExpenseArray, setDailyExpenseArray] = useState(
    dailyExpenseObjectArray
  );

  useEffect(() => {
    setDailyExpenseArray(
      dailyExpenseArray.map((dailyExpenseObj) => {
        const weeklyExpense = props.spending / 4;
        const percentage = Math.random() * (1 - 0);
        // console.log(percentage);
        const dailySpending = (weeklyExpense / 7) * percentage;

        return {
          ...dailyExpenseObj,
          expense: dailySpending.toFixed(2),
          percentage: (percentage * 100) + "%",
        };
      })
    );
  }, []);

  // console.log(dailyExpenseArray);

  return (
    <>
      <div className={styles["weekly-stat-container"]}>
        {dailyExpenseArray.map((dayObject, index) => (
          <div key={index} className={styles["daily-stat-container"]}>
            <div
              className={styles["daily-stat-container__bar"]}
              style={{ height: dayObject.percentage }}
            />
            {/* {dayObject.expense} */}
            <p>{dayObject.day}</p>
          </div>
        ))}
      </div>
    </>
  );
}
