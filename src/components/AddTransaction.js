import React, { useState } from "react";

const AddTransaction = () => {
  const [purpose, setPurpose] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">
            <b>Purpose</b>
          </label>
          <input
            type="text"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            placeholder="Enter purpose..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            <b>Amount</b>
            <br />
            <b>+</b> Income, <b>-</b> Expense
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
