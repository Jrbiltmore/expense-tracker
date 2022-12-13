import React, { useContext } from "react";
import { icons } from "../constants";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.purpose}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <a onClick={() => deleteTransaction(transaction.id)}>
        <img className="delete-icon" src={icons.remove} />
      </a>
    </li>
  );
};

export default Transaction;
