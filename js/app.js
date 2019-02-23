// Start guessing game about me

'use-strict';

// Fetch the username
var user = prompt('Hello there! ' + ' What is your name?');
console.log('Username: ', user);

alert('Hello ' + user + '! \n ' + 'Welcome to my guessing game!');
alert('Let us see how well you really know about me!');

//variables for number of questions and correct answers
var numQuestions = 0;
var numCorrectAnswers = 0;
var question, correctAnswer1, correctAnswer2;
var result = false;

//New function added to handle question and answer check
function aboutMeFunction(question, correctAnswer1, correctAnswer2) {

  var userAnswer = prompt(question);

  console.log('Question:', question);
  console.log('Correct Answers:', correctAnswer1, ' or ', correctAnswer2);
  console.log('User Answer:', userAnswer);

  if (userAnswer.toUpperCase() === correctAnswer1 || userAnswer.toUpperCase() === correctAnswer2) {
    //Increment correct answer counter
    alert('Your answer is correct!');
    return true;
  }
  else {
    alert('Your answer is incorrect!');
    return false;
  }
}

// Question 1
question = 'My nickname is Danny. Yes or No?';
correctAnswer1 = 'Y';
correctAnswer2 = 'YES';
result = aboutMeFunction(question, correctAnswer1, correctAnswer2, numQuestions, numCorrectAnswers);

numQuestions++;
if (result === true) {
  numCorrectAnswers++;
}

// Question 2
question = 'I am five foot tall. Yes or No?';
correctAnswer1 = 'N';
correctAnswer2 = 'NO';
result = aboutMeFunction(question, correctAnswer1, correctAnswer2, numQuestions, numCorrectAnswers);

numQuestions++;
if (result === true) {
  numCorrectAnswers++;
}

// Question 3
question = 'Kill Bill is my all time favorite movie. Yes or No?';
correctAnswer1 = 'Y';
correctAnswer2 = 'YES';
result = aboutMeFunction(question, correctAnswer1, correctAnswer2, numQuestions, numCorrectAnswers);

numQuestions++;
if (result === true) {
  numCorrectAnswers++;
}

// Question 4
question = 'Among recent music artists, my favorite singer is Ariana Grande. Yes or No?';
correctAnswer1 = 'N';
correctAnswer2 = 'NO';
result = aboutMeFunction(question, correctAnswer1, correctAnswer2, numQuestions, numCorrectAnswers);

numQuestions++;
if (result === true) {
  numCorrectAnswers++;
}

// Question 5
question = 'I have worked on the same technology for twelve years. Yes or No?';
correctAnswer1 = 'Y';
correctAnswer2 = 'YES';
result = aboutMeFunction(question, correctAnswer1, correctAnswer2, numQuestions, numCorrectAnswers);

numQuestions++;
if (result === true) {
  numCorrectAnswers++;
}




//6th question -- favorite number guessing game
var guessNumber = 0;
var favoriteRandomNumber = 0;
numQuestions++;
favoriteRandomNumber = Math.floor(Math.random() * 10) + 1;
console.log('My favorite number is: ', favoriteRandomNumber);

for (var i = 4; i >= 1; i--) {
  guessNumber = prompt('Guess my favorite number between 1 and 10. You have ' + i + ' attempts left to guess correctly.');
  console.log('The guessed number is: ', guessNumber);
  // Validate the guess number to check if it is within the expected limit
  if ((guessNumber > 0) && (guessNumber <= 10)) {
    var j = i - 1;
    if (favoriteRandomNumber > guessNumber) {
      alert('Your guess is too low. You have ' + j + ' attempt(s) left. ');
    }
    else if (favoriteRandomNumber < guessNumber) {
      alert('Your guess is too high. You have ' + j + ' attempt(s) left. ');
    }
    else if (favoriteRandomNumber === guessNumber) {
      alert('Yay!!! Your guess is correct!');
      //Increment correct answer counter
      numCorrectAnswers++;
      break;
    }

    if (j === 0) {
      alert('Unfortunately, you have ran out of attempts and your guesses are wrong!');
    }
  }
  else {
    alert('Invalid entry. Answer not accepted.');
  }
}

//7th question - Guess a state lived besides Washington
numQuestions++;

for (var k = 6; k > 0; k--) {
  var guessState = prompt('Guess a state where I lived besides Washington. Enter the full name of the state. You have ' + k + ' attempts left to guess correctly.');
  console.log('The guessed state is: ', guessState);
  var livedStatesList = ['TEXAS', 'FLORIDA', 'NEW JERSEY', 'NEW YORK'];
  console.log('The states I have lived are: ', livedStatesList);
  var correctGuess = 0;
  var m = 0;

  // Check if state entry is valid
  if (isNaN(guessState) || (guessState)) {
    // if valid entry, loop through list of lived states
    while (m < livedStatesList.length) {
      // Check if guess state and lived state are same
      if ((guessState.toUpperCase().trim()) === livedStatesList[m]) {
        alert('Yay!!! Your guess is correct!');
        //Increment correct answer counter
        numCorrectAnswers++;
        correctGuess++;
        break;
      }
      else if (m === 3) {
        alert('Your guess is incorrect. You have ' + (k - 1) + ' attempts left to guess correctly.');
      }
      m++;
    }
  }
  else {
    alert('Invalid entry. Answer not accepted.');
  }

  // Exit loop once the correct state has been guessed
  if (correctGuess !== 0) {
    break;
  }

}

console.log('Total number of questions: ', numQuestions);
console.log('Total number of correct answers: ', numCorrectAnswers);
alert('You have answered  ' + numCorrectAnswers + ' out of ' + numQuestions + ' questions correctly, ' + user + '!');
alert('That brings us to the end of our little game. Thanks for playing!');
