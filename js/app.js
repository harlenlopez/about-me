'use strict';
var score = 0;

var userName = prompt('Hello, may i please have your name?');
var hello = userName + ' you are invited to play a game to get to know me a little bit better!';
alert(hello);

console.log('javascript is UP');

console.log('user stated their name was ' + userName);

// if (window.location.pathname.endswitch('quiz.html'));{
//  } else {
//      alert ( 'hello , + userName +  'welcome to my site');
//  }

var myName = prompt(userName + ', is my name harlen');
if (myName === 'yes') {
  score++;
  alert('great job' + userName + '!');
} else {
  alert('sorry ' + userName + ', that is incorrect.');
}

var lowerCaseUsername = myName.toLowerCase();
if (lowerCaseUsername === 'harlen') {
  alert('hello overlord ' + myName);
} else {
  alert('welcome, please enjoy my site.');
}

var hometown = prompt(userName + ', am I originally from Mexico?');
if (hometown === 'no'

) {
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

var beer = prompt(userName + ', is my favorite adult beverage IPA?');
if (beer === 'yes') {
  score++;
  alert('wow' + userName + ', how did you know that?');
} else {
  alert(' oh, too bad' + userName + '.');
}

var anime = prompt(userName + ', do i watch Anime?');
if (anime === 'yes') {
  score++;
  alert('wow' + userName + ', how did you know that?');
} else {
  alert(' oh, too bad' + userName + '.');
}


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

var multipleChoice = prompt(userName + ', here we get to have fun with multiple answer questions, please select a type of beer.');
var theRightStuff = ['IPA', 'stout', 'blonde', 'red'];
// theRightStuff[0] = 'IPA';
// theRightStuff[1] = 'stout';
// theRightStuff[2] = 'blonde';
// theRightStuff[3] = 'red';

// eslint-disable-next-line no-redeclare
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


alert('Thank you' + userName + ' for taking part of this short questionaire, further on you will learn more about me, you got ' + score + ' answers right');




// var i = 0;
// while(i< theRightStuff.length) {
//     console.log(theRightStuff[i]);
//     i = i + 1;
// }

// for (var numberOfTimes = 0; numberOfTimes <2; numberOfTimes = +1) {
//     for (var i = 0; i < theRightStuff.length; i = i + 1) {
//     console.log(theRightStuff[i]);
//     }
// }

// //lopps
// // countdown/
// var timeToLiftOff = 10;
//  console.log(timeToLiftOff); //should log 10 
//  timeToLiftOff - 1;
//  console.log(timeToLiftOff); //should be 9 in log
//  //keep doing that 8 more times, we dont want to repaet the code over and over instead turn into a loop
//  timeToLiftOff = timeToLiftOff -1;
//  while (timeToLiftOff > 0) {
//     console.log(timeToLiftOff);
//     timeToLiftOff = timeToLiftOff -1;
// }

// console.log  ('liftoff');


// //an array;
var theRightStuff = ['apple', 'orange', 'kiwi'];
theRightStuff[1] = 'apricot';
console.log(theRightStuff[1]);
theRightStuff[1] = 'apricot';
console.log(theRightStuff[1]);


