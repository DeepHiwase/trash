// =========================== Console ==================================
console.table();
console.table("");
console.table(1);
console.table({});
console.table([]);
console.table([1, 2, 3]);
console.table([{}]);
console.table([{ name: "Deep", age: 22 }]);
console.table([
  { name: "Deep", age: 22 },
  { name: "Deep1", age: 2 },
  { name: "Deep2", age: 92 },
  { name: "Deep3", age: 32 },
]);
console.table([
  { name: "Deep", age: 22 },
  { name: "Deep1" },
  { name: "Deep2", age: 92 },
  { name: "Deep3" },
]);
console.table([
  { name: "Deep", age: 22 },
  { name: "Deep1", address: "Rathi Nagar" },
  { name: "Deep2", age: 92 },
  { name: "Deep3", address: "Sakhre Vasti" },
]);
console.table([
  { name: "Deep", age: 22, done: true },
  { name: "Deep1", address: "Rathi Nagar" },
  { name: "Deep2", age: 92, done: "✅" },
  { name: "Deep3", address: "Sakhre Vasti" },
]); // column order depends on starting from 1st item

// console.log();
