"use strict";
console.log("QuizWork.js is working");

var correctAnswers = 0;
var totalStages = 3;
var currentStage = 0;

let Answer1A = {text: 19, verity: true};
let Answer1B = {text: 21, verity: false};
let Answer1C = {text: 910, verity: false};

let Answer2A = {text: "capsicum", verity: false};
let Answer2B = {text: "tomatoes", verity: true};
let Answer2C = {text: "cucumbers", verity: false};

let Answer3A = {text: "The 10th month.", verity: false};
let Answer3B = {text: "A 'cephalopod,' a mollusc and an underwater predator.", verity: false};
let Answer3C = {text: "The prefix for 'eight.'", verity: true};

//const pageContent = document.getElementById("page");
//console.log("QuizWork.js page: ", pageContent.textContent);

//QContent is the innerHTML stored to be used as questions.
//const QContent1 = "<strong>Question 1:</strong><br/>'+<i>Question1.text</i>+'<br/><div><a onClick="CorrectAnswer();" style="cursor: pointer; cursor: hand;">Question1.Ans1.text</a></div><br/><div><a onClick="WrongAnswer();" style="cursor: pointer; cursor: hand;">Question1.Ans2.text</a></div><br/><div><a onClick="WrongAnswer();" style="cursor: pointer; cursor: hand;">Question1.Ans3.text</a></div>";
//const QContent2 = "<strong>Question 2:</strong><br/>'+<i>Question2.text</i>+'<br/><div><a onClick="WrongAnswer();" style="cursor: pointer; cursor: hand;">Question2.Ans1.text</a></div><br/><div><a onClick="CorrectAnswer();" style="cursor: pointer; cursor: hand;">Question2.Ans2.text</a></div><br/><div><a onClick="WrongAnswer();" style="cursor: pointer; cursor: hand;">Question2.Ans3.text</a></div>";
//const QContent3 = "<strong>Question 3:</strong><br/>'+<i>Question2.text</i>+'<br/><div><a onClick="WrongAnswer();" style="cursor: pointer; cursor: hand;">Question3.Ans1.text</a></div><br/><div><a onClick="WrongAnswer();" style="cursor: pointer; cursor: hand;">Question3.Ans2.text</a></div><br/><div><a onClick="CorrectAnswer();" style="cursor: pointer; cursor: hand;">Question3.Ans3.text</a></div>";

function Question(text, Ans1, Ans2, Ans3) {
	this.text = text;
	this.Ans1 = Ans1;
	this.Ans2 = Ans2;
	this.Ans3 = Ans3;
}

let Question1 = new Question("What is 9 + 10?", Answer1A, Answer1B, Answer1C);
let Question2 = new Question("What 'salad fruit' does cheese go best with?", Answer2A, Answer2B, Answer2C);
let Question3 = new Question("What is 'Octo?'", Answer3A, Answer3B, Answer3C);

function startQuiz() {
	correctAnswers = 0;
	currentStage = 0;
	loadQuestion();
}


function loadQuestion() {
	currentStage += 1;
	if (currentStage == 1) {
		//pageContent.innerHTML = QContent1;
	} else if (currentStage == 2) {
		//pageContent.innerHTML = QContent2;
	} else if (currentStage == 3) {
		//pageContent.innerHTML = QContent3;
	} else {
		results();
	}
	//
}

function CorrectAnswer() {
	//everything green
	//correctAnswers ++;
	//new line that on click goes to next question.
	pageContent.innerHTML = pageContent.innerHTML + "<a onClick=";loadQuestion();">The answer is correct. Please click here to continue.</a>";
}

function WrongAnswer() {
	//everything red
	//new line that on click goes to next question.
	pageContent.innerHTML += "<a onClick=";loadQuestion();">The answer is incorrect. Please click here to continue.</a>";
 }

function results() {
		pageContent.innerHTML = "You have gotten " + correctAnswers + " out of 3 Questions right. <a onClick=";startQuiz();">Please click here to start again.</a>";
}

console.log("Question 1 is " + Question1.text + " It's answers are: " + Question1.Ans1.text + ", which is " + Question1.Ans1.verity + ", " + Question1.Ans2.text + ", which is " + Question1.Ans2.verity + ", and " + Question1.Ans3.text + ", which is " + Question1.Ans3.verity + ".");
console.log("Question 2 is " + Question2.text + " It's answers are: " + Question2.Ans1.text + ", which is " + Question2.Ans1.verity + ", " + Question2.Ans2.text + ", which is " + Question2.Ans2.verity + ", and " + Question2.Ans3.text + ", which is " + Question2.Ans3.verity + ".");
console.log("Question 3 is " + Question3.text + " It's answers are: " + Question3.Ans1.text + ", which is " + Question3.Ans1.verity + ", " + Question3.Ans2.text + ", which is " + Question3.Ans2.verity + ", and " + Question3.Ans3.text + ", which is " + Question3.Ans3.verity + ".");
//debug code to see if the questions and answers are valid.