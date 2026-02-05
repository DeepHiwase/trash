import { useState } from "react";

export const BatchingCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(false);

  console.log("Render phase: Component rendering with count = ", count);

  const handleClick = () => {
    setCount((prev) => prev + 1); // this is know as updater func which are present as callback
    setCount((prev) => {
      return prev + 5;
    });
    setCount((prev) => prev + 10); // state as a snapshot

    setName("Updated");

    setIsActive(true);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <p>Name: {name}</p>
      <p>Active: {isActive ? "Yes" : "No"}</p>
      <button onClick={handleClick}>Update All Three</button>
    </div>
  );
};
