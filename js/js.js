const Person = function (ab, bc) {
  this.name = ab;
  this.year = bc;
};

const hey = new Person("arnold", 1990);

Person.prototype.ageCal = function () {
  return 2045 - this.year;
};

const tryA = new Person("Arnold", 1923);

// console.log(Person.prototype.isPrototypeOf(hey));
// console.log(hey instanceof Person);

// console.log(tryA.ageCal())

// Person.prototype.killshot = "gracias";

// console.log(tryA.hasOwnProperty("year"));

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(this.speed);
// };
// Car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   console.log(this.speed);
// };

// const car1 = new Car("bmw", 120);
// const car2 = new Car("Ford", 100);
// car1.accelerate();
// car1.brake();
// car1.accelerate();

// car2.brake();
// car2.accelerate();

// ?ES6

const acount = {
  owner: "arnold gold",
  mov: [200, 500, 600],

  get latest() {
    return this.owner;
  },
  set latest(mov) {
    this.mov.push(mov);
  },
};

class One {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get fullname() {
    return this.name;
  }
}

const arnold = new One("great", 1980);

class PersonCl {
  constructor(firstName, year) {
    this.name = firstName;
    this.year = year;
  }
}

class studenCl extends PersonCl {
  constructor(firstName, year, course) {
    super(firstName, year);
    this.course = course;
  }
}

