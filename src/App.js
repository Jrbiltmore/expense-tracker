import React from "react";
import "./app.css";

import { Header, Balance, IncomeExpense } from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
      </div>
    </div>
  );
};

export default App;
