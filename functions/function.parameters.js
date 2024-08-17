// functions with memory management.

//function definition
function sayMyName() {
  console.log("P");
  console.log("R");
  console.log("A");
  console.log("D");
  console.log("E");
  console.log("E");
  console.log("P");
}

// sayMyName(); //calling reference of the function
// sayMyName; // only the reference of the function
// sayMyName(); // reference of the function
// sayMyName(); // reference of the function

function addTwoNumber(number1, number2) {
  // parameters of the function.
  //   console.log(number1 + number2);
  //   return number1 + number2;

  //   let result = number1 + number2;
  //   return result;

  return number1 + number2;
}

// addTwoNumber(); //NaN (Not a Number)
// addTwoNumber(5, null); // arguments of the function.
// const result = addTwoNumber(5, 2);

// console.log("result value : " + result);

function logInUserMessage(username = "Pradeep Sahu") {
  //giving it as default value
  //   if (!username) {
  //     //"" & undefined is treated as false
  //     console.log("Please!!! enter the username");
  //     return;
  //   }
  return `${username} just loggedin `;
}

// const message = logInUserMessage("Pradeep Sahu");
// console.log(message);

console.log(logInUserMessage()); // undefined
// console.log(logInUserMessage("")); // undefined
console.log(logInUserMessage("Ghajini")); // undefined

// const funcName = function () {
//   console.log("hello worl");
// };
