'use strict';

var RADIUS = 100;
var DIAMETER = RADIUS * 2;

var canvas = document.getElementById('graph'),
	context = canvas.getContext('2d'),

	clockwise = true;

for (var i = 0; i < canvas.width; i += DIAMETER) {
	context.arc(i+RADIUS, canvas.height/2, RADIUS, 0, Math.PI, clockwise);
	context.stroke();

	clockwise = ! clockwise;
}