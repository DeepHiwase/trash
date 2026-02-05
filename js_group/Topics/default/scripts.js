// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");
// console.log(num1 + num2);
// console.log(parseInt(num1) + parseInt(num2));
// console.log(Number(num1) + Number(num2));

const btn = document.getElementById("btn").addEventListener("click", () => {
  document.querySelector("h1").innerText = "You Click Button!";

  const heading = document.createElement("h1");
  const para = document.createElement("p");
  heading.innerText = "Heading";
  console.log(heading);
  para.innerText = "Paragraph";

  document.querySelector("#info").appendChild(heading);
  document.querySelector("#info").appendChild(para);

  document.body.style.backgroundColor = "lightblue";
});

let index = 0;
const images = [
  "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1725028748781-7adb1df9a943?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
];

document.getElementById("img-btn").addEventListener("click", () => {
  const image = document.querySelector("img");
  image.src = images[Math.floor(Math.random() * images.length)];
});

document.getElementById("img-btn").addEventListener("click", () => {
  const image = document.querySelector("img");
  image.src = images[Math.floor(Math.random() * images.length)];
});

document.getElementById("img-btn").addEventListener("mouseover", () => {
  const image = document.querySelector("img");
  image.src = images[Math.floor(Math.random() * images.length)];
});

document.getElementById("para").addEventListener("selectstart", () => {
  const para = document.getElementById("para");
  para.innerText = "Don't copy me 🤬";
});

document.getElementById("para").addEventListener("copy", () => {
  window.Clipboard = "🥺 You still copy";
});
