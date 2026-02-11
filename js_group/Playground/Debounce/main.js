// ========================= Debounce & Throttle =================================
// Debounce & Throttle -> to slow down a function to execute which can consume a lot of memory and time/compute when call repeateadly
const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

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

document.addEventListener("DOMContentLoaded", () => {
  input.addEventListener("input", (evnt) => {
    defaultText.innerText = evnt.target.value;
    updateDebounceText(evnt.target.value);
  });
});
