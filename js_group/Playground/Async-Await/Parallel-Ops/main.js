// TODO: complete it

function fetchUsers(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("users");
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

async function main() {
  try {
    const results = await Promise.all([
      fetchUsers(1000),
      fetchComments(1000),
      fetchPosts(1000),
    ]);
    for (let result of results) {
      console.log(result);
    }
  } catch (err) {
    console.log(ex);
  }

  const resultForAny = await Promise.any([
    fetchUsers(1000),
    fetchComments(1500),
    fetchUsers(4000),
  ]);
  console.log(resultForAny);
}
