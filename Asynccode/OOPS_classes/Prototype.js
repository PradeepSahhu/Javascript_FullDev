// let myName = "pradeepsahu     ";

// console.log(myName.truelength);

let myHeros = ["Thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spider power is ${this.spiderman}`);
  },
};

Object.prototype.pradeep = function () {
  console.log(`Pradeep is here in all object`);
};
// heroPower.pradeep();

Array.prototype.helloPradeep = function () {
  console.log(`Pradeep says hello and good morning`);
};

myHeros.helloPradeep();
// heroPower.helloPradeep();

//inheritance.

const User = {
  name: "chai",
  email: "chai@google.com",
};

const teacher = {
  makeVideo: true,
};

const teachingAssitant = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: teachingAssitant,
};

teacher.__proto__ = User;
