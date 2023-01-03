"use strict";
console.log("QuizWork copy.js is working");

var correctAnswers = 0;
var totalStages = 3;
var currentStage = 0;

const main = document.getElementById('.main');
const cover = document.getElementById('.cover');
const q1 = document.getElementById('.q1');
const q2 = document.getElementById('.q2');
const q3 = document.getElementById('.q3');
const result = document.getElementById('.result');

function toStart() {
	main.style.backgroundColor = 'lightgray';
	correctAnswers = 0;
	currentStage = 0;
	cover.style.display = block;
	q1.style.display = none;
	q2.style.display = none;
	q3.style.display = none;
	result.style.display = none;
}

function nextPart() {
	currentStage += 1;
	if (currentStage == 1) {
		cover.style.display = none;
		q1.style.display = block;
		q2.style.display = none;
		q3.style.display = none;
		result.style.display = none;
	} else if (currentStage == 2) {
		cover.style.display = none;
		q1.style.display = none;
		q2.style.display = block;
		q3.style.display = none;
		result.style.display = none;
	} else if (currentStage == 3) {
		cover.style.display = none;
		q1.style.display = none;
		q2.style.display = none;
		q3.style.display = block;
		result.style.display = none;
	} else {
		results();
	}
}

function CorrectAnswer() {
	console.log("A correct answer has been chosen!");
	main.style.backgroundColor = 'green';
	correctAnswers ++;
	nextPart();
}

function WrongAnswer() {
	console.log("An incorrect answer has been chosen.");
	main.style.backgroundColor = 'red';
	nextPart();
}

function results() {
	document.getElementById("score").innerHTML = correctAnswers;
	cover.style.display = none;
	q1.style.display = none;
	q2.style.display = none;
	q3.style.display = none;
	result.style.display = block;
}
