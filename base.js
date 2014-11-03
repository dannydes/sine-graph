'use strict';

var RADIUS = 100;
var DIAMETER = RADIUS * 2;

var canvas = document.getElementById('graph'),
	context = canvas.getContext('2d');

context.beginPath();
context.moveTo(0, 0);
context.lineTo(0, canvas.height);
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(1, 0);
context.lineTo(3, 0);
context.closePath();
context.stroke();

context.beginPath();
context.moveTo(1, canvas.height);
context.lineTo(3, canvas.height);
context.closePath();
context.stroke();

context.fillText(' '+1, 4, 7);
context.fillText(-1, 4, canvas.height);

var clockwise = true;

context.beginPath();

for (var i = 0; i < canvas.width; i += DIAMETER) {
	context.arc(i+RADIUS, canvas.height/2, RADIUS, 0, Math.PI, clockwise);
	clockwise = ! clockwise;
}

context.closePath();
context.stroke();