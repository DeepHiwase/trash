// ------------------- EVENT LISTENERS ----------------------------------
// function handleClick(e) {
//   alert('You Click Me!!!!')
//   console.log(e)
// }

// const btn = document.querySelector("button");
// // btn.onclick(handleClick()) // ❌
// btn.onclick = (e) => handleClick(e); // ✅

// function changeColor() {
//   const r = Ma
// }

// document.addEventListener('mouseenter', function (event) {
//   console.log("Mouse is moving....");
//   console.log(event)
// })

// document.querySelector("input").addEventListener("keypress", function (e) {
//   console.log(e)
// })

// const startBtn = document.getElementById('start');
// const stopBtn = document.getElementById('stop');

// function moveMoveFun() {
//   console.log("Mouse Move")
// }

// startBtn.addEventListener('click', (e) => {
//   // document.onmousemove = moveMoveFun;
//   document.addEventListener('mousemove', moveMoveFun);
// })

// stopBtn.addEventListener('click', (e) => {
//   // document.onmousemove = null;
//   document.removeEventListener('mousemove', moveMoveFun);
// })

// addEventListener can have multiple events at same time by add multiple function on same event
// but simple .onclick = eventListener function will override previous event handler on that node

// document.addEventListener('mousemove', (e) => {
//   const circle = document.getElementById('circle');
//   console.log(e.clientX, e.clientY);
//   console.log(e)
//   circle.style.left = `${e.clientX - 20}px`; // 44 -20  = 24px
//   circle.style.top = `${e.clientY - 20}px`;
// })


// const incrementBtn = document.getElementById('increment');
// const decrementBtn = document.getElementById('decrement');
// const resetBtn = document.getElementById('reset');
// const countPara = document.getElementById('count');
// // const count = +countPara.innerText;

// incrementBtn.addEventListener('click', (e) => {
//   const count = +countPara.innerText;
//   countPara.innerText = count + 1;
//   console.log(count + 1)
// })

// decrementBtn.addEventListener('click', (e) => {
//   const count = Number(countPara.innerText);
//   countPara.innerText = count - 1 <= 0 ? "00" : count - 1;
//   console.log(count - 1)
// })

// resetBtn.addEventListener('click', (e) => {
//   countPara.innerText = `00`;
// })

// ------------------------------------------------------

// let ans = document.getElementById("inputNumber");

// const rollBtn = document.getElementById('rollBtn');
// // console.log(rollBtn)
// const tryAgainBtn = document.getElementById("try-again");
// let resultpPara = document.getElementById("result");
// let inputBox = document.getElementById("inputNumber");
// tryAgainBtn.addEventListener('click', () => {
//   inputBox.value = '';
//   rollBtn.removeAttribute('hidden')
//   tryAgainBtn.setAttribute("hidden", true);
// })

// rollBtn.addEventListener('click', () => {
//   const randomNum = Math.floor(Math.random() * 6) + 1;
//   console.log(`User: ${Number(inputBox.value)} :: Computer: ${randomNum}`)
//   if (Number(inputBox.value) == randomNum) {
//     console.log("Winner");
//     resultpPara.innerText = "Winner"
//     rollBtn.setAttribute('hidden', true)
//   } else {
//     console.log("Loose")
//     resultpPara.innerText = "Loose"
//     rollBtn.setAttribute('hidden', true)
//     tryAgainBtn.removeAttribute("hidden");
//   }
// })

// document.addEventListener('keypress', (e) => {
//   if (e.key === "Tab") {
//     inputBox.focus()  
//   }
// })


const cells = Array.from(document.getElementsByTagName("td"));
console.log(cells)
for (const cell of cells) {
  cell.addEventListener('mouseenter', (e) => {
    let r = `${Math.floor(Math.random() * 256)}`;
    let b = `${Math.floor(Math.random() * 256)}`;
    let g = `${Math.floor(Math.random() * 256)}`;
    e.currentTarget.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    setTimeout(() => {
      e.currentTarget.style.backgroundColor = `black`;
    }, 100)
  })
}