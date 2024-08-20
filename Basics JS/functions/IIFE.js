//Immediately Invoked Function Expressions (IIFE)

// immediately invoke the function after we write the function.

// like we want to establish db connection when our application starts.

// and we dont want pollution from global scope

//IIFE

// (function chai() { //Named IIFE
//   console.log(`DB connected`);
// })();
// chai();

// (function definition)(function call/execution call);
//()();
//Always use semicolon that tells it to stop it tell there.

//To prevent Global scope pollution, global declaration

// In Terms of arrow function
// Its working
// ((name) => {
//   console.log(`DB connected Two ${name}`);
// })(`Pradeep sahu`);

//arrow functions with parameter. (simple IIFE)

((name) => {
  console.log(`DB connected Two ${name}`);
})(`Pradeep sahu`);
