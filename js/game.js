'use strict'

var simonColors = ['green', 'red', 'yellow', 'blue']
var simonPicks = []
var userPicks = []
var userControls = [...document.getElementsByClassName('simon-btn')]


// Tying user controls to their corresponding data color and populating userPicks


var control;
for (var i = 0; i < userControls.length; i++) {
	control = userControls[i]
	control.addEventListener('click', function () {
		userPicks.push(this.dataset.color)
		// compare userPicks to simonPicks
		// if userPicks.length === simonPicks.length
		// 		than either start next round or 
		//		show score and feedback
		if (userPicks.length === simonPicks.length) {
			roundEnd()
		}
	})
}


function roundEnd() {
	var userPosition = getUserPosition()

	for (var i = 0; i < userPicks.length; i++) {
		if (userPicks[i] === simonPicks[i]) {
			awardPoints(userPicks.length)
			document.getElementById('next-round-container').classList.remove('faded');
			document.getElementById('next-round').addEventListener('click', runSimon);
		} else if (userPicks[i] != simonPicks[i]) {
			var allRoundScores = userList[userPosition].roundScores
			var gameScore = operator(allRoundScores, sum)
			if (gameScore === undefined) {
				gameScore = '0';
			}
			userList[userPosition].allScores.push(gameScore);
			document.getElementById('restart-game-container').classList.remove('faded')
			document.getElementById('next-round-container').classList.add('faded')
			document.getElementById('game-score').innerHTML = `game over. your score: ${gameScore}`
			document.getElementById('restart-game').addEventListener('click', runSimon)
		}
	}	
}


// Award points per successful round, one point for each pick 

function awardPoints (roundPoints) {
	var userPosition = getUserPosition()
	userList[userPosition].roundScores.push(roundPoints)
	console.log(userList[userPosition].roundScores)	
}	

// Get random number and then random id for simonColors array

function getRandom () {
	var randomIndex = Math.floor(Math.random() * simonColors.length)
	return randomIndex
}

function getRandomID () {
	var randomIndex = getRandom()
	var id = simonColors[randomIndex]
	return id
}



// Add and remove highlight class at timed interval

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



// run Simon function











function runSimon () {
	var counter = 4;
	var iterator = 1;
	
	document.getElementById('next-round-container').classList.add('faded')
	document.getElementById('restart-game-container').classList.add('faded')
	renderPulse(counter);		
}


