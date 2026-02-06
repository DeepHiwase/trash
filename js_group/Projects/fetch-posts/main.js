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

function renderComments(comments) {
  const commentsSection = document.getElementById("comments");

  const ulElement = document.createElement("ul");

  if (comments.length > 0) {
    comments.forEach((comment) => {
      const list = document.createElement("li");
      list.innerText = comment.body;
      ulElement.appendChild(list);
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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#show").addEventListener("click", () => {
    showLoader();

    fetchPostsById(document.querySelector("#posts-id").value)
      .then(renderPost)
      .then(fetchCommentsBYPostId)
      .then(renderComments)
      .finally(clearLoader);
  });
});
