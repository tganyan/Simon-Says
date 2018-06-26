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