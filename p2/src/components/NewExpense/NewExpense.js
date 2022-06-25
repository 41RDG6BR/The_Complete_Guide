import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => setIsToggled(!isToggled);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setIsToggled(!isToggled);
    };

    return(
        <div className="new-expense">
            {/* {isToggled ? (
                <ExpenseForm handleToggle={onToggle} onSaveExpenseData={saveExpenseDataHandler} />
            ) : <button onClick={onToggle}>Add New Expense</button> }        */}

            {!isToggled && ( 
                <button onClick={onToggle}>Add New Expense</button>
            )}       
            {isToggled && (
                <ExpenseForm 
                    handleToggle={onToggle} 
                    onSaveExpenseData={saveExpenseDataHandler} 
                />
            )}
        </div>
    )
}

export default NewExpense;