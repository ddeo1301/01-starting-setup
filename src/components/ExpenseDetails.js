import "./ExpenseItem.css";
import Card from './Card';

function ExpenseDetails(props){
    return(
        <Card className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            <div ><h3>{props.location}</h3></div>
        </Card>
    )
}

export default ExpenseDetails;