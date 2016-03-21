var word = ['Е', 'Л', 'К', 'А'],
	wordGuess = ['_', '_', '_', '_'],
	tryLetters = []; //массив уже введенных букв
var reward = 0, //вознаграждение	
  	hangman = 0; // счетчик для палача
function guessLetter(letter) {
 	var checkLevel1 = false, // для уменьшения балов палача при угадывании буквы
 		checkLevel2 = false; // для увеличение балов палача при неугадывании буквы

 	letter = letter.toUpperCase(); // приводим к верхнему регистру
 	
  	for (var k = 0; k < tryLetters.length; k++)	{ //проверка на уже введеной ранее буквы
 		if (letter === tryLetters[k]) {
 			console.log('You are already inputed this letter');
 			checkLevel2 = true;
 			break;
 		}
 	}

 	tryLetters.push(letter);// записываем все введеные буквы в массив

 	for (var i = 0; i < word.length; i++){
	 	if (letter === word[i]) {
	 		if (letter === wordGuess[i]) {
	 			// console.log('This letter is alredy exist');
	 			break;
	 		}

	 		wordGuess[i] = letter; // присваиваем букву массиву с угаданными буквами
	 		amountLetters--; // уменьшаем кол-во неугаданных букв
	 		reward = (Math.floor((Math.random() * 41) + 10)); // устанавливаем вознагрждение
	 			 		
	 		checkLevel1  = true;
		 		
	 		console.log('Guess the word:' + '\'' + wordGuess.join('') + '\'');
	 		console.log('Congratulation! You guessed the letter');
	 		console.log('there are ' + amountLetters + ' more letters to guess' );
	 	} 
	}
	
	if (checkLevel1 && (hangman > 0)) { // уменьшаем бал палачу за отгаданную букву
		hangman--;
	}
	if (!checkLevel1 && !checkLevel2) { // начисляем бал палачу
		hangman++; 
		console.log('Sorry...There is no the letter (\''+ letter + '\' ) in the word. try once more');
	}
	
	console.log('Палач: ' + hangman);
}	 

var j = 1; //для бесконечного цикла
var amountLetters = word.length; //количество неугаданных букв
console.log('Guess the word:' + '\'' + wordGuess.join('') + '\''); // выводим массив с нугад. буквами
while (j) {
	var letter = prompt('Введите букву', '');
	guessLetter(letter);
	if (!amountLetters) { // проверка на полностью раскрытие букв
	 		console.log('Congratulation! You guessed the WORD.');
	 		console.log('Your reward is: ' + reward + '$'); 
	 		break;
	 }

	if (hangman >= 6) {  // проверка на достижение критического уровня ошибок
		console.log('Unfortunately you lost the game. Try once more');
		break;
	} 	
}
