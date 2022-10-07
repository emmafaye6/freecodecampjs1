const colors = ["#FFF5E4", "lightcoral", "rgb(255, 209, 209)", "#FF9494"];
//This sets up the colors that are going to be randomized.

const btn = document.getElementById("btn");
//This targets the button by its id
const color = document.querySelector(".color");
//This targets the color name

btn.addEventListener("click", function () {
  //Listens for a click on the btn element and sets up the function associated with it
  const randomNumber = getRandomNumber();
  //calls for the getRandomNumber function
  document.body.style.backgroundColor = colors[randomNumber];
  //targets the background color in the document + matches it to the randomNumber function
  color.textContent = colors[randomNumber];
  //turns the text in the color class with the random color
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
//this fonction picks a number from the color interval + returns an integer instead of a decimal
