const newGameEl = document.getElementById('js-newGame'),
<<<<<<< HEAD
	newGameButton = document.getElementById('js-newGameButton'),
	choicePlayer = document.getElementById('js-choicePlayer'),
	resultsTable = document.getElementById('js-resultsTable');
=======
    newGameButton = document.getElementById('js-newGameButton'),
    choicePlayer = document.getElementById('js-choicePlayer'),
    resultsTable = document.getElementById('js-resultsTable');
>>>>>>> 118540c47ebbc8863a06532c09f93983d7694a56

document.getElementById('js-choicePlayerRock').addEventListener('click', function() { playerSet('rock') });
document.getElementById('js-choicePlayerPaper').addEventListener('click', function() { playerSet('paper') });
document.getElementById('js-choicePlayerScissors').addEventListener('click', function() { playerSet('scissors') });

newGameButton.addEventListener('click', newGame);

let gameState = 'notStarted';  //started // ended
let isTenPoints = false;

const player = {
<<<<<<< HEAD
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};

const playerName = document.getElementById('js-playerName'),
	playerPickElem = document.getElementById('js-playerPick'),
	playerResultElem = document.getElementById('js-playerResult'),
	playerPointsElem = document.getElementById('js-playerPoints'),    
	
	computerPickElem = document.getElementById('js-computerPick'),
	computerResultElem = document.getElementById('js-computerResult'),
	computerPointsElem = document.getElementById('js-computerPoints');
=======
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

const playerName = document.getElementById('js-playerName'),
	playerPickElem = document.getElementById('js-playerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    playerPointsElem = document.getElementById('js-playerPoints'),    
    
    computerPickElem = document.getElementById('js-computerPick'),
    computerResultElem = document.getElementById('js-computerResult'),
    computerPointsElem = document.getElementById('js-computerPoints');
>>>>>>> 118540c47ebbc8863a06532c09f93983d7694a56


function setGameElements() {
	switch(gameState) {
		case 'started':
			newGameEl.style.display = 'none';
			choicePlayer.style.display = 'block';
			resultsTable.style.display = 'block';
			break;
		case 'ended':
			newGameButton.innerText = 'Jeszcze raz';
		case 'notStarted':
		default:
			newGameEl.style.display = 'block';
			choicePlayer.style.display = 'none';
			resultsTable.style.display = 'none';
	}
}

function newGame() {
	player.name = prompt('Podaj swoje imię', 'Imię gracza');
<<<<<<< HEAD
	if (player.name) {
		player.score = computer.score = 0;
		playerName.innerHTML = player.name;

		gameState = 'started';
		isTenPoints = false;

		setGameElements();
		setGamePoints();
	} else {
		newGame();
	}
}

function getComputerPick() {
	const possiblePicks = ['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random() * 3)];
=======
  	if (player.name) {
    	player.score = computer.score = 0;
		playerName.innerHTML = player.name;

    	gameState = 'started';
    	isTenPoints = false;

    	setGameElements();
    	setGamePoints();
  	} else {
        newGame();
    }
}

function getComputerPick() {
    const possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random() * 3)];
>>>>>>> 118540c47ebbc8863a06532c09f93983d7694a56
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

<<<<<<< HEAD
let winnerIs = 'player';

	if (playerPick == computerPick) {
		winnerIs = 'noone'; // remis
	} else if (
		(computerPick == 'rock' &&  playerPick == 'scissors') ||
		(computerPick == 'scissors' &&  playerPick == 'paper') ||
		(computerPick == 'paper' &&  playerPick == 'rock') ) {
		
		winnerIs = 'computer';
	}

	if (winnerIs == 'player') {
		playerResultElem.innerHTML = "Wygrana!";
		player.score = player.score + 1;
	} else if (winnerIs == 'computer') {
		computerResultElem.innerHTML = "Wygrana!";
		computer.score = computer.score + 1;
	}
}

function playerSet(playerPick) {
	let computerPick = getComputerPick(); 
	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;
	checkRoundWinner(playerPick, computerPick);
	setGamePoints();
	setTimeout(checkEndWinner, 0);
=======
  let winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock') ) {
        
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score = player.score + 1;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score = computer.score + 1;
    }
}

function playerSet(playerPick) {
    let computerPick = getComputerPick(); 
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
    setGamePoints();
    setTimeout(checkEndWinner, 0);
>>>>>>> 118540c47ebbc8863a06532c09f93983d7694a56
}

function setGamePoints() {
	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;
}

function checkEndWinner() {
	if (player.score === 10) {
		alert(player.name + ' you win! Congratuliations.');
		isTenPoints = true;
	} else if (computer.score === 10) {
		alert('Computer win!');
		isTenPoints = true;
	}

	if (isTenPoints) {
		gameState = 'ended';
		setGameElements();
	}
}

setGameElements();