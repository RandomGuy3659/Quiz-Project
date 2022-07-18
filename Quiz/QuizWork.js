"use strict";
console.log("QuizWork.js is working");

let QuestionList = ["a", "b", "c"];

var currentQuestion = 0;

var correctAnswers = 0;

var askTotal = 0;

function Answer(answerText, accuracy) {
	this.answerText = answerText;
	this.accuracy = accuracy;
};

function answerList() {
	//a
};

function Question(questionText, answerList[]) {
	this.questionText = questionText;
	this.answerList[] = answerList();
};

let wrongAnswerResponseList = ["nope.", "maybe that was a mis-click?", "Sorry, that was incorrect.", "rip" "Yeah... that tracks."];
let goodAnswerResponseList = ["We take those!", "That will do.", "Correct. Great job!", "Good answer!", "Yeah, that tracks."];

function Response(target) {
	var index = Math.floor(Math.random() * target.length);
	return target[index];
};