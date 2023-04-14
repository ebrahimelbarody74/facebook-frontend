import { createContext, useEffect, useState } from "react";

export const DarkMdeContext = createContext();

export const DarkMdeContextProvider = ({ children }) => {
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("dark")) || false
  );
  const toggle = () => {
    setDark(!dark);
  };

  useEffect(
    (e) => {
      localStorage.setItem("dark", dark);
    },
    [dark]
  );
  return (
    <DarkMdeContext.Provider value={{ dark, toggle }}>
      {children}
    </DarkMdeContext.Provider>
  );
};
