'use strict'

var simonColors = ['green', 'red', 'yellow', 'blue']
var simonPicks = []
var userPicks = []
var userControls = [...document.getElementsByClassName('simon-btn')]
var gameSquares = [...document.getElementsByClassName('game-square')]


// Tying user controls to their corresponding data color and populating userPicks

function userButtons () {
	for (var i = 0; i < userControls.length; i++) {
		var control = userControls[i]
		control.addEventListener('click', function () {
			userPicks.push(this.dataset.color)
		})
	}
	
}


// Award points per successful round, one point for each pick 

function awardPoints () {
	var userPosition = getUserPostion()
	for (var i = 0; i < userPicks.length; i++) {
		if (userPicks[i] == simonPicks[i]) {
			console.log('match')
			console.log(userList[userPosition])
		}else {
			console.log('mismatching')
		}
		if (i = userPicks.length) {
			userList[userPosition].roundScores.push(i)
			console.log(i)
			break;
		}
	}	

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


function renderPulse () {
	var count = 0;
	var limit = 4;
	var randomHighlight = setInterval(function() {
		var id = getRandomID();
		let selectedEl = document.getElementById(id);
		selectedEl.classList.add('highlight')
		simonPicks.push(id)
		count++

		setTimeout(function() {
			selectedEl.classList.remove('highlight')
			if (count === limit) {
				clearInterval(randomHighlight)
			}
		}, 500);
	}, 1000);
	simonPicks = []
	userPicks = []
}



function runSimon () {
	var counter = 4;
	var iterator = 1;
	userButtons();
	renderPulse(counter);
	// for (var i = 0; i < iterator; i++) {
	// 	renderPulse(counter);
	// 	if (userPicks.length === simonPicks.length && simonPicks.length > 0) {
	// 		iterator++
	// 		counter++
	// 		continue;
	// 	}
	// 	else {
	// 		break;
	// 	}
	// }		
}


