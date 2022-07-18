"use strict";
console.log("QuizWork.js is working");

let QuestionList = ["a", "b", "c"];

var currentQuestion = 0;

var correctAnswers = 0;

var askTotal = 0;

let Question = {"What is 15 + 22?"};

function Answer(answerText, accuracy) {
	this.answerText = "37";
	this.accuracy = true;
};