// ------------------------------- FUNCTIONS ------------------------------------------
const function1 = () => { };

console.log(function1)
console.log(function1())
console.log((function1)())

// -----------------
function outerFunction() {


  return function innerFunction() {
    console.log("Hello Function!")
  }
}

// -------------
function add(x, y) {
  return x + y;
}

const addition = add;
console.log(addition(1, 2))

// -----------------------


// ------------------------ CALLBACKS -------------------------
// 1. Syncronous
// 2. Asyncronous


// setTimeout(function () {
//   console.log("After 1 second passed");
// }, 1000);






// ------------------------- HIGHER ORDER FUNCTIONS -----------------------------
// ex:- addEventListener


function greetMe(greatingMaker, firstName, lastName, lang) {

  return greatingMaker();
}

greetMe(() => console.log())


// ------------------------- CLOSURE ---------------------------------------------
//  like data binding when call
function addMe(x) {
  return (y) => x + y;
}

const add5 = addMe(2);
console.log(add5(2));
console.log(add5(10));


function greetPeople(firstName, lastName) {


  return (lang = "en", message) => {
    if (!message) {
      if (lang === 'en') console.log(`Hello, ${firstName} ${lastName}`);
      else if (lang === 'sp') console.log(`Hola, ${firstName} ${lastName}`);
      else if (lang === 'hindi') console.log(`Namaste, ${firstName} ${lastName}`);
    } else {
      return console.log(`${message}, ${firstName} ${lastName}`)
    }
  }
}

const greatWay = greetPeople("John", "Doe");

greatWay("en", "hi")
greatWay("en")
greatWay("sp")
greatWay("hindi")

greetPeople("Deep", "Hiwase")("sp");


function add(x) {
  return function (y = 0) {
    return function (z = 0) {
      return x + y + z;
    }
  }
}
console.log(add(1)(2)(3));
// console.log(add(1)(2));
console.log(add(1)(2)());
// console.log(add(1));
console.log(add(1)()());

function printMe(personDetails) {
  return function () {
    return personDetails();
  }
}

function displayName() {
  console.log("display name is called");
}

printMe()

// ------------------------ BUILT-IN HOFs -------------------
// filter, reduce, map
// map
let arr = ["1", "2", "3"].map(function (num) {
  return +num;
})
console.log({ arr });


// filter
let arr2 = [1, 2, 3].filter(function (item) {
  // return item % 2 === 0 && item
  return item % 2 === 0
})

console.log({ arr2 });

// reduce
let sum1 = [1, 2, 3, 4, 5].reduce((prev, sum) => prev + sum);
let sum2 = [1, 2, 3, 4, 5].reduce((init, sum) => init + sum, 0);
let sum3 = [1, 2, 3, 4, 5].reduce((init, sum, index, arr) => init + arr[index], 0);
console.log({ sum1, sum2, sum3 })