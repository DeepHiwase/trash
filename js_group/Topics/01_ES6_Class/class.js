// ES6+ syntax to create instances with class
class Car {
  speed = 0;

  constructor(name, manufacturer, yearOfManufacture) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
  }

  accelerate() {
    this.speed += 25;
  }
}

const car1 = new Car("Hector", "MG", 2023);

console.log(car1);

class User {
  constructor(name) {
    this._name = name;
  }

  get username() {
    return this._name.toUpperCase();
  }

  set username(newUsername) {
    if (newUsername.length < 4) {
      console.log("Username is short, should be greater than 4")
    } else {
      this._name = newUsername;
    }
  }
  
  static getLoggedInUser() {
    return this;
  }
}

let user1 = new User("Dip");
// console.log()

let loggedInUser = User.getLoggedInUser();