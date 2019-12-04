'use strict';

var userName = prompt('Hello, may i please have your name?');
var hello = userName + ' you are invited to play a game to get to know me a little bit better!';
alert(hello);

console.log('javascript is UP');

console.log('user stated their name was ' + userName);

var myName = prompt( userName + ', is my name harlen');
if (myName === 'yes'){
    alert('great job' + userName + '!');
} else {
    alert('sorry ' + userName + ', that is incorrect.');
}

var lowerCaseUsername = myName.toLowerCase();
if(lowerCaseUsername === 'harlen') {
  alert('hello overlord ' + myName);
} else {
  alert('welcome, please enjoy my site.');
}

var hometown = prompt(userName + ', am I originally from Mexico?');
if(hometown === 'no'){
    alert('wow' + userName + ', how did you know that?');
} else {
    alert( ' oh, too bad' + userName + '.');
}
var activity = prompt(userName + ', is my favorite activity EDH');
if(activity === ' yes') {
    alert('you are on fire, great job!!!'); 
} else {
    alert( 'Come on, i know you know this!');
}

var beer = prompt(userName + ', is my favorite adult beverage IPA?');
if(beer === 'yes'){
    alert('wow' + userName + ', how did you know that?');
} else {
    alert( ' oh, too bad' + userName + '.');
}

var anime = prompt(userName + ', do i watch Anime?');
if(anime === 'yes'){
    alert('wow' + userName + ', how did you know that?');
} else {
    alert( ' oh, too bad' + userName + '.');
}

alert('Thank you' + userName + ' for taking part of this short questionaire, further on you will learn more about me');