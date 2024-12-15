// object literal

const user = {
  username: "pradeepsahu",
  loginCount: 8,
  signedIn: true,

  gerUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username : ${this.username}`);
    console.log(this);
  },
};

// base unit - object literal.b [ just like object in other languages is base unit its object literal here]

// console.log(user.gerUserDetails());

//constructor function - new (object literal) - multiple objects. [ new context] constructor functions.

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.gotUserInfo = function () {
    console.log(this.username);
  };

  return this; // default return this.
}

//creating a new context. [using new]
const userOne = new User("Pradeep", 12, true);

const userTwo = new User("Ritik", 1, false);

// console.log(userOne.gotUserInfo());
console.log(userTwo);
