// ============ Strings ===========================

function sum(a, b) {
  return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}`);

console.log("List of guest:\n * Rkkds\n * fkjsfsf\n * ksdjflsjdf\n");

let str1 = "Hello\nWorld!";

let str2 = `Hello
World!`;

console.log(str1);
console.log(str2);
console.log(str1 === str2);

// ================ tagged template feature - extremely useful for sanitazition of input
const name = "Diana";
const age = 26;

function logArgs(strings, ...values) {
  console.log("Strings Array:", strings);
  console.log("Values Array:", values);
  return "Done!";
}

const result = logArgs`User ${name} is ${age} years old.`;

console.log("Results: ", result);

console.log("hello\tworld");

console.log("My\n".length);

let str3 = "Hello";

console.log(str3[0]);
console.log(str3.at(0));
console.log(str3.at(1));
console.log(str3.at(-1));
console.log(str3.at(-5));
console.log(str3[-1]);
console.log(str3[str3.length - 1]);

for (let char of str3) {
  console.log(char);
}

// ================= strings are immutable
let str4 = "Hello";

str4[0] = "h";
console.log(str4);

let str5 = "h" + str4[1];
console.log(str5);

// =======================
console.log("Interface".toLowerCase());
console.log("Interface".toUpperCase());
console.log("Interface"[0].toUpperCase());

// =========================
let str6 = "Widget with id";

console.log(str6.indexOf());
console.log(str6.indexOf(""));
console.log(str6.indexOf("Widget"));
console.log(str6.indexOf("widget"));
console.log(str6.indexOf("id")); // pos 1
console.log(str6.indexOf("id", 2));

let str7 = "As sly as a fox, as strong as an ox";

let target = "as";

let pos = 0;
while (true) {
  let foundPos = str7.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Found at: ${foundPos}`);
  pos = foundPos + 1;
}

pos = str7.length - 1;
while (true) {
  let foundPos = str7.lastIndexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Found at: ${foundPos}`);
  pos = foundPos - 1;
}

console.log(str6.lastIndexOf());
console.log(str6.lastIndexOf(""));
console.log(str6.lastIndexOf("Widget"));
console.log(str6.lastIndexOf("widget"));
console.log(str6.lastIndexOf("id")); // pos 1
console.log(str6.lastIndexOf("id", 2));

// ================= includes
console.log("w" === "W");
console.log("w" === "w");
console.log("Widget with id".includes());
console.log("Widget with id".includes(""));
console.log("Widget with id".includes("bye"));
console.log("Widget with id".includes("Widget"));
console.log("Widget with id".includes("Widget", 7));

// ================ startsWith , endsWith -> check if word startsWith/endWith
console.log("Widget".startsWith("Wid"));
console.log("getWid".startsWith("Wid"));
console.log("Widget".startsWith("Wid", 3));
console.log("Widget".endsWith("get"));
console.log("getWid".endsWith("get"));
console.log("Widget".endsWith("get", 4));

// ================= getting substring - slice / substring / substr
let str8 = "stringify";
// slice return a section of string - not modify original
console.log(str8.slice());
console.log(str8.slice(0));
console.log(str8.slice(1));
console.log(str8.slice(3));
console.log(str8.slice(-1));
console.log(str8.slice(-2));
console.log(str8.slice(-3));
console.log(str8.slice(true));
console.log(str8.slice(false));
console.log(str8.slice(0, 1)); // not inlcude endIndex in ans
console.log(str8.slice(0, 4));
console.log(str8.slice(-4, -1));
console.log(str8.slice(-4, 1));
console.log(str8.slice(-1, -4));

// substring - all same as slice but - it also handle - startIndex > endIndex -> by swapping index values swap(startIndex, endIndex) - and not support -ve values -> turns to 0
console.log(str8.substring(-4, -1));
console.log(str8.substring(-1));
console.log(str8.substring());
console.log(str8.substring(4, 1)); // 4, 1 -> 1, 4 where 4 is not included in ans
console.log(str8.substring(1, 4));
console.log(str8.substring(1, 4) == str8.substring(4, 1));

// substr - deprecated - non-browser env may not support
// console.log(str8.substr())

// ========================== comparison
console.log("abc" == "abc"); // check char by char
console.log("abc" == "acb");

console.log("A" > "Z");
console.log("a" > "Z");

console.log("Österreich" > "Zealand"); // letters with diacritical marks - out of order means >> Z

// ===============================
// Strings in JS are encoded using UTF-16
console.log("Z".codePointAt());
console.log("Z".codePointAt(0));
console.log("aZ".codePointAt(0)); // index pass to get its code
console.log("aZ".codePointAt(-1)); //  ❌ -ve index not supported
console.log("aZ".codePointAt().toString());
console.log("aZ".codePointAt().toString(2));
console.log("z".codePointAt().toString(10));
console.log("z".codePointAt().toString(16));

// ====================================
console.log(String.fromCodePoint());
console.log(String.fromCodePoint(90));
console.log(String.fromCodePoint(0x5a)); // hex value - starts with
console.log(String.fromCodePoint(9));
console.log(String.fromCodePoint(122));
// console.log(String.fromCodePoint(-1)) // ❌`error - not support -ve code as there is no -ve code marking

// ===============================

let str9 = "";

for (let i = 65; i <= 220; ++i) {
  str9 += String.fromCodePoint(i);
}
console.log(str9);

console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97

// ==============================
console.log("z".localeCompare("Z")); // use in custom comparator in sorting
console.log("z".localeCompare("z"));
console.log("Z".localeCompare("z"));
console.log("Österreich".localeCompare("Zealand")); // supports
console.log("Österreich".localeCompare("Zealand")); // supports letters with diacritical marks somparision
console.log("a".localeCompare("á", "en", { sensitivity: "base" })); // supports letters with diacritical marks somparision

// ==============================
console.log(" ".trim());
console.log(" a ".trim());
console.log(" a  - ".trim());
console.log(" a  - ".trimStart());
console.log(" a  - ".trimEnd());

// ==============================
console.log("a".repeat()); // count not given or 0 -> empty string ''
console.log("a".repeat(1));
console.log("a".repeat(2));
console.log("a".repeat(10)); // since count is always +ve -> no -ve

// ===============================
console.log("a a".replace());
console.log("a a".replace(""));
console.log("a a".replace("a", "b")); // find first occ and replace
console.log("a a".replace("a")); // if replace not given - replace with undefined
console.log("a a".replaceAll("a"));
console.log("a a".replaceAll("a", "b"));

// =============================
console.log("a a".split());
console.log("a a".split(""));
console.log("a a".split(" "));
console.log("a a".split(" ", 1));
console.log("a a".split(" ", 0));
console.log("a a".split(" ", 2));

// =============================
console.log("7".padStart(2, "0"));
console.log("22".padStart(2, "1"));
console.log("22".padStart(4, "a"));
console.log("1".padEnd(2, "0"));
console.log("1".padEnd(2, 0));
console.log("1".padEnd(7, true));
console.log("1".padEnd(2, "0"));

// ===========================
console.log("r".concat(""));
console.log("r".concat(" "));
console.log("r".concat(" -"));

// ===========================
