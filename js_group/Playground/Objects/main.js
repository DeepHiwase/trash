// ================= Objects ===========================
let user = new Object();
let user2 = {};
let user3 = {
  name: "John",
  age: 30,
};

console.log(user3.name);
console.log(user3.ahe);
console.log(user3.age);
console.log(user3);
user3.isAdmin = true;
console.log(user3);
delete user3.age;
console.log(user3);

let user4 = {
  name: "John",
  age: 30,
  "likes birds": true,
};
console.log(user4);
console.log(user4["likes birds"]);

let key = "likes birds";
console.log(user4[key]);

delete user4[`likes birds`];
console.log(user4);

// key = prompt("What do you want to know about the user?", "name");
// alert(user4[key]);
// alert(user.key); // ❌

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
//   [fruit]: 5,
// };
// let bag = {};
// bag[fruit] = 5;
// console.log(bag[fruit]);
// console.log(bag.apple);
// bag = {
//   [fruit + "Computers"]: 5,
// };

let obj = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(obj.for + obj.let + obj.return);

obj = {
  0: "test",
};

console.log(obj["0"]); // ✅
console.log(obj[0]); // ✅ so numbers in map/set/obj are strings but looks number and can be access with both syntax - number/string

obj = {};
obj.__proto__ = 5;
console.log(obj.__proto__); // not work as intended // can't store primitive directly

let user5 = {};
console.log(user.noSuchProperty === undefined);

// ======================= in operator
let user6 = { name: "John", age: 30 };
console.log("age" in user6);
console.log("blabla" in user6);
let key2 = "age";
console.log(key2 in user6);

let obj2 = {
  test: undefined,
};
console.log(obj.test);
console.log("test" in obj2);

// ====================== for in loop
let user7 = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user7) {
  console.log(key);
  console.log(user7[key]);
}

// ==================== keys - integers are sorted , other type like string are ordered in creation order
let codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};
for (let code in codes) {
  console.log(code);
}

let user9 = {
  name: "John",
  surname: "Smith",
};
user9.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user9) {
  console.log(prop); // name, surname, age
}

// so to want germany first in codes -> add "+" to key property to make it non-integer property
codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "USA",
};

for (let code in codes) {
  console.log(+code); // 49, 41, 44, 1 // here + to convert string to integer
}

// =================== keys() / values() / entries()
let user10 = {
  name: "John",
  age: 30,
};
// Object.* -> returns Array not only iteratable like map.entries()/.keys()/.values()
console.log(Object.keys(user10));
console.log(Object.values(user10));
console.log(Object.entries(user10));

for (let key of Object.keys(user10)) {
  console.log(key);
}
for (let value of Object.values(user10)) {
  console.log(value);
}
for (let entry of Object.entries(user10)) {
  console.log(entry);
  console.log(entry[0]);
  console.log(entry[1]);
}

// keys() / values() / entries() and for-in loop ignores Symbol as key in {}

// Objects lack map filter -> so use
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // return array -> map -> 2d arr -> double the prices entry[1] -> convert 2d arr of entries to object again - fromEntries
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2]),
);
console.log(doublePrices);
console.log(doublePrices.meat);
