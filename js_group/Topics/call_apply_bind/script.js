// call
// apply
// bind

function printFullName() {
  console.log(`${this.firstName} ${this.lastName}`);
}

class Person {
  firstName = "Deep"
  lastName = "Hiwase"
  printFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  printAge(age) {
    return `${this.firstName} have age ${age}`
  }

  addMarks(a, b) {
    return `${this.firstName} ${this.lastName} ${a} ${b}`;
  }
}

// const person = {
//   firstName: "Deep",
//   lastName: "Hiwase"
// }

const person = new Person();
const person2 = {
  firstName: "Deep",
  lastName: ""
}

printFullName.call(person)
// printFullName.bind(person)
// printFullName()

// function borrowing
console.log(person.printFullName.call(person2));

// 2nd para -> as pass args
console.log(person.printAge.call(person2, 29))
console.log(person.printAge.call(person2, 29, "sdjs"));
console.log(person.printAge.call(person2, [32]));


// bind

console.log(person.addMarks(10, 20));
console.log(person.addMarks.bind(person2, 10, 20)); // bind returns function
const newPerson = person.addMarks.bind(person2, 10);// helps fixing first args 
console.log(newPerson(23));// putting dynamic second param
console.log(newPerson(11));
console.log(newPerson(30));
console.log(newPerson(10));

const anotherFunction = person.addMarks.bind(person2, 20);
console.log(anotherFunction(22));
