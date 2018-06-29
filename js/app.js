function loadLanding () {	 
		document.getElementById('user-submit').addEventListener('click',  function() {
			addUser(getUserNames()[0], getUserNames()[1]);
			document.getElementById('sign-in').classList.add('faded');
			document.getElementById('game-app').classList.remove('faded');
			renderTopTen()
			renderCurrentUser('name', 'h3', 'rank-game', true, '250px', 'game-header')
		})
}


// Render current username and info

function renderCurrentUser (targetID, headerLevel, rankID, isLink, width, headerID) {
	var currentUser = getUserNames();
	var firstLast = getUserNames()[0].split(' ');
	var linkStart;
	var linkEnd;
	var targetElement = document.getElementById(targetID);
	var last;

	if (firstLast[1] != undefined) {
		last = firstLast[1];
	} else {
		last = '';
	}
	

	targetElement.innerHTML += `<div class="name-font-container" style="width: ${width};"><${headerLevel} id="${headerID}">${firstLast[0]} "${currentUser[1]}" ${last}</${headerLevel}></div>`

	if (isLink) {
		targetElement.classList.add('hov')
		targetElement.addEventListener('click', function() {
			document.getElementById('game-app').classList.add('faded');
			document.getElementById('profile-page').classList.remove('faded');
			renderCurrentUser('prof-name', 'h2', 'rank-profile', false, '500px', 'profile-header')
			if (!document.getElementById('recent-ten').innerHTML.length) {
				lastTenUser()
			}
			if (document.getElementById('stats-list').innerHTML === '') {
				renderStats()
			}
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



// Render stats

function renderStats () {
	var highScore = getBestUserScore();
	var lowScore = getWorstUserScore();
	var userPosition = getUserPosition();
	var scoringPosition = userList[userPosition].allScores
	var recentScore;
	if (scoringPosition.length > 1) {
		recentScore = scoringPosition[scoringPosition.length - 1]
	}
	else {
		recentScore = ''
	}
	document.getElementById('stats-list').innerHTML += 
		`<li class="uppercase"><strong>Best:</strong> ${highScore}</li>
		 <li class="uppercase"><strong>Worst:</strong> ${lowScore}</li>
		 <li class="uppercase"><strong>Recent:</strong> ${recentScore}</li>`
}



// Initial settings

window.onload = function () {
	loadLanding()
}


// Game start

document.getElementById('start-game').addEventListener('click', function () {
	document.getElementById('start-game').classList.add('faded')
	runSimon()
})


// Back to game from profile 

document.getElementById('back-to-game').addEventListener('click', function () {
	document.getElementById('game-app').classList.remove('faded');
	document.getElementById('profile-page').classList.add('faded');
	document.getElementById('prof-name').innerHTML = '<span id="rank-profile" class="rank"></span>';
})