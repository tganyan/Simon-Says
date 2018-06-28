function loadLanding () {	 
		document.getElementById('user-submit').addEventListener('click',  function() {
			addUser(getUserNames()[0], getUserNames()[1]);
			document.getElementById('sign-in').classList.add('faded');
			document.getElementById('sign-in').classList.add('shrink');
			document.getElementById('game-app').classList.remove('faded');
			renderTopTen()
			renderCurrentUser('name', 'h3', 'rank-game', true)
		})
}


// Render current username

function renderCurrentUser (targetID, headerLevel, rankID, isLink) {
	var currentUser = getUserNames()
	var firstLast = getUserNames()[0].split(' ')
	var linkStart;
	var linkEnd;
	var targetElement = document.getElementById(targetID);

	targetElement.innerHTML += `<div class="name-font-container"><${headerLevel}>${firstLast[0]} "${currentUser[1]}" ${firstLast[1]}</${headerLevel}></div>`

	if (isLink) {
		targetElement.classList.add('hov')
		targetElement.addEventListener('click', function() {
			document.getElementById('game-app').classList.add('faded');
			document.getElementById('game-app').classList.add('shrink');
			document.getElementById('profile-page').classList.remove('faded');
		})
	}
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