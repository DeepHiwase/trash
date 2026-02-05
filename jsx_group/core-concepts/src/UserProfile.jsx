import React, { useState } from "react";

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Bruce Wayne",
    age: 30,
    email: "batman@justiceleague.com",
    address: {
      city: "Gothum City",
      country: "USA",
    },
  });

  console.log("Component rendering, user: ", user);
  const updateName = () => {
    setUser((prev) => ({ ...prev, name: "Clark Kent" }));
  };
  const updateAge = () => {
    setUser((prev) => ({ ...prev, age: prev.age + 1 }));
  };
  const updateMultiple = () => {
    setUser((prev) => ({ ...prev, name: "Clark Kent", age: prev.age + 1 }));
  };
  const updateCity = () => {
    setUser((prev) => ({
      ...prev,
      address: { ...prev.address, city: "Metropolis" },
    }));
  };

  // return (
  //   <React.Fragment>
  //     <h1>React Core Concepts</h1>
  //     <p>Deep Hiwase</p>
  //   </React.Fragment>
  // );
  return (
    <>
      {/* <h1>React Core Concepts</h1>
      <p>Deep Hiwase</p> */}
      <div>
        <h2>{user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <p>City: {user.address.city}</p>
        <p>Country: {user.address.country}</p>
        <button onClick={updateName}>Change name to Clark Kent</button>
        <button onClick={updateAge}>Increase Age by 1</button>
        <button onClick={updateMultiple}>Update both Name & Age</button>
        <button onClick={updateCity}>Move to Metropolis</button>
      </div>
    </>
  );
};
