import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  
  const[enteredTitle, setEnteredTitle] = useState('');
  const[enteredAmount, setEnteredAmount] = useState('');
  const[enteredDate, setEnteredDate] = useState('');

  //method 2
  // const[userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //method 2 prev state use
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
      // OR
    // setUserInput((prevState) => {
    //    return {...prevState, enteredTitle: event.target.title};
    // })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  return (
    <from>
        <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" onChange = {titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input type="date" onChange={dateChangeHandler} min="2023-06-25" max="2025-12-31" />
            </div>
        </div>

        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </from>
  );
};

export default ExpenseForm;