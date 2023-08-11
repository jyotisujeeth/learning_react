import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
// function clickhandedle
const [title, setTitle]= useState(props.title);



  const clickHandler = () => {
   setTitle('updated!');
    console.log(title);
  };

 // document.
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}> Delete</button>
      {/* <button onClick={() => {console.log("clicked ")}}> change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
