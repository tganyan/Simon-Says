'use strict'

var userList = []


// User object constructor

function User (name, nickname) {
	this.name = name,
	this.nickname = nickname,
	this.roundScores = [],
	this.allScores = [],
	this.highScore = function () {
		var sortedHigh = this.allScores.sort(compareFunction)
		return sortedHigh[0]
	},
	this.lowScore = function () {
		var sortedLow = this.allScores.sort()
		return sortedLow[0]
	},

	userList.push(this)
}


// Helper functions 

function sum (a,b) {
	return a + b
}

function compareFunction (a,b) {
	return b - a
}

function operator (arr, operator) {
	var result = arr[0]
	for (var i = 0; i < arr.length; i++) {
		if (arr[i + 1]) {
			result = operator(result, arr[i + 1])
		}
	}
	return result
}


// Get current user and store in localstorage (may be unnecessary, mark for cleanup)

function getUserNames() {
	var names = []
	var userName = document.getElementById('user-name').value;
	var userNickName = document.getElementById('user-nickname').value;
	var userNameStorage = localStorage.setItem("userName", userName)
	var userNickNameStorage = localStorage.setItem("userNickName", userNickName)
	var getName = localStorage.getItem("userName")
	var getNickName = localStorage.getItem("userNickName")
	names.push.apply(names, [getName, getNickName])
	return names
}


// Get index position of current user in userList array

function getUserPosition (manualName) {
	var currentUser = getUserNames()[1];
	var userPosition = userList.findIndex(userList => userList.nickname === currentUser)
	return userPosition
}


// Add new User object and nav to next page

function addUser (name, nickname) {	
	for (var i = 0; i < userList.length; i++) {
		if (userList[i].nickname === nickname) {
			confirm(`${nickname} is already taken, are you this ${nickname}?`)
			break;
			if (confirm) {
				currentUser = userList[getUserPosition()]
				console.log('not cancelled')
				break;
			}
			else {
				alert(`${nickname} is already taken, please choose a different nickname.`)
				break;
			}
		}
		else {
			new User(name, nickname)
			break;
		}
	}
}



// Get current user ranking

function getRank () {
	var sortedList = [];
	var currentUser = getUserNames()[1];
	var index = 0;

	for (var i = 0; i < userList.length; i++) {
		sortedList.push.apply(sortedList, [userList[i].highScore(), userList[i].nickname])		
	}

	index = (Math.floor(sortedList.indexOf(currentUser) / 2))
	
	return index
}






// Create top ten list

function topTenUsers () {
	var topTenArr = []
	var sortedList = []
	for (var i = 0; i < 10; i++) {
		sortedList.push({score: userList[i].highScore(), nickname: userList[i].nickname})		
	}
	sortedList.sort(compareFunction)
	// console.log(sortedList[3].score)
	
	for (var j = 0; j < 10; j++) {
		topTenArr.push(sortedList[j])
	}
	return topTenArr
}


// Render stats

// last ten scores from current user
function lastTenUser () {
	var userPosition = getUserPosition()
	var userSessionPoints = userList[userPosition].allScores
	if (userSessionPoints.length > 0) {
		for (var i = 0; i < userSessionPoints.length; i++) {
			document.getElementById('recent-ten').innerHTML += `<li>${userSessionPoints[i]}</li>`
			console.log('true')
		}
	} else {
		document.getElementById('recent-ten').innerHTML = `<h4 class="uppercase">play some rounds!</h4>`
		console.log('false')
	}	
}

// High score
function getBestUserScore () {
	var userPosition = getUserPosition()
	var returnValue;

	if (userList[userPosition].highScore() != undefined) {
		returnValue = userList[userPosition].highScore()
	}
	else {
		returnValue = ''
	}

	return returnValue
}

// Low score
function getWorstUserScore () {
	var userPosition = getUserPosition()
	var returnValue;

	if (userList[userPosition].lowScore() != undefined) {
		returnValue = userList[userPosition].lowScore()
	}
	else {
		returnValue = ''
	}

	return returnValue
}

// Get most recent score
function mostRecent () {
	var currentUser = getUserNames()[1];
	var lastScore;

	for (var i = 0; i < userList.length; i++) {
		if (userList[i].nickname === currentUser) {
			// lastScore = userList[i].allScores[allScores.length - 1]; 
			// console.log(userList[i].allScores)
			break;
		}
	}
	// console.log(lastScore)
}

// Fake user accounts

new User('Tyler Nesheim', 'MisterMudfrog').allScores = [100,280,330,43,58]
new User('Chris Fleming', 'BogaFlem').allScores = [500,250,430,300,58]
new User('Tony Garcia', 'MondragonT').allScores = [58,76,330,500,20]
new User('Dave Kensington', 'DAVE_CB').allScores = [58,76,330,400,20]
new User('Chris Eisenbraun', 'YippyTime').allScores = [58,76,330,400,20]
new User('Chad Pinkelman', 'StinkyPinky').allScores = [58,76,330,400,20]
new User('Carl Davis', 'Fatnicity').allScores = [58,76,330,600,20]
new User('Joey McManus', 'Baby Joe').allScores = [58,76,330,750,20]
new User('Trey Smick', 'Slim').allScores = [58,76,330,400,20]
new User('Tyler Anyan', 'MisterMiyagi').allScores = [58,76,330,600,20]
new User('Odd Man', 'Out').allScores = [58,76,22,14,33]