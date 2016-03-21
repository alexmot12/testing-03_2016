//HOMEWORK: riddle

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

//end homework riddle


// function helloWorld(lang) {
// 	if (lang === 'es') {
// 		return 'hola mundo';
// 	} else if (lang === 'en') {
// 		return 'Hello World';
// 	} else if (lang === 'de') {
// 		return 'hella Welt';
// 	} else return 'Привет мир';
// }

// console.log(helloWorld('es'));
// console.log(helloWorld('de'));
// console.log(helloWorld('en'));
// console.log(helloWorld('rt'));
// console.log('---------------------------')
// end task

// function helloWorld2(lang) {
// 	switch (lang) {
// 		case 'es':
// 			return 'hola mundo';
// 		case 'de': 
// 			return 'hella Welt';
// 		case 'en':
// 			return 'Hello World';
// 		default: 
// 			return 'Привет мир';	

// 	}
// }
// console.log(helloWorld2('es'));
// console.log(helloWorld2('de'));
// console.log(helloWorld2('en'));
// console.log(helloWorld2('rt'));
// console.log('---------------------------')
// end task

// function assignGrade(ball) {
// 	if (ball > 90) {
// 		return 'You got: 5';
// 	} else if (ball > 80) {
// 		return 'You got: 4';
// 	} else if (ball > 60) {
// 		return 'You got: 3';
// 	} else if (ball > 40) {
// 		return 'You got: 2';
// 	} else return 'You got: 1';
// }
// console.log(assignGrade(95));
// console.log(assignGrade(82));
// console.log(assignGrade(65));
// console.log(assignGrade(55));
// console.log(assignGrade(39));
// console.log('---------------------------')
// end task

// function assignGrade(score) {
// 	switch (score) {
// 		case (score > 90):
// 			return 'you got: 5'
// 			break;
// 		case (score > 80):
// 			return 'you got: 4';
// 		case (score > 60):
// 			return 'you got: 3';
// 		case (score > 40):
// 			return 'you got: 2';
// 		default:
// 			return 'you got: 1';			
// 	}
// }
// console.log(assignGrade(95));
// console.log(assignGrade(82));
// console.log(assignGrade(65));
// console.log(assignGrade(55));
// console.log(assignGrade(39));
// console.log('---------------------------')
// end task

// Exercises: for loops

// for (var i = 0; i < 5; i++) {
// 	function num() {
// 		return (Math.floor((Math.random() * 10) + 1));
// 	}
// 	var k = num();
// 	if (k % 2 === 0) {
// 		console.log('We get even number: ' + k)
// 	} else console.log('We get not even number: ' + k);
// }
// console.log('---------------------------')
//end task

//MULTIPLICATION TABLE
// for (var i = 0; i <= 10; i++) {
// 	for (var j = 1; j <= 10; j++) {
// 		console.log(i + ' * ' + j + ' = ' + (i * j) + ';');
// 		// console.log('999999');
// 	}
// }
// console.log('---------------------------')
//end task

//FUNCTION
// function calculateAge(dataBirth, currentYear) {
// 	var fv = currentYear - dataBirth,
// 	sv = currentYear - dataBirth - 1;
// 	console.log('Your age is: ' + fv + ' or ' + sv);
// }
// calculateAge(1981, 2016);
//end task

// function calculateAge(dataBirth) {
// 	var date = new Date;
// 	fv = date.getFullYear() - dataBirth,
// 	sv = date.getFullYear() - dataBirth - 1;
// 	console.log('Your age is: ' + fv + ' or ' + sv);
// }
// calculateAge(1981);
//end task

