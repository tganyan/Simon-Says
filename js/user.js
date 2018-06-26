'use strict'

var userName = document.getElementById('user-name');
var userNickName = document.getElementById('user-nickname');

var userList = []

function User (name, nickname) {
	this.name = name,
	this.nickname = nickname,
	this.score = 0,
	this.highScore = 'tbd'

	userList.push(this)
}

function addUser (name, nickname) {
	for (var i = 0; i < userList.length; i++) {
		if (userList[i].nickname == userNickName) {
			alert(`${userNickName} is already taken, please choose another.`)
		}
		else {
			var newUser = new User(name, nickname)
			userList.push(newUser)
		}
	}
}

document.getElementById('user-submit').addEventListener('click', addUser(userName, userNickName))



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