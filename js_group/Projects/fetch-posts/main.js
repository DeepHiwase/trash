function showLoader() {
  document.getElementById("status").textContent = "🔍...";
}

function clearLoader() {
  document.getElementById("status").textContent = "";
}

function fetchPostsById(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
    (response) => response.json(),
  );
}

function fetchCommentsBYPostId(postId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  ).then((response) => response.json());
}

function renderComments(comments, users) {
  const commentsSection = document.getElementById("comments");

  const ulElement = document.createElement("ul");

  // const users = fetchUsers();
  // console.log(users);

  if (comments.length > 0) {
    comments.forEach((comment) => {
      const list = document.createElement("li");
      list.innerText = `${comment.body} 
      
                                    - by ${comment.user.name}
      
      `;

      // const userNameBlock = renderUserName(comment.email, users);

      ulElement.append(list);
    });
  }

  commentsSection.appendChild(ulElement);
}

function renderPost(post) {
  const postElement = document.getElementById("post__container");
  postElement.innerHTML = null;

  const articleElement = document.createElement("article");
  articleElement.id = `${post.id}`;

  const titleElement = document.createElement("h2");
  titleElement.innerText = post.title;

  const paraElement = document.createElement("p");
  paraElement.innerText = post.body;

  const commentsSection = document.createElement("section");
  commentsSection.id = "comments";

  articleElement.append(titleElement, paraElement, commentsSection);
  postElement.appendChild(articleElement);

  return post.id;
}

function fetchUsers(comments) {
  const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users /*users*/) => {
      return comments.map((comment) => {
        return {
          ...comment,
          user: users[Math.floor(Math.random() * users.length)],
        };
      });
    });
  // .catch((err) => console.log(err));

  return users;
}

function renderUserName(commentEmail, users = []) {
  const user = users.find((user) => user.email === commentEmail);

  const para = document.createElement("p");
  para.innerText = user.name;

  return para;
}

// function fetchUserNameByEmail(email) {
//   const user = fetch("https://jsonplaceholder.typicode.com/users");
// }

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#show").addEventListener("click", () => {
    showLoader();

    // const users = fetchUsers();
    // console.log(users);

    fetchPostsById(document.querySelector("#posts-id").value)
      .then(renderPost)
      .then(fetchCommentsBYPostId)
      // .then(
      // (response) => {
      //   fetchUsers().then((users) => renderComments(response, users));
      // })
      // .finally(clearLoader);
      .then(fetchUsers)
      .then(renderComments)
      .finally(clearLoader);
  });
});
