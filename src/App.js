import React from "react";
import "./app.css";

import { Header, Balance, IncomeExpense, TransactionList, AddTransaction } from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction/>
      </div>
    </div>
  );
};

export default App;
