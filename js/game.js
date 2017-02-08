let newGameButton = document.getElementById('js-newGameButton');

newGameButton.addEventListener('click', newGame);

let choiceRock = document.getElementById('js-choicePlayerRock');
let choisePaper = document.getElementById('js-choicePlayerPaper');
let choiseScissors = document.getElementById('js-choicePlayerScissors');

choiceRock.addEventListener('click', function() { playerSet('rock') });
choisePaper.addEventListener('click', function() { playerSet('paper') });
choiseScissors.addEventListener('click', function() { playerSet('scissors') });
