function showLoader() {
  document.getElementById("status").textContent = "🔍...";
}

function clearLoader() {
  document.getElementById("status").textContent = "";
}

async function fetchPostsById(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
    // return response.json();
    if (!response.ok) {
      throw new Error("Post not found!!💀");
    } else {
      return response.json();
    }
  } catch (err) {
    throw err;
  }
}

async function fetchCommentsBYPostId(postId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    );
    return response.json();
  } catch (err) {
    throw err;
  }
}

function renderComments(comments) {
  const commentsSection = document.getElementById("comments");

  const ulElement = document.createElement("ul");

  if (comments.length > 0) {
    comments.forEach((comment) => {
      const list = document.createElement("li");
      list.innerText = `${comment.body} 
      
                                    - by ${comment.user.name}
      
      `;

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

async function fetchUsers(comments) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const commentsMappedWithUser = comments.map((comment) => {
      return {
        ...comment,
        user: users[Math.floor(Math.random() * users.length)],
      };
    });
    return commentsMappedWithUser;
  } catch (err) {
    throw err;
  }
}

function renderUserName(commentEmail, users = []) {
  const user = users.find((user) => user.email === commentEmail);

  const para = document.createElement("p");
  para.innerText = user.name;

  return para;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#show").addEventListener("click", async () => {
    showLoader();

    try {
      const id = await fetchPostsById(
        document.querySelector("#posts-id").value,
      );
      const postId = renderPost(id);

      const comments = await fetchCommentsBYPostId(postId);

      const commentsMappedWithUser = await fetchUsers(comments);
      renderComments(commentsMappedWithUser);
    } catch (err) {
      console.error(err);
    } finally {
      clearLoader();
    }
  });
});
