import { createContext, useState } from "react";

//Primeiro crie o context
export const UserContext = createContext();

//Crie o provedor de contexto
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [Language, setLanguage] = useState(false);
  return (
    <UserContext.Provider value={{ Language, setLanguage }}>
      {children}
    </UserContext.Provider>
  );
};