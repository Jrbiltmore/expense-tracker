import React from "react";

import { icons } from "../constants";

const AddTransaction = () => {
  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">
            <b>Purpose</b>
          </label>
          <input type="text" placeholder="Enter purpose..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            <b>Amount</b>
            <br />
            <b>+</b> Income, <b>-</b> Expense
          </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
