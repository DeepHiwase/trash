// -------------------------CONSTRUCTOR ----------------------------------
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("John");
console.log(user);
console.log(user.name);
console.log(user.isAdmin);
let user2 = new User("Alice");
let user3 = new User("Ann");

// ----------
// function car() {
//   this.wheel = 4;
// }
// let car1 = new car();
// console.log(car1); // ❌ this works but as a agreement, use Capital letter for constructor name

// ------
//  // only use once, can't reuse this constructor func, only to create & do complex logic in object
// let user4 = new function() {
//   this.name = "John",
//   this.isAdmin = false;
//   // ---
// }
// -------

// ------
function User1() {
  return new.target;
}
console.log(User1());
console.log(new User1());

function User2(name) {
  if (!new.target) {
    return new User(name);
  }

  this.name = name;
}
let john = User2("John");
console.log(john.name);

// ------
function BigUser() {
  this.name = "John";

  return { name: "Godzilla" };
}

console.log(new BigUser().name);

function SmallUser() {
  this.name = "John";
  return;
}
console.log(new SmallUser().name);

// let user5 = new User; 💀 works but not good style, formatter adds () if not added.
let user4 = new User();

//------
function User4(name) {
  this.name = name;

  this.sayHi = function () {
    return "My name is: " + this.name;
  };
}

let john2 = new User4("John2");
console.log(john2);
console.log(john2.name);
console.log(john2.sayHi());

// -------
let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

console.log(a == b);

// ---------
// // // Calculator
// function Calculator() {
//   this.read = function () {
//     this.num1 = parseInt(prompt("Enter a number: ", 0));
//     this.num2 = parseInt(prompt("Enter again a number: ", 0));
//   };
//   this.sum = function () {
//     return this.num1 + this.num2;
//   };
//   this.mul = function () {
//     return this.num1 * this.num2;
//   };
// }

// function Calculator() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum= " + calculator.sum());
// alert("Mul= " + calculator.mul());

// --------
// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function () {
//     this.value += +prompt("Ho much to add?: ", 0);
//   };
// }

// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// alert(accumulator.value);
