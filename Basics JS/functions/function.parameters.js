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

// console.log(logInUserMessage()); // undefined
// console.log(logInUserMessage("")); // undefined
// console.log(logInUserMessage("Ghajini")); // undefined

// const funcName = function () {
//   console.log("hello worl");
// };

//Dynamic arguements in the function parameters.

function calculateCartPrice(val1, val2, ...num1) {
  //... rest operator and ... spread operator
  return num1; //returns an array
}

// console.log(calculateCartPrice(2, 4, 3, 8, 1, 2, 1, 2, 1, 1, 1));

const user = {
  username: "Pradeep sahu",
  prices: 199,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user);
// handleObject({
//   username: "Pradeep",
//   price: 2100,
// });

const myNewArray = [200, 400, 100, 500];

function handleArray(getArray) {
  return getArray[1];
}

// console.log(handleArray(myNewArray));
console.log(handleArray([1, 2]));
