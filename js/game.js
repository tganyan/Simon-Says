'use strict'

var simonColors = ['green', 'red', 'yellow', 'blue']
var simonPicks = []
var userPicks = []
var userControls = [...document.getElementsByClassName('simon-btn')]
var gameSquares = [...document.getElementsByClassName('game-square')]


// Tying user controls to their corresponding data color and populating userPicks

for (var i = 0; i < userControls.length; i++) {
	var control = userControls[i]
	control.addEventListener('click', function () {
		userPicks.push(this.dataset.color)
		console.log(userPicks)
	})

}


// Helpers


function addClass(element,value){
	if(element.className != value){
		element.classList.add(value)
	}
}

function removal(element, value){
	for(var i=0; i < gameSquares.length; i++) {
		element.classlist.remove(value) 
	}	
}


function getRandom () {
	var randomIndex = Math.floor(Math.random() * simonColors.length)
	return randomIndex
}

function getRandomID () {
	var randomIndex = getRandom()
	var id = simonColors[randomIndex]
	return id
}

function pushSimon (index) {
	simonPicks.push(simonColors[index])
}

// var random = getRandom();  pushSimon(random)



function simon (index, id) {
		setInterval(function() {
			// removal(id[index], 'highlight')
			// addClass(id[index], 'highlight')
			console.log(id[index])
		}, 800)
		// console.log(gameSquares[index])
}


var randomIndex = getRandom()
var randomID = simonColors[randomIndex]



simon(randomIndex, randomID)
// function runTheGame () {

// }


// function simon (index, id) {
// 	var element = document.getElementById(id).classList.add('highlight')
// 	setInterval(function() {
// 		document.getElementById(id).classList.remove('highlight')
// 		simonPicks.push(simonColors[index])
// 		console.log(`remove ${id}`)
// 	}, 800)


// 	var j = -1;

// 	setInterval(function () {
// 			removeall();
// 			j++;
// 			toggleClass(divs[j],"red");	
// 		},2000);
// }



// function runTheGame() {
// 	var picksCounter = 4;
// 	var firstDigit = 3;
// 	var timeout = firstDigit + 0 + 0 + 0;
// 	do {		
// 		for (var i = 0; i < picksCounter; i++) {
// 			var randomIndex = Math.floor(Math.random() * simonColors.length)
// 			var sqrID = simonColors[randomIndex]
// 			simon(randomIndex, sqrID)
// 		}
// 		simonPicks = []
// 		picksCounter++
// 	}while (picksCounter < 5)
// }







