var randomNumber1 = Math.floor(Math.random() * 6) +1; //select a number 1-6
console.log(randomNumber1)

var randomDice1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomDiceSource = "images/" + randomDice1; //images/dice1.png - images/dice6.png

var dice1 = document.querySelectorAll("img")[0]; //select first dice image in order to manipulate DOM 
dice1.setAttribute("src", randomDiceSource); //update dynamically img src attribute 

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2)

var randomDice2 = "dice" + randomNumber2 + ".png";
var randomDiceSource2 = "images/" + randomDice2; 

var dice2 = document.querySelectorAll("img")[1]; //select second dice image in order to manipulate DOM 
dice2.setAttribute("src", randomDiceSource2); //update dynamically img src attribute 

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🎉"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉"
} else {
    document.querySelector("h1").innerHTML = "You have a draw! 😐 Try again"
}