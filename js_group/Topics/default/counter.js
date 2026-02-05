document.getElementById("counter-text").innerText =
  localStorage.getItem("counter") ?? 0;

const counterText = document.getElementById("counter-text");
let counterValue = parseInt(counterText.innerText);
if (counterValue < 0) {
  // counterText.style.color = "red";
  // counterText.style.transform = "translateX(-10px)";
  // document.getElementById("decrement").setAttribute("disabled", true);
} else {
  counterText.style.color = "black";
  counterText.style.transform = "translateX(0)";
  // document.getElementById("decrement").setAttribute("disabled", false);
  // document.getElementById("decrement").style.cursor = "pointer";
}

document.getElementById("increment").addEventListener("click", () => {
  const counterText = document.getElementById("counter-text");
  let counterValue = parseInt(counterText.innerText);
  counterValue += 1;
  if (counterValue < 0) {
    // counterText.style.color = "red";
    // counterText.style.transform = "translateX(-10px)";
    document.getElementById("increment").setAttribute("disabled", true);
    document.getElementById("increment").style.cursor = "not-allowed";
  } else {
    counterText.style.color = "black";
    counterText.style.transform = "translateX(0)";
    document.getElementById("increment").removeAttribute("disabled");
    document.getElementById("decrement").removeAttribute("disabled");
    document.getElementById("increment").style.cursor = "pointer";
  }
  counterText.innerText = counterValue.toString();

  localStorage.setItem("counter", counterValue.toString());
});

document.getElementById("reset").addEventListener("click", () => {
  const counterText = document.getElementById("counter-text");
  let counterValue = parseInt(counterText.innerText);
  counterValue = "0";
  counterText.style.color = "black";
  counterText.style.transform = "translateX(0)";
  counterText.innerText = counterValue;
  localStorage.setItem("counter", counterValue.toString());
});

document.getElementById("decrement").addEventListener("click", () => {
  const counterText = document.getElementById("counter-text");
  let counterValue = parseInt(counterText.innerText);
  counterValue -= 1;
  if (counterValue < 0) {
    // counterText.style.color = "red";
    // counterText.style.transform = "translateX(-10px)";
    document.getElementById("decrement").setAttribute("disabled", true);
    document.getElementById("decrement").style.cursor = "not-allowed";
  } else {
    counterText.style.color = "black";
    counterText.style.transform = "translateX(0)";
    document.getElementById("decrement").removeAttribute("disabled");
    document.getElementById("decrement").style.cursor = "pointer";
  }
  counterText.innerText = counterValue.toString();
  localStorage.setItem("counter", counterValue.toString());
});

document.getElementById("clr-btn").addEventListener("click", () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
