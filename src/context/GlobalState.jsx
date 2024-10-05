import { createContext, useReducer } from "react";

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

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
