function callFunc() {
  setTimeout(function () {
    console.log("three");
  }, 0);
}

console.log("one");

callFunc();

console.log("two");
