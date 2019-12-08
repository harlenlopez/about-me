'use strict';
var score = 0;

var userName = prompt('Hello, may i please have your name?');
var hello = userName + ' you are invited to play a game to get to know me a little bit better!';
alert(hello);

var myName = prompt(userName + ', is my name harlen');
var q1 = function(){
  if (myName === 'yes') {
    score++;
    alert('great job' + userName + '!');
  } else {
    alert('sorry ' + userName + ', that is incorrect.');
  }
};
q1();

var lowerCaseUsername = myName.toLowerCase();
if (lowerCaseUsername === 'harlen') {
  alert('hello overlord ' + myName);
} else {
  alert('welcome, please enjoy my site.');
}

var q3 = function(){
  var hometown = prompt(userName + ', am I originally from Mexico?');
  if (hometown === 'no') {
    alert('wow' + userName + ', how did you know that?');
  } else {
    alert(' oh, too bad' + userName + '.');
  }
  var activity = prompt(userName + ', is my favorite activity EDH');
  if (activity === 'yes') {
    score++;
    alert('you are on fire, great job!!!');
  } else {
    alert('Come on, i know you know this!');
  }
};
q3();

var q4 = function(){
  var beer = prompt(userName + ', is my favorite adult beverage IPA?');
  if (beer === 'yes') {
    score++;
    alert('wow' + userName + ', how did you know that?');
  } else {
    alert(' oh, too bad' + userName + '.');
  }
};
q4();

var q5 = function(){
  var anime = prompt(userName + ', do i watch Anime?');
  if (anime === 'yes') {
    score++;
    alert('wow' + userName + ', how did you know that?');
  } else {
    alert(' oh, too bad' + userName + '.');
  }
};
q5();

var q6 = function(){
  var guessingGame = prompt(userName + ', please guess a number between 1 and 10.');
  var numbAnswer = 5;
  for (var i = 0; i < 4; i++) {
    if (guessingGame == numbAnswer) {
      score++;
      alert('that is correct');
      break;
    } else if (guessingGame > numbAnswer) {
      guessingGame = prompt('lower');
    } else {
      guessingGame = prompt('higher');
    }
  }
};
q6();

var q7 = function(){
  var multipleChoice = prompt(userName + ', here we get to have fun with multiple answer questions, please select a type of beer.');
  var theRightStuff = ['IPA', 'stout', 'blonde', 'red'];

  for (var i = 0; i < 7; i++) {
    for (var h = 0; h < theRightStuff.length; h++) {
      if (theRightStuff[h].toLowerCase() === multipleChoice.toLowerCase()) {
        alert('great choice');
        i = 7;
        score++;

        break;
      }
    }
    if (i !== 7) {

      theRightStuff = prompt('sorry, please select a better answer');
    }
  }
};
q7();

alert('Thank you' + userName + ' for taking part of this short questionaire, further on you will learn more about me, you got ' + score + ' answers right');
