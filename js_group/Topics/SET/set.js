// let set = new Set();

// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(5);

// let set2 = new Set([10, 20, 30, 40, 50]);

// console.log("Set 1: ", set);
// console.log("Set 2: ", set2);

// let set3 = new Set([100, 200, 300, 100]);

// console.log("Set 3: ", set3);

// console.log(`Set has value ${2}: ${set.has(2) ? "Yes" : "No"} `);

// console.log(set.difference(set2));
// console.log(set.union(set2));
// console.log(set.intersection(set2));

// function customIntersection(set1, set2) {
//   let ans = new Set();

//   for (let i of set1) {
//     if (set2.has(i)) {
//       ans.add(i);
//     }
//   }

//   return ans;
// }

// function customUnion(set1, set2) {
//   for (let i of set1) {
//     set2.add(i);
//   }

//   return set2;
// }

// console.log(
//   `Intersection of set ${[1, 2, 3, 4]} & set ${[2, 3, 6, 7]} is: `,
//   customIntersection(new Set([1, 2, 3, 4]), new Set([2, 3, 6, 7]))
// );

// console.log(
//   `Union of set ${[1, 2, 3, 4]} & set ${[2, 3, 6, 7]} is: `,
//   customUnion(new Set([1, 2, 3, 4]), new Set([2, 3, 6, 7]))
// );

// ------------------------ SET --------------------------
let set = new Set();

console.log(set);
console.log(set.size);
console.log(set.clear());
console.log(set.entries());
console.log(set.keys());
console.log(set.values());

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

console.log(set.add(john));
console.log(set.add(john));
console.log(set.add(pete));
console.log(set.add(mary));
console.log(set.add(pete));

for (let { name } of set) {
  console.log(name);
}

console.log(set.keys());
console.log(set.values());
console.log(set.entries());

console.log(set.has(john));
console.log(set.has({ name: "Tom" }));
console.log(set.add(1));
console.log(set.delete(1));
console.log(set.delete(1));
console.log(set);
// console.log(set[2]); // ❌
console.log(set.size);
console.log(set.clear());
console.log(set);

// -----
// let ansArr = [];
// [1, 2, 3, 2, 4, 5, 1].forEach((item, index, arr) => {
//   if (arr.indexOf(item) !== index) {
//     // console.log(false);
//     ansArr.push(item);
//     console.log(ansArr);
//   }
//   // else {
//   //   console.log(true);
//   // }
// });

// let arr = [0, 1, 2, , , 5, 6];
// console.log(arr);
// arr.find((item, index, arr) => {
//   console.log("Visited index", index, "with value", item);
//   return false;
// });
// arr.find((item, index, arr) => {
//   if (index === 0) {
//     console.log("Deleting arr[5] with value", arr[5]);
//     delete arr[5];
//   }
//   console.log("Visited index", index, "with value", item);
//   return false;
// });

// ------

let set3 = new Set(["oranges", "apples", "bananas"]);
for (let value of set3) {
  console.log(value);
}
set3.forEach((value, valueAgain, set) => {
  console.log(`${value}, ${valueAgain}, ${set}`);
});

// ------
// let set1 = new Set();
// let set2 = new Set();
// console.log(typeof set1);
// console.log(set1 == set2);
// console.log(set1 === set2);
// ------

// ------
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  Array.from(new Set(arr)).forEach((item) => {
    console.log(item);
  });
}

unique(values);

let arr2 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

console.log(aclean(arr2));

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
// let keys = [...map.keys()];

// Error: keys.push is not a function
keys.push("more");
console.log(keys);
