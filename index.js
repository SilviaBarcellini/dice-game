var randomNumber1 = Math.floor(Math.random() * 6) +1; //select a number 1-6
console.log(randomNumber1)

var randomDice1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomDiceSource = "images/" + randomDice1; //images/dice1.png - images/dice6.png

var dice1 = document.querySelectorAll("img")[0]; //select first dice image in order to manipulate DOM 

dice1.setAttribute("src", randomDiceSource); //update dynamically img src attribute 
