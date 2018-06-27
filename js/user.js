'use strict'

var userList = []


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


// User object constructor

function User (name, nickname) {
	this.name = name,
	this.nickname = nickname,
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


// Add new User object and nav to next page

function addUser (name, nickname) {	
	for (var i = 0; i < userList.length; i++) {
		if (userList[i].nickname === nickname) {
			console.log('match')
			break;
			confirm(`${nickname} is already taken, are you this ${nickname}?`)
			if (confirm) {
				new User(name, nickname)
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



// Get most recent score

function mostRecent () {
	var currentUser = getUserNames()[1];
	console.log(currentUser)
}


// Create top ten list

function topTenUsers () {
	var topTenArr = []
	var sortedList = []
	for (var i = 0; i < 10; i++) {
		sortedList.push(userList[i].highScore())		
	}
	sortedList.sort(compareFunction)
	
	for (var j = 0; j < 10; j++) {
		topTenArr.push(sortedList[j])
	}
	return topTenArr
}

function renderTopTen () {
	var topTen = topTenUsers();
	for (var i = 0; i > 5; i++) {
		// document.getElementById('high-scores').innerHTML = `<li>${topTen[i]}</li>`
		console.log(topTen[i])
	}
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