import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState();

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p>No expenses found.</p>;

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense =>             
            <ExpenseItem
                key={expense.id}    
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
            />
        )
    }

    return(
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler} 
            />
            <ExpensesChart expenses={filteredExpenses} />
            {expensesContent}
        </Card>
    )
}

export default Expenses;