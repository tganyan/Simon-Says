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

function getRandom () {
	var randomIndex = Math.floor(Math.random() * simonColors.length)
	return randomIndex
}

function getRandomID () {
	var randomIndex = getRandom()
	var id = simonColors[randomIndex]
	return id
}

function getElement () {
	var random = getRandomID()
	var el = document.getElementById(random)
	return el
}


// function toggleHighlight(element){
	
// 	if(element.classList.contains('highlight')){
// 		element.classList.remove('highlight')
// 	} else {
// 		element.classList.add('highlight')
// 	}
// }

function pushSimon (index) {
	simonPicks.push(simonColors[index])
}


function pulse () {
	var element = getElement();
	element.classList.add('highlight')
	setTimeout(function () {
		element.classList.remove('highlight')
	}, 300)

	// for (var i = 0; i < counter; i++) {
	// 	// element = getElement()
	// 	// toggleHighlight(element)
	// 	intervalis()
	// 	clearInterval(intervalis)
	// }	
}

function renderPulse () {
	var i = 0;
	var pulser = setInterval(function () {
		pulse()
		i++
		if (i < 5) {
			clearInterval(pulser)
		}
	}, 600)
}


function runSimon () {
	for (var i = 0; i < 5; i++) {
		renderPulse()
	}
}

// var random = getRandom();  pushSimon(random)











// function simon (index, id) {
// 		setInterval(function() {
// 			// removal(id[index], 'highlight')
// 			// addClass(id[index], 'highlight')
// 			console.log(id[index])
// 		}, 800)
// 		// console.log(gameSquares[index])
// }


// var randomIndex = getRandom()
// var randomID = simonColors[randomIndex]



// simon(randomIndex, randomID)
// // function runTheGame () {

// // }


// // function simon (index, id) {
// // 	var element = document.getElementById(id).classList.add('highlight')
// // 	setInterval(function() {
// // 		document.getElementById(id).classList.remove('highlight')
// // 		simonPicks.push(simonColors[index])
// // 		console.log(`remove ${id}`)
// // 	}, 800)


// // 	var j = -1;

// // 	setInterval(function () {
// // 			removeall();
// // 			j++;
// // 			toggleClass(divs[j],"red");	
// // 		},2000);
// // }



// // function runTheGame() {
// // 	var picksCounter = 4;
// // 	var firstDigit = 3;
// // 	var timeout = firstDigit + 0 + 0 + 0;
// // 	do {		
// // 		for (var i = 0; i < picksCounter; i++) {
// // 			var randomIndex = Math.floor(Math.random() * simonColors.length)
// // 			var sqrID = simonColors[randomIndex]
// // 			simon(randomIndex, sqrID)
// // 		}
// // 		simonPicks = []
// // 		picksCounter++
// // 	}while (picksCounter < 5)
// // }







