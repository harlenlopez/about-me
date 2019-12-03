'use strict';

var userName = prompt('Hello, may i please have your name?');
alert(userName);
var hello = userName + ' you are invited to play a game to get to know me a little bit better!';
alert(hello);
var myName = prompt( userName + ', what is my name');
alert(myName);
var hometown = prompt(userName + ', where am I originally from?');
alert(hometown);
var activity = prompt(userName + ', what is my favorite activity');
alert(activity);
alert('Thank you' + userName + ' for taking part of this short questionaire, further on you will learn more about me');

// console.log('javascript is UP');

var userName = prompt('Hello, may i please have your name?');
console.log('user stated their name was ' + userName);

var lowerCaseUsername = userName.toLowerCase();
if(lowerCaseUsername === 'harlen') {
  alert('hello overlord ' + userName);
} else {
  alert('welcome, please enjoy my site.');
}
if (myName === 'harlen'){
    alert('great job' + userName + '!');
} else {
    alert('sorry ' + userName + ', that is incorrect.');
}

if(hometown === 'placerville'){
    alert('wow' + userName + ', how did you know that?');
} else {
    alert( ' oh, too bad' + userName + '.');
}

if(activity === 'woodworking');{
    alert('you are on fire, great job!!!');
}