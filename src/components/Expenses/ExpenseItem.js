import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log("Clicked!!!");
    }

    const deleteExpenseHandler = () => {
        // Remove the expense item from the DOM
        const expenseItem = document.querySelector('.expense-item');
        expenseItem.remove();
    };

    return (
        <Card className="expense-item">
                <ExpenseDate date = {props.date}/>
                < ExpenseDetails title={props.title} amount={props.amount} location={props.location} />
                <button onClick = {clickHandler}>Change Title</button>
                <button onClick = {deleteExpenseHandler}>Delete the Expense</button>
        </Card>
    );
}

export default ExpenseItem;