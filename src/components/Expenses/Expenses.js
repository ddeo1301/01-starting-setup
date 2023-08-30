import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
 // const [expenses, setExpenses] = useState(props.expenses);
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // const deleteExpenseHandler = (expenseId) => {
  //   // Remove the expense with the specified ID from the expenses array
  //   setExpenses((prevExpenses) =>
  //     prevExpenses.filter((expense) => expense.id !== expenseId)
  //   );
  // };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.locationOfExpenditure}
          //onDelete={deleteExpenseHandler}
        />
      ))}
    </Card>
  );
};

export default Expenses;