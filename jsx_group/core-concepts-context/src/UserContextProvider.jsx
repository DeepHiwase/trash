import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Bruce Wayne",
    role: "admin",
    theme: "dark",
  });

  // if useReducer -> then you need to pass state, dispatch or even have to create two different context for each -> given in react.dev docs
  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
};
