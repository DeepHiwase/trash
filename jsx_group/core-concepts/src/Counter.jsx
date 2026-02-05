import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(() => {
    // this is known as lazy initialization -> passing function in useState to do complex initial task -> ✅ fetching data, ✅ reading from local storage
    console.log("Initial state function called");
    return 0;
  });
  // let count = 0;
  console.log("Counter component rendered", "with count: ", count);
  const handleClick = () => {
    // count = count + 1;
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Count: {count}</button>;
};
