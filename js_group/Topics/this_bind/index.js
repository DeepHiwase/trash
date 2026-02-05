let dog = {
  sound: "woof",
  talk: function () {
    console.log(this.sound);
  }
}

console.log(dog.sound);
dog.talk();

let talkFunction = dog.talk;/*function () {
    console.log(this.sound); // - here this is referencing global obj -> in browser - window / in nodejs/runtimes - global -> whole common - globalThis
  } */
talkFunction();

let boundFunction1 = dog.talk.bind(dog); /*function () {
    console.log(dog.sound);
  } */
let boundFunction2 = talkFunction.bind(dog); /*function () {
    console.log(dog.sound);
  } */
 boundFunction1();
boundFunction2();

// let btn = document.getElementById("myNiceBtn");
// btn.addEventListener('click', dog.talk);
// btn.addEventListener('click', function () {
//   console.log(this.sound); -> window.sound - undefined
// });
// btn.addEventListener('click', dog.talk.bind(dog));



console.log(globalThis);