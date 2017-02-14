let newGameEl = document.getElementById('js-newGame');
let newGameButton = document.getElementById('js-newGameButton');
let choicePlayer = document.getElementById('js-choicePlayer');
let resultsTable = document.getElementById('js-resultsTable');

let choiceRock = document.getElementById('js-choicePlayerRock');
let choisePaper = document.getElementById('js-choicePlayerPaper');
let choiseScissors = document.getElementById('js-choicePlayerScissors');

newGameButton.addEventListener('click', newGame);
choiceRock.addEventListener('click', function() { playerSet('rock') });
choisePaper.addEventListener('click', function() { playerSet('paper') });
choiseScissors.addEventListener('click', function() { playerSet('scissors') });

let gameState = 'notStarted';  //started // ended
let isTenPoints = false;

let player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

let playerName = document.getElementById('js-playerName'),
	playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult'),
    playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');


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
  	if (player.name) {
    	player.score = computer.score = 0;
    	gameState = 'started';
    	isTenPoints = false;
    	setGameElements();
		playerName.innerHTML = player.name;
    	setGamePoints();
  	}
}

function getComputerPick() {
    let possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random() * 3)];
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

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
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
    }
}

function playerSet(playerPick) {
    let computerPick = getComputerPick(); 
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
    setGamePoints();
    checkEndWinner();
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