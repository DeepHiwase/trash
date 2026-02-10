function server1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Status OK, 200");
    }, 4000);
  });
}
function server2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Status OK, 200");
    }, 1000);
  });
}
function server3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error, 4XX");
    }, 3000);
  });
}
function server4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Status OK, 200");
    }, 1000);
  });
}

function checkAllSERVERStatus() {
  return Promise.allSettled(
    [server1, server2, server3, server4].map((server) => server()),
  ).then((res) => {
    console.table(res);
    for (let i in res) {
      if (res[i].status === "rejected") {
        console.warn(
          `server${+i + 1} failed with reason/error message${res[i].reason}`,
        );
      } else {
        console.log(
          `Server${+i + 1} is ok with status message ${res[i].value}`,
        );
      }
    }
  });
}

function checkFastestAvailableServer() {
  return Promise.any(
    [server1, server2, server3, server4].map((server) => server()),
  );
}

document.addEventListener("DOMContentLoaded", () => {
  checkAllSERVERStatus()
    .then(checkFastestAvailableServer)
    .then((res) => console.log(res));
});

// console.table();

// Promise.all(); // check for all status
// Promise.any(); // check any one is fastest
// Promise.race(); // check if fastest one is in timout  -> if not error else success // server which one is fastest and timesout function with delay you want within
