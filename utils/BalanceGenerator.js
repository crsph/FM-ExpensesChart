import { useState, useEffect } from "react";

const maximumAmountSpent = 1000;
const minimumAmountSpent = 400;

export function MonthlySpending() {
  const [monthlySpending, setMonthlySpending] = useState(0);

  useEffect(() => {
    const randomAmount = (
      Math.random() * (maximumAmountSpent - minimumAmountSpent + 1) +
      minimumAmountSpent
    ).toFixed(2);

    setMonthlySpending(randomAmount);
  }, []);

  return (
    <>
      <span>${monthlySpending}</span>
    </>
  );
}