// ======================= Event Loop ==============================
function funcA() {
  console.log("A");
}

function funcB() {
  console.log("B");
}

function funcC() {
  setTimeout(() => {
    console.log("C");
  }, 100);
}

function funcD() {
  Promise.resolve().then(() => console.log("D"));
}

funcD();
funcC();
funcB();
funcA();
// B A D C

// ===================== Task Queue, Microtask Queue ==================
// Since FIFO - comming first func - gets execute first

// Priorities given by Call Stack
// 1. Synchronous code - simple long running task also
// 2. Microtask Queue code - Promise - promise callbacks .then()/.catch()/.finally()/ await/ queueMicrotask()❓/ MutationObserver ❓
// 3. Task Queue code - setTimeout() / setInterval() / initial script executiopn / DOM events - user interactions like click events / network req I/O

// ===================== Starvation Scenerio =======================
function infiniteFunc() {
  Promise.resolve().then(infiniteFunc);
}

function timer() {
  setTimeout(() => {
    console.log("will never be executed"); // starvation scenerio
  }, 0);
}

//
queueMicrotask(() => {
  console.log("this cb gets put into microtask");
});

// MutationObserver

// Since priority is given to microstask code, it block ui or freeze as ui interaction is less prorities as it a task queue and if something come like which is long running, it block to execute task queue functions 💎
