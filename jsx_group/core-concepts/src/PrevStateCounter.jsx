import { useState } from "react";

export const PrevStateCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Before setCount: count is ", count);
    setCount((prev) => prev + 1); // this is know as updater func which are present as callback
    console.log("After setCount: count is ", count);
    setCount((prev) => {
      console.log("Second updater fn: prev count = ", prev);
      return prev + 5;
    });
    console.log("After setCount((prev) => prev + 5): count is ", count);
    setCount((prev) => prev + 10); // state as a snapshot
    console.log("After setCount((prev) => prev + 10): count is ", count);
    setTimeout(() => {
      console.log("After 2 seconds, count is: ", count);
    }, 2000);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
