const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//declares a hex constant in which all numbers from 0 to 9 and all string letters from "A" to "F" exist

const btn = document.getElementById("btn");
//declares a btn constant which targets all elements with the id of btn

const color = document.querySelector(".color");
//declares a color constant which targets the first element with the class of .color

btn.addEventListener("click", function () {
  //listens for a click on the btn element then executes the function

  let hexColor = "#";
  /*declares a hexColor value as '#' because every hex needs an hashtag.
    using let because the value needs to be modified*/

  for (let i = 0; i < 6; i++) {
    //this sets up a loop in which i will start at 0 and will increment for 5 times

    hexColor += hex[getRandomNumber()];
    //calls the hexColor variable and adds a value from the getRandomNumber function to it for the 5 loop iterations
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  //calls for the color name to be displayed and for the background color to match the loop iterations
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
  //returns an integer that can be any of the values from the hex array's length
}
