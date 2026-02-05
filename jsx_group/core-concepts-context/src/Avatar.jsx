import { use, useContext } from "react";
import { UserContext } from "./UserContext";

export const Avatar = ({ isLoading = true }) => {
  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  // const user = useContext(UserContext);
  // const { user, setUser } = useContext(UserContext);
  const { user, setUser } = use(UserContext); // more flexiable way to consume context value -> but its not a hook so it doesn't follow roles of hook -> so flexiable

  const toggleTheme = () => {
    setUser({
      ...user,
      theme: user.theme == "dark" ? "light" : "dark",
    });
  };

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <p>Current theme: {user.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
