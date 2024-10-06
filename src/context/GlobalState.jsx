import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { type } from "@testing-library/user-event/dist/type";

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Test1", amount: -20 },
    { id: 2, text: "Test2", amount: 300 },
    { id: 3, text: "Test3", amount: -10 },
    { id: 4, text: "Test4", amount: 150 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
