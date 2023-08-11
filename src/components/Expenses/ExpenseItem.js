import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("Delete!!!!");
  };

 // document.
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClink={clickHandler}> Delete</button>
      {/* <button onClick={() => {console.log("Delete ")}}> change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
