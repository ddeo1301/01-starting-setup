import React, { useState } from 'react';
import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from './components/NewExpense/NewExpense';
import './components/Expenses/ExpenseDetails.css';

const App = () => {
        const [expenses, setExpenses] = useState([
        { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14), locationOfExpenditure : 'Banglore, India'},
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), locationOfExpenditure : 'Delhi, India' },
        { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28), locationOfExpenditure : 'Hyderabad, India'},
        { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12), locationOfExpenditure : 'Pune, India'},
      ]);

      const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => [...prevExpenses, expense]);
        console.log('In App.js');
        console.log(expense);
      }
    

      return (
        <div >
          <h2>Let's get started!</h2>
          <NewExpense onAddExpense = {addExpenseHandler}/>
          <div className="expenses">     
              {expenses.map((expense) => ( 
                  <ExpenseItem 
                    title = {expense.title}
                    amount = {expense.amount}
                    date = {expense.date}
                    location = {expense.locationOfExpenditure}
                  />
                ))}
          </div>
        </div>  
      );
}

// return React.createElement(
//   "div",
//   {},
//   React.createElement("h2", {}, "Hello Coders!"),
//   React.createElement(Expenses, { items: expenses })
// );

export default App;
