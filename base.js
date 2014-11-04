(function () {

	'use strict';

	//Constants
	var RADIUS = 100;
	var DIAMETER = RADIUS * 2;

	var canvas = document.getElementById('graph'),
		context = canvas.getContext('2d');

	//Draw the 3 y-markers.

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

	//Print numbers on y-markers.
	context.fillText(' '+1, 4, 7);
	context.fillText(-1, 4, canvas.height);
	context.fillText(' '+0, 4, canvas.height/2);

	for (var i = RADIUS, angle = 1/2; i < canvas.width; i += RADIUS, angle += 1/2) {

		//Draw x-markers.
		context.beginPath();
		context.moveTo(i, canvas.height/2+1);
		context.lineTo(i, canvas.height/2+3);
		context.closePath();
		context.stroke();

		//Form string representing angle in radians and print it.
		var denominator = (angle - Math.floor(angle) === 0.5),
			numerator = (denominator ? angle*2 : angle),

			piStr = (numerator !== 1 && numerator ? numerator : '') + '\u03C0' + (denominator ? '/2' : '');

		context.fillText(piStr, i+2, canvas.height/2+9);
	}

	//Draw sine wave.

	var clockwise = true;

	context.beginPath();

	for (var i = 0; i < canvas.width; i += DIAMETER) {
		context.arc(i+RADIUS, canvas.height/2, RADIUS, 0, Math.PI, clockwise);
		clockwise = ! clockwise;
	}

	context.closePath();
	context.stroke();

})();