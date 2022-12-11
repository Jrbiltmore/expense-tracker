import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Mobile", amount: "-80" },
    { id: 2, text: "Salary", amount: "700" },
    { id: 3, text: "TV", amount: "-150" },
    { id: 4, text: "Laptop", amount: "-200" },
  ],
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
