// console.log("JS file is connected to HTML! Woo!")

/*var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';*/

/*if (cardTwo === cardFour) {
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
} 
***This was my code before checking the Assigment Solutions Page. I didn't fully 
understand the loop, and the code below worked, but it was repetitive.***

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
createCards();*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');
function createCards() {
	for (var i=0; i<4; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
	}
}
createCards();

function isMatch(cards) {
	if (cards[0] === cards[1]) {
	alert('You found a match!');
    } else {
	alert('Sorry, try again.');
    
    }
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="King.png">';
	} else {
		this.innerHTML = '<img src="Queen.png">';
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
/*I needed a lot of help from the Assignment Solutions to get through the last
part of this project.*/
