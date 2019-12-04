'use strict';

var userName = prompt('Hello, may i please have your name?');
var hello = userName + ' you are invited to play a game to get to know me a little bit better!';
alert(hello);

console.log('javascript is UP');

console.log('user stated their name was ' + userName);

var myName = prompt( userName + ', what is my name');
if (myName === 'harlen'){
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

var hometown = prompt(userName + ', where am I originally from?');
if(hometown === 'placerville'){
    alert('wow' + userName + ', how did you know that?');
} else {
    alert( ' oh, too bad' + userName + '.');
}
var activity = prompt(userName + ', what is my favorite activity');
if(activity === 'woodworking');{
    alert('you are on fire, great job!!!');
}

alert('Thank you' + userName + ' for taking part of this short questionaire, further on you will learn more about me');