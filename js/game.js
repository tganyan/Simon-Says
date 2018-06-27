'use strict'

var simonColors = ['green', 'red', 'yellow', 'blue']
var simonPicks = []
var userPicks = []


var userControls = [...document.getElementsByClassName('simon-btn')]

for (var i = 0; i < userControls.length; i++) {
	var control = userControls[i]
	control.addEventListener('click', function () {
		userPicks.push(this.dataset.color)
		console.log(userPicks)
	})

}


// function simon () {
// 	var randomIndex = Math.floor(Math.random() * simonColors.length)
// 	var sqrID = simonColors[randomIndex]
// 	document.getElementById(sqrID).classList.add('highlight')
// 	simonPicks.push(simonColors[randomIndex])
// }



function runTheGame() {
	var picksCounter = 4;
	var firstDigit = 3;
	var timeout = firstDigit + 0 + 0 + 0;
	do {
		simonPicks = []
		for (var i = 0; i < picksCounter; i++) {
			var randomIndex = Math.floor(Math.random() * simonColors.length)
			var sqrID = simonColors[randomIndex]
			document.getElementById(sqrID).classList.add('highlight')
			setTimeout(function() {
				document.getElementById(sqrID).classList.remove('highlight')
				simonPicks.push(simonColors[randomIndex])
			}, 800)
		}

		picksCounter++
	}while (picksCounter < 6)
}

// function simon () {
	
// }


// do {
// 		simonPicks.push(simonColors[Math.floor(Math.random() * simonColors.length)])
// 	}
// 	while (userPicks === simonPicks)