import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpense = (props) => {
const [ isEiditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
   // console.log(expenseData);
    props.onAddExpense(expenseData);
     setIsEditing(false);
  };

  const StartEditingHandler = () => {
  setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">

      {!isEiditing && <button onClick={StartEditingHandler}>Add new Expencess </button>}
     {isEiditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
 </div>
  );
};

export default NewExpense;
