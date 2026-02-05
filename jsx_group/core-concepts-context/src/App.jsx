import { Header } from "./Header";
import { UserContext } from "./UserContext";
// import { useState } from "react";
import { UserContextProvider } from "./UserContextProvider";

function App() {
  // const [user, setUser] = useState({
  //   name: "Bruce Wayne",
  //   role: "admin",
  //   theme: "dark",
  // });

  // static var
  // const user = {
  //   name: "Bruce Wayne",
  //   role: "admin",
  //   theme: "dark",
  // };

  // const contextValue = {
  //   user,
  //   setUser,
  // };

  return (
    <>
      <UserContextProvider>
        {/* <UserContext value={contextValue}> */}
        {/* <UserContext value={user}> */}
        <div>
          <h1>Dashboard</h1>
          {/* <Header user={user} /> */}
          <Header />
        </div>
        {/* </UserContext> */}
      </UserContextProvider>
    </>
  );
}

export default App;
