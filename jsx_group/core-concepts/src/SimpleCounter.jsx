import { useState } from "react";

export const SimpleCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Before setCount: count is ", count);
    setCount(count + 1);
    console.log("After setCount: count is ", count);
    setCount(count + 5);
    console.log("After setCount(count + 5): count is ", count);
    setCount(count + 10); // state as a snapshot
    console.log("After setCount(count + 10): count is ", count);
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
