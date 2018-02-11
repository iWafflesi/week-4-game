$(document).ready(function () {

	// Variables
	var computersRandomNumber = Math.floor(Math.random() * 80) + 35;
	var wins = 0;
	var losses = 0;
	var playerGuess = 0;
	var buttonOne = Math.floor(Math.random() * 20) + 1;
	var buttonTwo = Math.floor(Math.random() * 20) + 1;
	var buttonThree = Math.floor(Math.random() * 20) + 1;
	var buttonFour = Math.floor(Math.random() * 20) + 1;

	// Display computers random number
	$("#randomNumber").html(computersRandomNumber);

	// Image onclick activation
	// First image 
	$("#img1").on("click", function () {
		playerGuess += buttonOne;
		$("#currentGuess").html(playerGuess);
		results();
	});
	// Second image
	$("#img2").on("click", function () {
		playerGuess += buttonTwo;
		$("#currentGuess").html(playerGuess);
		results();
	});
	// Third image
	$("#img3").on("click", function () {
		playerGuess += buttonThree;
		$("#currentGuess").html(playerGuess);
		results();
	});
	// Fourth image
	$("#img4").on("click", function () {
		playerGuess += buttonFour;
		$("#currentGuess").html(playerGuess);
		results();
	});

	// Results
	function results() {
		if (playerGuess === computersRandomNumber) {
			wins++;
			$("#currentWins").html(wins);
			reset();
		} else if (playerGuess >= computersRandomNumber) {
			losses++;
			$("#currentLosses").html(losses);
			reset();
		}
	}
	// Reset Game
	function reset() {
		computersRandomNumber = Math.floor(Math.random() * 80) + 35;
		$("#randomNumber").html(computersRandomNumber);
		buttonOne = Math.floor(Math.random() * 20) + 1;
		buttonTwo = Math.floor(Math.random() * 20) + 1;
		buttonThree = Math.floor(Math.random() * 20) + 1;
		buttonFour = Math.floor(Math.random() * 20) + 1;
		playerGuess = 0;
		$("#currentGuess").html(playerGuess)
	}

});



