const arr = [1, 2, 3, 4, 5];

let initialValue = 10;
const sumWithInitialValue = arr.reduce((accumulator, currentValue) => {
  // console.log(accumulator, currentValue)
  return accumulator + currentValue;
}, initialValue);

console.log(sumWithInitialValue);
