// ============================== Async/Await ===============================
// diff syntax to deal with promises - easier to understand
function f() {
  // f(): number
  return 1;
}
async function f() {
  // f(): Promise<number>
  return 1;
}
// this means that, async before function -> function always returns a promise

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      // error first approach
      reject("User not found");
    } else {
      resolve({ id: 1, name: "Deep", age: 22 });
    }
  }, 1000);
}

// then/catch
// fetch(1).then(console.log).catch(console.error);

// async/await
// async function fetchUserData(id) {
//   const response = await fetchUser(id);
//   if (response === "User not found") {
//     // when know what kind of error -> when don't know -> its better to use try/catch for handling all kind unknown of error
//     console.error(response);
//   } else {
//     // user found
//     console.log(response);
//   }
// }
async function fetchUserData(id) {
  //(id: any): Promise<void>
  // value return -> means resolve -> means go to then() ✅
  // value thrown -> means reject -> means go to catch() block 💎 ✅ 
  try {
    const user = await fetchUser(id);
    console.log(user);
    // return  -> resolve()
    // return user -> resolve(user) -> this then get value to var catching await or then
  } catch (err) {
    console.error(err);
    // return err -> reject(err) -> -> this then get value to var catching await or catch ❌
    // return -> reject() ❌ wrong it will resolve again and it will get to then() block
    // so you must throw err to be able to catch by catch() block -> throw means reject ✅
    throw err; // then only reject(err)
  }
}

// whenever execution flow see await then push awaited function into task queue
// -> it continue to call next process - not stop folw of execution
console.log("Before operations");
// fetchUserData(0); // since it returns Promise -> it also can be awaited but you again have ot put it in async function to use await keyword
fetchUserData(0).then(console.log).catch(console.error);
console.log("After operations");
// if you use .then/catch it will not wait to complete it and do next func i.e. here After operations -> to stop execution - use await
