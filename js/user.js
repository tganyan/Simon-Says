'use strict'

var userList = []

function sum (a,b) {
	return a + b
}

function compareFunction (a,b) {
	return a - b
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
	names.push.apply(names, [userName, userNickName])
	return names
}

function User (name, nickname) {
	this.name = name,
	this.nickname = nickname,
	this.score = 0,
	this.highScore = function () {
		var sortedHigh = this.allScores.sort(compareFunction)
		return sortedHigh[0]
	},
	this.lowScore = function () {
		var sortedLow = this.allScores.sort()
		return sortedLow[0]
	},
	this.allScores = [],

	userList.push(this)
}

function addUser (name, nickname) {	
	for (var i = 0; i < userList.length; i++) {
		if (userList[i].nickname === nickname) {
			console.log('match')
			break;
			confirm(`${nickname} is already taken, are you this ${nickname}?`)
			if (confirm) {
				new User(name, nickname)
				window.location.href = 'index.html'
				break;
			}
			else {
				alert(`${nickname} is already taken, please choose a different nickname.`)
				break;
			}
		}
		else {
			new User(name, nickname)
			window.location.href = 'index.html'
			break;
		}
	}
}

document.getElementById('user-submit').addEventListener('click',  function() {
	addUser(getUserNames()[0], getUserNames()[1])
})


// Fake user accounts

new User('Tyler Nesheim', 'MisterMudfrog')
new User('Chris Fleming', 'BogaFlem')
new User('Tony Garcia', 'MondragonT')
new User('Dave Kensington', 'DAVE_CB')
new User('Chris Eisenbraun', 'YippyTime')
new User('Chad Pinkelman', 'StinkyPinky')
new User('Carl Davis', 'Fatnicity')
new User('Joey McManus', 'Baby Joe')
new User('Trey Smick', 'Slim')
new User('Tyler Anyan', 'MisterMiyagi')