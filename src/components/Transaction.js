import React from "react";
import { icons } from "../constants";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <a>
        <img className="delete-icon" src={icons.remove} />
      </a>
    </li>
  );
};

export default Transaction;
