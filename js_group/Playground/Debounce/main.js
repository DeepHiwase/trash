// ========================= Debounce & Throttle =================================
// Debounce & Throttle -> to slow down a function to execute which can consume a lot of memory and time/compute when call repeateadly
const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

// debounce - run only once after some action
function debounce(cb, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

const updateDebounceText = debounce((text) => {
  debounceText.innerText = text;
});

// Throttling - ensures that a func run at most once in a given time

// Trottle with timout - call once then 
function trottle(cb, delay) {
  let isRunning = false;
  return function (...args) {
    if (isRunning) return;

    setTimeout(() => {
      cb.apply(this, args);
      isRunning = true;
    }, delay);
  };
}

const updateThrottledText = trottle((text) => {
  debounceText.innerText = text;
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
  input.addEventListener("input", (evnt) => {
    defaultText.innerText = evnt.target.value;
    updateDebounceText(evnt.target.value);
    updateThrottledText(evnt.target.value);
  });
});

// Throttle with timestamp - imediately call once and then call after the timestamp multiple in each - common to use not like timout-based

function trottleAdvanced(cb, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = 0;
      cb.apply(this, args);
    }
  };
}
