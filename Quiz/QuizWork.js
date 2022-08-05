"use strict";
console.log("QuizWork.js is working");

let QuestionList = ["a", "b", "c"];

var currentQuestion = 0;

var correctAnswers = 0;

var askTotal = 0;

//An answer and if it's correct.
function Answer(answerText, accuracy) {
	this.answerText = answerText;
	this.accuracy = accuracy;
}

//A collection of a question's answers.
function answerList(Ans1, Ans2, Ans3, Ans4) {
	let answerList = [Ans1, Ans2, Ans3, Ans4];
}

//A question and answers to answer with.
function Question(questionText, answerList) {
	this.questionText = questionText;
	this.answerList = answerList();
}

let Question1 = new Question("What is 9 + 10?", answerList(Answer("190", false), Answer("19", true), Answer("21", false), Answer("90", false)));
console.log(Question1);

//String[] wrongAnswerResponseList = {"nope.", "maybe that was a mis-click?", "Sorry, that was incorrect.", "rip" "Yeah. that tracks."};
//String[] goodAnswerResponseList = {"We take those!", "That will do.", "Correct. Great job!", "Good answer!", "Yeah, that tracks."};
//Arrays of randomised responses.
function Response(target) {
	var index = Math.floor(Math.random() * target.length);
	return target[index];
}

