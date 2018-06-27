function loadLanding () {	 
		document.getElementById('user-submit').addEventListener('click',  function() {
			addUser(getUserNames()[0], getUserNames()[1]);
			document.getElementById('sign-in').classList.add('faded');
			document.getElementById('game-app').classList.remove('faded');
			renderTopTen()
			renderCurrentUser('name', 'h3')
		})
}


// Render current username

function renderCurrentUser (targetID, headerLevel) {
	var currentUser = getUserNames()
	var firstLast = getUserNames()[0].split(' ')
	document.getElementById(targetID).innerHTML += `<${headerLevel}>${firstLast[0]} "${currentUser[1]}" ${firstLast[1]}</${headerLevel}>`
	renderCurrentRank()
}


// Render current user ranking

function renderCurrentRank () {
	var currentUserRank = getRank()
	document.getElementById('rank').innerHTML += currentUserRank
}


// Render top ten list

function renderTopTen () {
	var topTen = topTenUsers();
	var topTenSorted = topTen.sort(function(a,b) {
		return b.score - a.score
	});
	for (var i = 0; i < topTen.length; i++) {
		document.getElementById('high-scores').innerHTML += `<li>${topTen[i].nickname}: ${topTen[i].score}</li>`
		console.log(topTenSorted)
	}
}

window.onload = function () {
	loadLanding()
}