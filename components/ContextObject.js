import { createContext, useState } from "react";

const ExpenseContext = createContext();

export const Provider = ({ children }) => {
  const [monthlyExpense, setMonthlyExpense] = useState(0);

  return (
    <ExpenseContext.Provider value={[monthlyExpense, setMonthlyExpense]}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
