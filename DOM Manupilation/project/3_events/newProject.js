const body = document.querySelector("body");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

//generate random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";

  //FFFFFF
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID;

startButton.addEventListener("click", function () {
  if (!intervalID) {
    intervalID = setInterval(function () {
      console.log("changing background color");
      body.style.backgroundColor = randomColor();
    }, 1000);
  }
});

stopButton.addEventListener("click", function () {
  clearInterval(intervalID);
  intervalID = null;
});

// body.style.backgroundColor = 'red';
