console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/* if (cardTwo === cardFour) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}
if (cardOne === cardTwo) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}
if (cardThree === cardFour) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
} */
var createCards = function() {
var board = document.getElementById('game-board');
board.className = "board";
var cardOne = document.createElement('div');
cardOne.className = "card";
var cardTwo = document.createElement('div');
cardTwo.className = "card";
var cardThree = document.createElement('div');
cardThree.className = "card";
var cardFour = document.createElement('div');
cardFour.className = "card";
board.appendChild(cardOne);
board.appendChild(cardTwo);
board.appendChild(cardThree);
board.appendChild(cardFour);
}
createCards();
