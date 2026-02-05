// ======================== Arrays ==============================
let arr = new Array();
let arr2 = [];

let arr3 = ["Apple", "Orange", "Plum"];

console.log(arr3);
console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2]);
arr3[2] = "Pear";
console.log(arr3);
arr3[4] = "Lemon";
console.log(arr3);
arr3[3] = "Mango";
console.log(arr3);

console.log(arr3.length);

console.log(arr3[arr3.length - 1]);
console.log(arr3.at(-1));
console.log(arr3.at(-2));
console.log(arr3.at(-8));
console.log(arr3.at(0));
console.log(arr3.at(10));
console.log(arr3.at());
console.log(arr3.at(true));
console.log(arr3.at(false));

// ====================
console.log(arr[-1]);
arr3[-1] = "Jamun";
console.log(arr3);
console.log(arr3);

// ========================
let arr4 = [
  "Apple",
  { name: "John" },
  true,
  function () {
    console.log("hello");
  },
];
console.log(arr4[1].name);
arr4[3]();

// ============================ pop/push/shift/unshift
//  queue -> shift <-[]<- push
// ex: queue of messages on-screen
// stack -> []<- push   []-> pop
// stack + queue => Array in js -> in ds this ops done by deque

let fruits = ["Apple", "Orange", "Pear"];
console.log(fruits.pop());
console.log(fruits);

fruits.push("Pear"); // fruits[fruits.length] = "Pear" // returns new length of arr
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);

console.log(fruits.unshift("Apple"));
console.log(fruits);

fruits.push(...["Peach", "Mango"]); // starts to enter element given from start - left
console.log(fruits);
console.log(fruits.unshift("Banana", "Cherry")); // starts to enter elements given from end - right 💀
console.log(fruits);

// ===================================
let arr5 = fruits;
console.log(arr5 === fruits); // since both now points to same arr address -> copy by reference
console.log(arr5);
console.log(arr5.push("Berry"));
console.log(arr5);
console.log(fruits);

// breaking array behaviour
// let arr6 = [];
// arr6[99999] = 5;
// console.log(arr6);
// arr6.age = 25;
// console.log(arr6);

// ==================== loops - for / for-of
for (let i = 0; i < arr5.length; ++i) {
  console.log(arr5[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

// ================== .length
// .length is not count but maxIndex + 1 in arr in js
let arr7 = [];
arr7[123] = "Apple";
console.log(arr7.length);
// .length is writable
let arr8 = [1, 2, 3, 4, 5];
arr8.length = 2; // trunck -> erased data - irreversable process
console.log(arr8);
arr.length = 5;
console.log(arr[3]); // data lost
// so easiest way to clear arr = arr.length = 0;
arr8.length = 0;
console.log(arr8);

// =======================
// new Array(); // either pass numner which acts as length / or pass elements seperated by comma
let arr9 = new Array("Apple", "Mango", "Banana");
console.log(arr9);
arr9 = new Array(2);
console.log(arr9[0]);
console.log(arr9.length); // so try to use only [] notation syntax for init unless you know what you are doing

// ===================== multi-dimentional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);
console.log(matrix[0][1]);

// ===================== toString()
let arr10 = [1, 2, 3];
console.log(arr10);
console.log(arr10.toString() === String(arr10) && String(arr10) === "1,2,3");

// ====================== binary plus -> since arr don't have Symbol.toPrimitive or valueOf, they implement only toString conversion so [] becomes '' empty string
console.log([] + 1); //"" + 1
console.log([1] + 1); // "1" + 1
console.log([1, 2] + 1); // "1,2" + 1

// =================== don't compare arrays with `==`
// works on array like obj -> two objs are equal only if their reference are equal
// === strict comparision is simpler as it doesn't convert types
console.log([] == []);
console.log([0] == [0]);

console.log(0 == []); // 0 == ''
console.log("0" == []); // '0' == ''

//  so compare arrays => use loops not `==`

// ==================================== Array methods ============================
// ========================== splice
let arr11 = ["I", "go", "home"];
delete arr11[1];
console.log(arr11[1]);
console.log(arr11.length);

arr11 = ["I", "study", "JavaScript"];
arr11.splice(1, 1);
console.log(arr11);
let arr12 = ["I", "study", "JavaScript", "right", "now"];
console.log(arr12.splice(0, 3, "Let's", "dance")); // returns deleted elements in seperate arr and modifies actual arr
console.log(arr12);
arr11.splice(2, 0, "complex", "language");
console.log(arr11);
// splice allow -ve indices - > start from end
let arr13 = [1, 2, 5];
arr13.splice(-1, 0, 3, 4);
console.log(arr13);

// ============================= slice
// similer to string.slice but instead of substring, it makes subarrays - it creates copy

let arr14 = ["t", "e", "s", "t"];
console.log(arr14.slice()); // use to create copy, not to modify original
console.log(arr14.slice(0));
console.log(arr14.slice(1));
console.log(arr14.slice(1, 3)); // not include ending index element
console.log(arr14.slice(-2));
console.log(arr14.slice(-2, -1));
console.log(arr14.slice(-1, -2)); // empty arr, means no swapping if start > end

// =========================== concat
let arr15 = [1, 2];
console.log(arr15.concat([3, 4]));
console.log(arr15.concat([3, 4], [5, 6]));
console.log(arr15.concat([3, 4], 5, 6));
console.log(arr15.concat(3, 4, 5, 6));
console.log(arr15.concat(3, 4, [5, 6]));
console.log(arr15.concat()); // creates copy

let arrayLike = {
  0: "something",
  length: 1,
};
console.log(arr15.concat(arrayLike));
arrayLike = {
  0: "something",
  length: 1,
  [Symbol.isConcatSpreadable]: true,
};
console.log(arr15.concat(arrayLike));

// ========================= forEach
["Bilbo", "Gandalf", "Nazgul"].forEach(console.log);
// o/p-> Bilbo 0 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
//       Gandalf 1 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
//       Nazgul 2 [ 'Bilbo', 'Gandalf', 'Nazgul' ]
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, arr) => {
  console.log(`${item} is at index ${index} in ${arr}`);
  return "xyz"; // result of this function is thrown away / ignored
});

// ========================= includes / indexOf / lastIndexOf
// same as string functions but instead of working on char, it works on item in array
// indexOf uses strict equality === - so for false it looks for false not 0
let arr16 = [1, 0, false];
console.log(arr16.indexOf(0));
console.log(arr16.indexOf(false));
console.log(arr16.indexOf(null));
console.log(arr16.includes(true));
console.log(arr16.includes(false));
console.log(arr16.includes(1));
console.log(arr16.lastIndexOf(false));
console.log(arr16.lastIndexOf(1));
console.log(arr16.lastIndexOf(0));
console.log(arr16.lastIndexOf("a"));
arr16 = ["Apple", "Orange", "Apple"];
console.log(arr16.indexOf("Apple"));
console.log(arr16.lastIndexOf("Apple"));

console.log(NaN == NaN);
console.log(NaN === NaN);
// but includes methods handle NaN correctly
arr16 = [NaN];
console.log(arr16.indexOf(NaN));
console.log(arr16.includes(NaN)); //✅

// ============================== find / findIndex / findLastIndex
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];
let user = users.find((item) => item.id === 1);
console.log(user.name);
users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];
console.log(users.findIndex((item) => item.name === "John"));
console.log(users.findLastIndex((item) => item.name === "John"));

