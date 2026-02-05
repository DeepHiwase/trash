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

// ========================================================
fetch("https://jsonplaceholder.typicode.com/todos/2")
  .then((response) => {
    console.log(response);
    return response.json();
    // return response.text();
    // return response.arrayBuffer();
    // return response.blob();
    // return response.bytes();
    // return response.clone(); // store the clone value in a var which same respinse then put in different .then to get mustiple result format of any type
    // return response.formData();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
