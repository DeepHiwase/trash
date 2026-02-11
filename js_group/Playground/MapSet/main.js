// ======================= Map =================================
// Map - collection of keyed data items - like obj but map allows keys of `any type`💎

let mp = new Map();

console.log(mp);

console.log(mp.size);

mp.set("1", "str1");
console.log(mp);
console.log(mp.set(1, "num1")); // set returns updated map
console.log(mp.set(true, "bool1"));

console.log(mp.get(1));
console.log(mp.get("1"));

console.log(mp.size);
console.log(mp);
console.log(mp.has(true));
console.log(mp.has(1));
console.log(mp.has(-1));
console.log(mp.has("1"));
console.log(mp.has(false));
console.log(mp.has());
console.log(mp.has({}));
console.log(mp.delete()); // true if an element in the Map existed and has been removed, or false if the element does not exist.
console.log(mp.delete(1)); // found and delete and return true
console.log(mp.delete(1)); // its already deleted so not found so false
console.log(mp);
console.log(mp.size);
console.log(mp.clear());
console.log(mp.size);

// === obj as key
let john = { name: "John" };
let visitedCountMap = new Map();
visitedCountMap.set(john, 123);
console.log(visitedCountMap.get(john));
console.log(visitedCountMap.get({ name: "John" })); // it put here reference as key of obj
// console.log(visitedCountMap.set()); // when try set nothing -> default - key - undefined & value - undefined so don't do ❌
// console.log(visitedCountMap.set({})) // if not pass - key - {} value - undefined
console.log(visitedCountMap.set({ name: "Pinky" }, 12));
console.log(visitedCountMap.get({ name: "Pinky" })); // still gets undefined - 💎 so when setting obj as key always pass referance as key not obj
