// // Promise.resolve();  // immediately resolve and return promise
// Promise.resolve(10).then(console.log);

// Promise.reject("test error").catch(console.error);

function fetchUsers(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("user");
    }, delay);
  });
}
function fetchPosts(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("posts");
    }, delay);
  });
}
function fetchComments(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("comments");
    }, delay);
  });
}

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

function fetch4() {}

Promise.allSettled([
  fetchUsers(1000),
  fetchPosts(2000),
  fetchComments(3000),
  (() => new Promise((reject) => reject("Error")))(),
])
  .then((response) => console.log(response))
  .catch(console.error);

// if fullfilled -> value
// if reject -> reason

// ============================ Promise Methods =============================
Promise.resolve();
Promise.reject();
// ============================= Parallel Operations with Promise  ==============================
Promise.all();
Promise.allSettled();
Promise.any();
Promise.race();
