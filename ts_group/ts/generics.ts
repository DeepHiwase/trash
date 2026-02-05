// -----------------------------GENERICS---------------------------
interface Animal {
  name: string;
  makeSound(): void;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

interface Fish extends Animal {
  finColor: string;
  spawn(): void;
}

function printDetails<T extends Animal>(animal: T) {
  console.log(`Name: ${animal.name}`);
  animal.makeSound();

  if ("breed" in animal) {
    console.log(`Dog: Breed - ${animal.breed}`);
  } else if ("finColor" in animal) {
    console.log(`Fish: Fin Color - ${animal.finColor}`);
  }
}

const labrador: Dog = {
  name: "Max",
  breed: "Labrador",
  bark: () => console.log("Woof!"),
  makeSound: () => console.log("Barking..."),
};

const goldFish: Fish = {
  name: "Nemo",
  finColor: "orange",
  spawn: () => console.log("More nemos incoming."),
  makeSound: () => console.log("Glub glub..."),
};

printDetails<Dog>(labrador);
printDetails<Fish>(goldFish);