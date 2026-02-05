// ---------------------- MAP ---------------------------------- //
let map = new Map();

console.log(typeof map);
console.log(map);
console.log(map.size);
console.log(map.clear());
console.log(map);
console.log(map.size);
console.log(map.entries());
console.log(map.keys());
console.log(map.values());

console.log(map.get());
console.log(map.get(undefined));

console.log(map.set("2"));
console.log(map.set("1", "str1"));
console.log(map.set(1, "num1"));
console.log(map.set(true, "bool1"));

console.log(map.set());

console.log(map);
console.log(map.size);
console.log(map.entries());
console.log(map.keys());
console.log(map.values());

console.log(map.get("1"));
console.log(map.get("3"));
console.log(map.get(1));
console.log(map.get(true));
console.log(map.get(false));
console.log(map.get(undefined));

console.log(map.set({}, true));
console.log(map.get({}));
console.log(map.set({ 1: "str1" }, true));
console.log(map.get({ 1: "str1" }));
let obj = { 1: "str1" };
console.log(map.set(obj, true));
console.log(map.get(obj));
console.log(map.set("obj1", {}));
console.log(map.get("obj1"));
console.log(map.set("obj1", { key1: "1" }));
console.log(map.get("obj1"));
console.log(map.set("obj1", { key1: "2" }));
console.log(map.get("obj1"));

console.log(map.set([], "arr1"));
console.log(map.get([]));
console.log(map.set([1, 2], "arr2"));
console.log(map.get([1, 2]));
console.log(map.set("arr1", [1, 2]));
console.log(map.get("arr1"));
console.log(map.set("arr1", [1, "a"]));
console.log(map.get("arr1"));

console.log(map.delete("arr1"));
console.log(map.delete("arr1"));
console.log(map);
console.log(map.clear());
console.log(map);
// Duplicates allowed in map
console.log(map.set("dupkey", "ItDuplicate"));
console.log(map.set("dupkey", "ItDuplicate"));
console.log(map.size);
console.log(map.set("#", "1"));
console.log(map.set("#", "2"));
console.log(map.get("#"));

console.log(map.set("1", "str1").set(1, "num1").set(true, "bool1"));

let john = { name: "John" };
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john));

let john1 = { name: "John1" };
let ben1 = { name: "Ben" };
let visitsCountObj = {};
visitsCountObj[john1] = 234;
visitsCountObj[ben1] = 123;
console.log(visitsCountObj);
console.log(visitsCountObj["[object Object]"]);

// -----
// ❌ works but don't do -> map[key]
// console.log([], {})
// console.log((map["key"] = 1));
// console.log(map);
// console.log(
//   map.get("1"),
//   map["1"],
//   map.get(true),
//   map[true],
//   map.get(1),
//   map[1]
// );
// -----

// ----
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(typeof NaN);
console.log(typeof NaN === typeof NaN);
// ----
console.log(0 === 0);
console.log(-0 == 0);
console.log(-0 === 0);
console.log(typeof 0);
console.log(typeof -0);
console.log(typeof -0 === typeof 0);
// -----

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
console.log(recipeMap);
console.log(recipeMap.keys());
console.log(recipeMap.values());
console.log(recipeMap.entries());
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}
for (let amount of recipeMap.values()) {
  console.log(amount);
}
for (let entry of recipeMap.entries()) {
  console.log(entry);
}
for (let entry of recipeMap) {
  console.log(entry);
}
recipeMap.forEach((value, key, map) => {
  // console.log(map)
  console.log(`${key}: ${value}, ${map}`);
});

let obj2 = {
  name: "John",
  age: 30,
};
let mapFromObj = new Map(Object.entries(obj2));
console.log(mapFromObj);
console.log(mapFromObj.get("name"));

let objFromMap = Object.fromEntries(recipeMap.entries());
console.log(objFromMap);
console.log(objFromMap.cucumber);
let shortHandObjFromMap = Object.fromEntries(recipeMap);
console.log(shortHandObjFromMap);
let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);
console.log(prices);
console.log(prices.banana);

// ----
// let map1 = new Map();
// let map2 = new Map();
// console.log(map1 == map2);
// console.log(map1 === map2);
// -----

console.log(map.has());
console.log(map.has("1"));
