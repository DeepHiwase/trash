// =================== Fetch ==========================
// return promise -> await

// let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

// console.log(response);

// ================================
// document.addEventListener("DOMContentLoaded", () => {
//   const formElement = document.querySelector("form");

//   formElement.addEventListener("submit", (evnt) => {
//     evnt.preventDefault();
//     let formData = new FormData(this);
//     const name = formData.get("name");
//     const email = formData.get("email");
//     const query = formData.get("query");

//     saveQuery({ name, email, query }).then((result) => {});
//   });

//   function saveQuery(data) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         try {
//           let queries = localStorage.getItem("queries");
//           if (!queries?.length) {
//             queries = [];
//           }
//           queries.push(data);
//           localStorage.setItem("queries", JSON.stringify(queries));
//           resolve(data);
//           reject(err);
//         } catch (err) {}
//       }, 3000);
//     });
//   }
// });

// // ========================================================
// fetch("https://jsonplaceholder.typicode.com/todos/2")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//     // return response.text();
//     // return response.arrayBuffer();
//     // return response.blob();
//     // return response.bytes();
//     // return response.clone(); // store the clone value in a var which same respinse then put in different .then to get mustiple result format of any type
//     // return response.formData();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// ======================= HTTP Verbs -> Methods ========================
// CRUD - REST API follows this principle

// ======= GET

async function getTodoById(todoId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      method: "GET", // by default GET so no need to put in simple request
    },
  );
  return response.json();
}

getTodoById("1").then(console.log);

// ======= POST

async function addTodo(newPost) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    body: JSON.stringify(newPost), // ReadableStream<any> -> so send by doing stringify 💀✅💎
  });
  return response.json();
}

addTodo({
  userId: crypto.randomUUID().length / 2,
  id: 1,
  title: "HTTP POST method",
  body: "Using fetch() to post todo to server",
}).then(console.log);

// =======PATCH

async function updateTodoTitle(postId, updatedPatchPart) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "PATCH",
      body: JSON.stringify(updatedPatchPart),
    },
  );
  return response.json();
}

updateTodoTitle(1, {
  title: "HTTP PATCH method",
})
  .then((response) => getTodoById(response.id))
  .then(console.log);

// ======= PUT

async function updateTodo(postId, updatedPost) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "PUT",
      body: JSON.stringify(updatedPost),
    },
  );
  return response.json();
}

updateTodo(1, {
  userId: crypto.randomUUID(),
  id: 1,
  title: "HTTP PUT method",
  body: "Updated body",
}).then(console.log);

// ======= DELETE

async function deleteTodo(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "DELETE",
    },
  );
  return response.json();
}

deleteTodo(1).then(console.log);

// ======== OPTIONS
