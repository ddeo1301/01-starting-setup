import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import React, {useState} from "react";
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const[title, setTitle] = useState(props.title);
    const[amount, setAmount] = useState(props.amount);
    
    const clickHandler = () => {
        setTitle("Updated")
    }

    const clickAmount = () => {
        setAmount("100$");
    }

    const deleteExpenseHandler = () => {
        const expenseItem = document.querySelector('.expense-item');
        expenseItem.remove();
        console.log("deleted")
    };

    return (
        <li>
           <Card className="expense-item">
                <ExpenseDate date = {props.date}/>
                < ExpenseDetails title={title} amount={amount} location={props.location} />
                <button onClick = {clickAmount}>Change Amount</button>
                <button onClick = {clickHandler}>Change Title</button>
                <button onClick = {deleteExpenseHandler}>Delete the Expense</button>
           </Card>
        </li>
        
    );
}

export default ExpenseItem;
