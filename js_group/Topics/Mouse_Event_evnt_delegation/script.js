let innerHTML = "";

function generateRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)},
          ${Math.floor(Math.random() * 256)},
          ${Math.floor(Math.random() * 256)})`;
}

function resetColor(square) {
  setTimeout(() => {
    square.removeAttribute("style")
  }, 1000);
}

function setColor(square) {
  square.style.backgroundColor = generateRandomColor();
}

const container = document.querySelector(".container");

for (let index = 1; index <= 2000; index++) {
  let square = document.createElement("section");
  square.classList.add("square");

  square.addEventListener("mouseenter", function name() {
    setColor(square)
  })

  square.addEventListener("mouseleave", function () {
    resetColor(square);
  })
  container.appendChild(square);
}

container.addEventListener("mouseenter", (e) => {
  if (e.target.closest("section.square")) {
    setColor(e.target);
  }
})

container.addEventListener("mouseleave", (e) => {
  if (e.target.closest("section.square")) {
    resetColor(e.target);
  }
})

