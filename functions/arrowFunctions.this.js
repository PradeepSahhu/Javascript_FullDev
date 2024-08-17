// arrow functions and this keyword
// this keyword  = current context

//here this is current context.
const user = {
  username: "Pradeep sahu",
  price: 999,
  welcomeMessage: function () {
    console.log(`welcome ${this.username}`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.username = "ritik";
// user.welcomeMessage();

// const global = 23;
// console.log(this); // empty object
// in browser global object is : window

// function chai() {
//   let username = "Pradeep sahu";
//   console.log(this.username);
// }

// chai();

// const chai = function () {
//   let username = "Pradeep sahu";
//   console.log(this.username);
// };

// chai();

//arrow functions.
// const chai = () => {
//   let username = "Pradeep sahu";
//   console.log(this);
// };

// chai();

//basic syntax
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

//implicit return (most used in react)
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => num1 + num2;

//returning objects. using implicit return

const addTwo = (num1, num2) => ({
  username: "Pradeep",
});

console.log(addTwo(3, 4));

const myArray = [2, 4, 1, 4, 1, 2];

// myArray.forEach(function(){})

// myArray.forEach(()=>{})

// myArray.forEach(()=>())
