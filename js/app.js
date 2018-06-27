function loadLanding () {	 
		document.getElementById('user-submit').addEventListener('click',  function() {
			addUser(getUserNames()[0], getUserNames()[1]);
			document.getElementById('sign-in').classList.add('faded');
			document.getElementById('game-app').classList.remove('faded');
			renderTopTen()
		})
}




window.onload = function () {
	loadLanding()
}