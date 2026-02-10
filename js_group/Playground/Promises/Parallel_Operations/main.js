// // Promise.resolve();  // immediately resolve and return promise
// Promise.resolve(10).then(console.log);

// Promise.reject("test error").catch(console.error);

// function fetchUsers(delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("user");
//     }, delay);
//   });
// }
// function fetchPosts(delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("posts");
//     }, delay);
//   });
// }
// function fetchComments(delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("comments");
//     }, delay);
//   });
// }

// Promise.all([fetchUsers(1000), fetchPosts(2000), fetchComments(300)]).then(
//   (response) => {
//     console.log(response);
//   },
// );

// const startTime = performance.now();
// console.time();
// Promise.race([fetchUsers(10000), fetchPosts(2000), fetchComments(3000)])
//   .then((response) => {
//     console.log(response);
//     console.timeEnd();
//     const endTime = performance.now();
//     console.log(endTime - startTime);
//   })
//   .catch();

// const startTime = performance.now();

// Promise.any([
//   // nay one response which come fast even if its a error
//   fetchUsers(10000),
//   fetchPosts(2000),
//   fetchComments(3000),
//   new Promise((reject) => reject("error")),
// ])
//   .then((response) => console.error(response))
//   .catch((err) => console.error);
// // if all fail then it reject and goes to catch

// function fetch4() {}

// Promise.allSettled([
//   fetchUsers(1000),
//   fetchPosts(2000),
//   fetchComments(3000),
//   (() => new Promise((reject) => reject("Error")))(),
// ])
//   .then((response) => console.log(response))
//   .catch(console.error);

// // if fullfilled -> value
// // if reject -> reason

// ==================================
// when ever want to add custom delay -> 👲 use Promise with setTimeout with resolve()
// new Promise((resolve) => setTimeout(() => resolve(), 3000)); // 3 second delay added - when awaited in flow of excution

// ============================ Promise Methods - 6 static methods  =============================
// static methods - those which can called without creating instance of class (here Promise class) -> methods defined with static keyword💎
// ============================= Parallel Operations with Promise  ==============================
// 1️⃣Promise.all(); // takes iteratable usually array of promises - return a new promise
// new promise is resolved - 💎 when all promises are resolved - array of their results become its result -> return array of result

// Promise.all() // ❌ as undefined is not iteratable
// Promise.all({}) // ❌ object is not iteratable
// Promise.all([]);
// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((resolve) => setTimeout(() => resolve(2), 10000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 10000)), // 3
// ]).then(console.log); // even time is different -> when all resolved - then only given result - then block run -> takes each one o/p -> store and return arry of o/p sequentially
// o/p -> always [1, 2, 3] even delay of each changes 💎 wait for all to resolve - so max time taken to resolve is time taken by maximum one 👲

// good for ->  “all or nothing” cases - Ex: fetching all files to render on web or nothing of a feature

// 💎 here if one promise reject, the operation of other still continues like fetching, but Promise.all ignores thier result completely not cancel their execution. Promise.all won't watch them anymore even if they settled. Promise.all does nothing to cancel them, there is no cancellation concept 💀 in promises but their is tool out of promise concept named `AbortController` 👲 to solve this issue.

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(2), 10000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 10000)),
// ])
//   .then(console.log)
//   .catch(console.error); // any one gets rejects -> return only that one - not a array of answers - only first one to reject answer passed to catch block

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(2), 10000)),
//   new Promise((resolve) => setTimeout(() => resolve(3), 10000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(4), 3000)), // 4
// ])
//   .then(console.log)
//   .catch(console.error); // if multiple reject - only first one to reject will pass to catch block

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(2), 3000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 10000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 3000)),
// ])
//   .then(console.log)
//   .catch(console.error); // even if duration of reject is same then also first one to reject will pass to catch block ignoring then block, its goes in order

// common use - when given array of job data - map it array of promises then pass it to Promise.all - to fetch all at once
// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://api.github.com/users/jeresig",
// ];
// let requests = urls.map((url) => fetch(url));
// Promise.all(requests).then((responses) =>
//   responses.forEach((response) =>
//     console.log(`${response.url}: ${response.status}`),
//   ),
// );

// let names = ["iliakan", "remy", "jeresig"];
// let requests = names.map((name) =>
//   fetch(`https://api.github.com/users/${name}`),
// );
// Promise.all(requests)
//   .then((responses) => {
//     for (let response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }

