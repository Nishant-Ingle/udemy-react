import { createContext, useState } from "react";

export const UserContext = createContext({
  hasShopped: false,
  setHasShopped: () => null
});

export const UserProvider = ({ children }) => {
  const [hasShopped, setHasShopped] = useState(null);
  const value = { hasShopped , setHasShopped};

  return <UserContext.Provider value={value}>
          {children}
         </UserContext.Provider>;
}