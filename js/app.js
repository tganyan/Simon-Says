function loadLanding () {	 
		document.getElementById('user-submit').addEventListener('click',  function() {
			addUser(getUserNames()[0], getUserNames()[1]);
			document.getElementById('sign-in').classList.add('faded');
			document.getElementById('game-app').classList.remove('faded');
			renderTopTen()
			renderCurrentUser('name', 'h3', 'rank-game')
		})
}


// Render current username

function renderCurrentUser (targetID, headerLevel, rankID) {
	var currentUser = getUserNames()
	var firstLast = getUserNames()[0].split(' ')
	document.getElementById(targetID).innerHTML += `<${headerLevel}>${firstLast[0]} "${currentUser[1]}" ${firstLast[1]}</${headerLevel}>`
	renderCurrentRank(rankID)
}


// Render current user ranking

function renderCurrentRank (targetID) {
	var currentUserRank = getRank()
	document.getElementById(targetID).innerHTML += currentUserRank
}


// Render top ten list

function renderTopTen () {
	var topTen = topTenUsers();
	var topTenSorted = topTen.sort(function(a,b) {
		return b.score - a.score
	});
	for (var i = 0; i < topTen.length; i++) {
		document.getElementById('high-scores').innerHTML += `<li>${topTen[i].nickname}: ${topTen[i].score}</li>`
	}
}

window.onload = function () {
	loadLanding()
}