//     return responses;
//   })
//   .then((responses) => Promise.all(responses.map((r) => r.json())))
//   .then((users) => users.forEach((user) => console.log(user)))
//   .catch(console.error)
//   .finally(console.log("Loading stopped..."));

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 1000)), // 1
//   2, // 2
//   3, // 3
// ]).then(console.log); // ✅ [1, 2, 3] - means Promise.all accepts non-promise values allows - able to pass ready values to Promise.all where convenient.

// Promise.all([4, 5, 6]).then(console.log); // ✅

// ======

// Promise.allSettled();
// waits for all promises to settle, regardless of result
// resulting array consists -
// {status: "fulfilled", value: result} - for successful response(resolve) - response object if fetching user
// {status: "rejected", reason: error} - for reject - and error message is put in reason
// for each promise - we get its status and value/error
// waits for all promise to resolve/reject - so maximum time to give result depends on maximum time taken my any promise
// ex: scenerio - even if one or any fails - we need others value also - get all values
// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
//   "https://no-such-url",
// ];
// Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
//   console.table(results);
//   results.forEach((result, i) => {
//     if (result.status == "fulfilled") {
//       console.log(`${urls[i]}: ${result.value.status}`);
//     }
//     if (result.status == "rejected") {
//       console.log(`${urls[i]}: ${result.reason}`);
//     }
//   });
// });

// since Promise.allSettled is new addon - old browser may not support - so need to add Pollyfill
// Promise.allSettled Polyfill -
// if (!Promise.allSettled) {
//   const rejectHandler = (reason) => ({ status: "rejected", reason });
//   const resolveHandler = (value) => ({ status: "fulfilled", value });

//   Promise.allSettled = function (promises) {
//     const convertedPromises = promises.map((p) =>
//       p.resolve(p).then(resolveHandler, rejectHandler),
//     );
//     return Promise.all(convertedPromises);
//   };
// }

// ===========

// Promise.race(); - waits for only first settled promises and gets its result/error - not return arr ony a single value of fastest one that either resolve or reject

// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 4000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 2000),
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
// ])
//   .then(console.log)
//   .catch(console.error); // if you didn't use catch -> result in console Uncaught Error: error message  -> so always use catch block to catch error/reject result and display acc

// =========

// Promise.any(); - similer to Promise.race() but waits only for first fulfilled promise 💎
//  if one to answer is rejected then its ignore and look for until its get first one with resolve - results is a single value of first one resolved value

// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 1000),
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)), // 1
//   new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
// ]).then(console.log);

// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 1000),
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 1000),
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops!")), 1000),
//   ),
// ])
//   .then(console.log)
//   // .catch(console.error); // AggregateError: All promises were rejected <- 💀 - this results only when all rejects means no one get resolved
//   // AggregateError - a special error obj stores all promises errors in errors prop
//   .catch((error) => {
//     console.log(error.constructor.name);
//     console.log(error);
//     console.log(error.errors);
//     console.log(error.errors[0]);
//     console.log(error.errors[1]);
//     console.error(error);
//   });

// so then you log() error -> its don't modify error, just as it is paste result error in console
// so then you log with console.error() -> it modify error to shows its a error and response is like a single line with files where its happen listed - whereas console.log is specified and what you want will show same

// ============================ .resolve()/reject() ==== are getting rarely use as async/await syntax in modern code
// Promise.resolve(); - creates a resolve promise with result value pass as arg
// 💎 - use to specify that it always return a promise - let say function loadCached
// console.log(Promise.resolve(1));

// let cache = new Map();

// function loadCached(url) {
//   // Promise<any>
//   if (cache.has(url)) {
//     return Promise.resolve(cache.get(url)); // to tell that loadCached always return a promise - 👲 so that we can use .then() on loadCached function
//   }

//   return fetch(url)
//     .then((response) => response.text())
//     .then((text) => {
//       cache.set(url, text);
//       return text;
//     });
// }

// loadCached("").then(); // since loadCached guaranteed to return a promise

// Promise.reject(); - in practice, this method almost never used
// Promise.reject(new Error("Forced error")); // same as new Promise((resolve, reject) => reject(error))

Promise.resolve(Promise.resolve(Promise.resolve(Promise.resolve(1)))).then(
  console.log,
); // 💎 when promises are to be resolved, they are effectively recursiverly resolved
