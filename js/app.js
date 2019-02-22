// Start guessing game about me

"use-strict";

// Fetch the username
var user = prompt('Hello there! ' + ' What is your name?');
console.log('Username: ', user);

alert('Hello ' + user + '! \n ' + 'Welcome to my guessing game!');
alert('Let us see how well you really know about me!');

//variables for number of questions and correct answers
var numQuestions = 0;
var numCorrectAnswers = 0;

//1st question
var firstAnswer = prompt('My nickname is Danny. Yes or No?');
numQuestions++;
console.log('Answer to first question:', firstAnswer);

if (firstAnswer.toUpperCase() === 'Y' || firstAnswer.toUpperCase() === 'YES') {
  //Increment correct answer counter 
  numCorrectAnswers++;
  alert("Your answer is correct!");
}
else if (firstAnswer.toUpperCase() === 'N' || firstAnswer.toUpperCase() === 'NO') {
  alert("Your answer is incorrect!");
}
else {
  alert("Invalid entry. Answer not accepted.");
}

//2nd question
var secondAnswer = prompt('I am five foot tall. Yes or No?');
numQuestions++;
console.log('Answer to second question:', secondAnswer);

if (secondAnswer.toUpperCase() === 'Y' || secondAnswer.toUpperCase() === 'YES') {
  alert("Your answer is wrong! I am actually six foot tall.");
}
else if (secondAnswer.toUpperCase() === 'N' || secondAnswer.toUpperCase() === 'NO') {
  //Increment correct answer counter  
  numCorrectAnswers++;
  alert("Your answer is correct!");
}
else {
  alert("Invalid entry. Answer not accepted.");
}

//3nd question
var thirdAnswer = prompt('Kill Bill is my all time favorite movie. Yes or No?');
numQuestions++;
console.log('Answer to third question:', thirdAnswer);

if (thirdAnswer.toUpperCase() === 'Y' || thirdAnswer.toUpperCase() === 'YES') {
  //Increment correct answer counter
  numCorrectAnswers++;
  alert("Your answer is correct!");
}
else if (thirdAnswer.toUpperCase() === 'N' || thirdAnswer.toUpperCase() === 'NO') {
  alert("Your answer is wrong!");
}
else {
  alert("Invalid entry. Answer not accepted.");
}

//4th question
var fourthAnswer = prompt('Among recent music artists, my favorite singer is Ariana Grande. Yes or No?');
numQuestions++;
console.log('Answer to fourth question:', fourthAnswer);

if (fourthAnswer.toUpperCase() === 'Y' || fourthAnswer.toUpperCase() === 'YES') {
  alert("Your answer is wrong!");
}
else if (fourthAnswer.toUpperCase() === 'N' || fourthAnswer.toUpperCase() === 'NO') {
  //Increment correct answer counter
  numCorrectAnswers++;
  alert("Your answer is correct! My favorite singer from recent times is Charlie Puth.");
}
else {
  alert("Invalid entry. Answer not accepted.");
}

//5th question
var fifthAnswer = prompt('I have worked on the same technology for twelve years. Yes or No?');
numQuestions++;
console.log('Answer to fifth question:', fifthAnswer);

if (fifthAnswer.toUpperCase() === 'Y' || fifthAnswer.toUpperCase() === 'YES') {
  //Increment correct answer counter
  numCorrectAnswers++;
  alert("Your answer is correct!");
}
else if (fifthAnswer.toUpperCase() === 'N' || fifthAnswer.toUpperCase() === 'NO') {
  alert("Your answer is wrong!");
}
else {
  alert("Invalid entry. Answer not accepted.");
}

//6th question -- favorite number guessing game
var guessNumber = 0;
var favoriteRandomNumber = 0;
numQuestions++;
favoriteRandomNumber = Math.floor(Math.random() * 10) + 1;
console.log('My favorite number is: ', favoriteRandomNumber);

for (i = 4; i >= 1; i--) {
  var guessNumber = prompt('Guess my favorite number between 1 and 10. You have ' + i + ' attempts left to guess correctly.');
  console.log('The guessed number is: ', guessNumber);
  // Validate the guess number to check if it is within the expected limit
  if ((guessNumber > 0) && (guessNumber <= 10)) {
    j = i - 1;
    if (favoriteRandomNumber > guessNumber) {
      alert('Your guess is too low. You have ' + j + ' attempt(s) left. ');
    }
    else if (favoriteRandomNumber < guessNumber) {
      alert('Your guess is too high. You have ' + j + ' attempt(s) left. ');
    }
    else if (favoriteRandomNumber == guessNumber) {
      alert('Yay!!! Your guess is correct!');
      //Increment correct answer counter
      numCorrectAnswers++;
      break;
    }

    if (j == 0) {
      alert('Unfortunately, you have ran out of attempts and your guesses are wrong!');
    }
  }
  else {
    alert("Invalid entry. Answer not accepted.");
  }
}

//7th question - Guess a state lived besides Washington
numQuestions++;

for (k = 6; k > 0; k--) {
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
      else if (m == 3) {
        alert('Your guess is incorrect. You have ' + (k - 1) + ' attempts left to guess correctly.');
      }
      m++;
    }
  }
  else {
    alert("Invalid entry. Answer not accepted.");
  }

  // Exit loop once the correct state has been guessed
  if (correctGuess != 0) {
    break;
  }

}
console.log('Total number of questions: ', numQuestions);
console.log('Total number of correct answers: ', numCorrectAnswers);
alert('You have answered  ' + numCorrectAnswers + ' out of ' + numQuestions + ' questions correctly, ' + user + '!');
alert('That brings us to the end of our little game. Thanks for playing!');