/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { icons } from "../constants";

const TransactionList = () => {
  return (
    <>
      <h3>Transaction History</h3>
      <ul id="list" className="list">
        <li className="minus">
          Cash <span>-$500</span>
          <a>
            <img className="delete-icon" src={icons.remove} />
          </a>
        </li>
      </ul>
    </>
  );
};

export default TransactionList;
