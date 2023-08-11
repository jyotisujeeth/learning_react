import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
// function click handler
const [amount, setamount] = useState(props.amount);
console.log('ExpensesItem evaluated by React');
const title = props.title;

  const clickHandler = () => {
   setamount(100);
    console.log(amount);
  };

 // document.
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.setamount}</div>
        <h2>{amount}</h2>
      </div>
      <button onClick={clickHandler}>changeAmount</button>
      {/* <button onClick={() => {console.log("clicked ")}}> change title</button> */}
    </Card>
  );
};

export default ExpenseItem;



// const ExpenseItem = (props) => {
//   // function click handler
//   const [title, setTitle] = useState(props.title);
//   console.log("ExpensesItem evaluated by React");

//   const clickHandler = () => {
//     setTitle("changeIt!");
//     console.log(title);
//   };

//   // document.
//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>changeTitle</button>
//       {/* <button onClick={() => {console.log("clicked ")}}> change title</button> */}
//     </Card>
//   );
// };
