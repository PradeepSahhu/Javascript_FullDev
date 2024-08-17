//scopes, let var and const

// let a = 10; // all are global scope

// const b = 20; // all are global scope

// var c = 30; // all are global scope

// console.log(a);
// console.log(b);
// console.log(c);

var c = 300;
let a = 300;
if (true) {
  // block/local scope
  let a = 10; // local scope

  const b = 20; // local scope

  c = 30; //global scope

  //   console.log("Inner : ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

//windows and node scope are different.

//nested scope

function one() {
  const username = "Pradeep";

  function two() {
    const website = "Youtube.com";

    console.log(username); // can acces global access of username
  }
  //   console.log(website); // can't access localscope website
  two();
}

// one();

if (true) {
  const username = "Pradeep";

  if (username) {
    const website = " Youtube.com";

    //console.log(username + website);
  }

  //   console.log(website);
}

// console.log(username);

//************************ Interesting **************** */

console.log(addone(5));

function addone(num) {
  // hoisting... here function is a global scope ( can access it earlier)
  return num + 1;
}

// console.log(addTwo(5)); // can't execute it from here
const addTwo = function (num) {
  // here addTwo is a variable storing the reference of the addTwo function.
  // can't access it earlier.
  return num + 2;
};

console.log(addTwo(2));
