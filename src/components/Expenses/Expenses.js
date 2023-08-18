import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";


const Expenses = (props) => {
  const [filterdYear, setFilterdyear] = useState('2020');

   const filterChangeHandler = (selectedYear) => {
    setFilterdyear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterdYear;
  });
  
let expensesContent = <p>No expenses found</p>;

if(filteredExpenses.length > 0) {

}

  return (
    <Card className="expenses">
      <ExpensesFilter
      selected={filterdYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.length > 0 &&       
        filteredExpenses.map((expense) => (
        // {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      )
      
    />
        
// </div>
)}
export default Expenses;
