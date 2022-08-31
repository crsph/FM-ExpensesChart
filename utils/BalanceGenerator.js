import { useState, useEffect } from "react";

const maximumAmountSpent = 1000;
const minimumAmountSpent = 400;

export function BankBalance() {
  const [bankBalance, setBankBalance] = useState(0);

  useEffect(() => {
    const randomAmount = (
      Math.random() * (maximumAmountSpent - minimumAmountSpent + 1) +
      minimumAmountSpent
    ).toFixed(2);

    setBankBalance(randomAmount);
  }, []);

  return (
    <>
      <span>${bankBalance}</span>
    </>
  );
}

export function MonthSpendingBalance() {
  const [monthlySpendingBalance, setMonthlySpending] = useState(0);

  useEffect(() => {
    const monthlySpending = BankBalance * 0.4.toFixed(2);

    setMonthlySpending(monthlySpending);
  }, [])

  return (
    <>
      <span>${monthlySpendingBalance}</span>
    </>
  )
}