// =========================== filter
let someUsers = users.filter((item) => item.id < 3);
console.log(someUsers);

// ========================== map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths);

// =========================== sort
let arr17 = [1, 2, 15];
arr17.sort();
console.log(arr17); // [ 1, 15, 2 ] -> items are sorted as string by default 💀
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
arr17.sort(compareNumeric);
console.log(arr17); // [ 1, 2, 15 ] ✅

[1, -2, 15, 2, 0, 8].sort(function (a, b) {
  console.log(a + "<>" + b);
  return a - b;
});

console.log([1, 15, 2].sort((a, b) => a - b));
console.log(
  ["Österreich", "Andorra", "Vietnam"].sort((a, b) => (a > b ? 1 : -1)), // ❌
);
console.log(
  ["Österreich", "Andorra", "Vietnam"].sort((a, b) => a.localeCompare(b)), // ✅
);

// ============================== reverse
let arr18 = [1, 2, 3, 4, 5];
console.log(arr18.reverse()); // modify actual and also return
console.log(arr18);

// ============================= split with delimiter, join -> not modify original i/p
let names = "Bilbo, Gandalf, Nazgul";
console.log(names.split());
console.log(names.split().length);
console.log(names.split(""));
console.log(names.split(" "));
console.log(names.split(", "));
console.log(names.split(", ", 2)); // extra arg to ignore extra element, only number of elements you want

console.log("test".split(""));
console.log("test".split("").join()); // if nothing provided then join with ,
console.log("test".split("").join(""));
console.log("test".split("").join(":"));
console.log(["Bilbo", "Gandalf", "Nazgul"].join(";"));

// =============================== reduce / reduceRight
let arr19 = [1, 2, 3, 4, 5];
let result = arr19.reduce((sum, current) => sum + current, 0);
console.log(result);
console.log(arr19.reduce((sum, current) => sum + current)); // same result since, if not pass initial - in reduce it consider first index value as initial
// console.log([].reduce((sum, current) => sum + current)); // error ❌ so always pass initial value
console.log([].reduce((sum, current) => sum + current, 0)); // ✅

console.log(
  [1, 2, 3, 4, 5].reduce((sum, current) => {
    console.log(sum + "<>" + current);
    return sum + current;
  }, 0),
);
console.log([1, 2, 3, 4, 5].reduceRight((sum, current) => sum + current, 0));
console.log(
  [1, 2, 3, 4, 5].reduceRight((sum, current) => {
    console.log(sum + "<>" + current);
    return sum + current;
  }, 0),
);
console.log(
  [1, 2, 3, 4, 5].reduceRight((sum, current) => {
    console.log(sum + "<>" + current);
    return sum + current;
  }),
);

// ====================== Array.isArray
console.log(typeof {});
console.log(typeof []);
console.log(Array.isArray({}));
console.log(Array.isArray([]));

// =============================== thisArgs param in functions that call callbacks like find/filter/map... etc except sort
// arr.find(func, thisArg); // thisArgs becomes this for func
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// let soldiers = users.filter(army.canJoin, army); // hard to understand
let soldiers = users.filter((user) => army.canJoin(user)); // easier to understand
console.log(soldiers.length);
console.log(soldiers[0].age);
console.log(soldiers[1].age);

// =================================== some / every
// console.log([1, 2, 3, 4].some())

// ================================ fill
console.log([].fill());
console.log([].fill(1));
console.log([].fill(1, 2));
console.log([3].fill(1, 0));

// ============================== copyWithin
// ============================== flat / flatMap
let multiDArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(multiDArr);
console.log(multiDArr.flat());
console.log(multiDArr.flat(0)); // depth is max recurr depth
console.log(multiDArr.flat(1));
multiDArr = [1, 2, [3], [4, 5], [[5, 6, 7, [8]]]];
console.log(multiDArr.flat()); // by default 1 level flat
console.log(multiDArr.flat(1));
console.log(multiDArr.flat(2));
console.log(multiDArr.flat(5));
console.log(multiDArr.flat(3));
