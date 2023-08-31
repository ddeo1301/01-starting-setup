import {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = (props) => {
    let defaultForm = (
        <div className="new-expense__controls">
          <div className="new-expense__actions">
            <button onClick={showFormHandler}>Add Expense</button>
          </div>
        </div>
    );

    const [entereddefaultForm, setDefaultForm] = useState(defaultForm);

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        //console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    function showFormHandler() {
        setDefaultForm(
            <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}></ExpenseForm>
        );
    }

    return <div className="new-expense">{entereddefaultForm}</div>;

    // return <div className='new-expense'>
    //     <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
    //     {/* didnt add () so that fn itself is added to expenseForm */}
    // </div>
};

export default NewExpense;