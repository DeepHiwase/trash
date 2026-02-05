import { createContext } from "react";

// export const UserContext = createContext();

// giving fallback value if not provided any value using Provider with value -> just pass in createContext
// export const UserContext = createContext({
//   name: "Guest",
//   role: "visitor",
//   theme: "dark",
// });
export const UserContext = createContext({
  user: { name: "Guest", role: "visitor", theme: "dark" },
  setUser: () => {},
});
