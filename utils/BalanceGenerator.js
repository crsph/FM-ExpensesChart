import { useEffect, useContext } from "react";
import ExpenseContext from "../components/ContextObject";

const maximumAmountSpent = 1000;
const minimumAmountSpent = 400;

export function MonthlySpending() {
  const [monthlyExpense, setMonthlyExpense] = useContext(ExpenseContext);

  useEffect(() => {
    const randomAmount = (
      Math.random() * (maximumAmountSpent - minimumAmountSpent + 1) +
      minimumAmountSpent
    ).toFixed(2);

    setMonthlyExpense(randomAmount);
  }, [setMonthlyExpense]);

  return (
    <>
      <span>${monthlyExpense}</span>
    </>
  );
}
