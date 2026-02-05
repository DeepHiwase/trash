const firstPara = document.querySelector(".text");

console.log(firstPara)
console.log(firstPara.parentElement)
console.log(firstPara.parentNode)
console.log(firstPara.nextElementSibling)
console.log(firstPara.previousElementSibling)
console.log(firstPara.previousSibling)
console.log(firstPara.nextSibling)

console.log(firstPara.closest('.container')); //↖️
console.log(firstPara.closest("section")); //↖️ // starts from itself then check one by one to upper
console.log(firstPara.closest("a")); //↖️ // if not get then return 'null'