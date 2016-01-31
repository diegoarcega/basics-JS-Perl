// create an application-quiz.js
// create an questions.json
// create an Question-object.js
// Load Questions, Store users answer, Store how many corrects, store how many questions chosen

var questions = [
{
    question: "How to create a javascript object?",
    options: {
    	a: "var person = {}",
	    b: "var person = new Object()",
	    c: "Both are correct",
    },
    correct: "c",
    answer: ""
},
{
    question: "Methods are...",
    options: {
    	a: "Reference Objects",
	    b: "Javascript classes",
	    c: "Properties that hold function values",
    },
    correct: "c",
    answer: ""
},

{
    question: "All Objects also have their Prototype?",
    options: {
    	a: "YES",
	    b: "NO",
	    c: "Almost all javascript objects.",
    },
    correct: "c",
    answer: ""
},

{
    question: "What does Object.create function do?",
    options: {
    	a: "allows us to create an object with a specific prototype",
	    b: "create a variable inside an object",
	    c: "duplicates itself",
    },
    correct: "a",
    answer: ""
},

{
    question: "The standard properties in Object.prototype are:",
    options: {
    	a: "enumerable",
	    b: "all nonenumerable",
	    c: "half enumerable and half nonenumerable",
    },
    correct: "b",
    answer: ""
},

{
    question: "The actual prototype of a constructor is",
    options: {
    	a: "Must be set",
	    b: "there is no prototype for constructors",
	    c: "Function.prototype since constructors are functions",
    },
    correct: "c",
    answer: ""
},

{
    question: "Objects have prototype...",
    options: {
    	a: "which cannot be retrieved",
	    b: "which can be retrieved with Object.getPrototypeOf",
	    c: "which is a function",
    },
    correct: "b",
    answer: ""
},

{
    question: "Every instance created with a constructor will have the constructor as its prototype?",
    options: {
    	a: "YES",
	    b: "NO",
	    c: "Maybe",
    },
    correct: "a",
    answer: ""
},

{
    question: "Constructors (in fact, all functions) automatically get a property named",
    options: {
    	a: "window object",
	    b: "prototybe",
	    c: "it doesn't get a property",
    },
    correct: "b",
    answer: ""
},

{
    question: "An object created with 'new' is said to be",
    options: {
    	a: "an instance of its constructor",
	    b: "a function",
	    c: "a prototype",
    },
    correct: "a",
    answer: ""
}

];

var correctAnswers = 0;
var questionsAmount = prompt("How many questions do you want to answer?\nChoose from 1 to 10");
while(isNaN(questionsAmount) || questionsAmount == undefined || questionsAmount == null || questionsAmount == "" || questionsAmount == 0 || questionsAmount > 10 || questionsAmount < 1) {
	questionsAmount = prompt("YOU MUST TYPE A VALID NUMBER\nHow many questions do you want to answer?\nChoose from 1 to 10");
}


function makeQuestion() {
	var answeredQuestions = [] ;

	for (var i = questionsAmount; i > 0; i--) {
		questionNumber = Math.floor(Math.random() * questions.length);
		while(answeredQuestions.indexOf(questionNumber) != -1) {
			questionNumber = Math.floor(Math.random() * questions.length);
		}
		answeredQuestions.push(questionNumber);

		if (i != 0) {
			var userAnswer = prompt(
				questions[questionNumber].question+"\n"
				+ "(type a letter, ie: c) \n\n"
				+ "a) " + questions[questionNumber].options.a + "\n"
				+ "b) " + questions[questionNumber].options.b + "\n"
				+ "c) " + questions[questionNumber].options.c + "\n"
				);
			questions[questionNumber].answer = userAnswer;
			if(userAnswer == questions[questionNumber].correct) correctAnswers++;
		}
	}
}

makeQuestion();

var answerElement = document.getElementById('quiz');
var allAnsweredQuestions = "";

for (var i = 0; i < questions.length; i++) {

	if (questions[i].answer != "") {
			allAnsweredQuestions +=  "<h3>" + questions[i].question + "</h3>";
			allAnsweredQuestions += "You said: <u>" + questions[i].answer +  ") " + questions[i].options[questions[i].answer] +  " </u><br />";
			if(questions[i].answer == questions[i].correct) {
				allAnsweredQuestions +=  "<span class='text-success'> CORRECT </span>";
			}else{
				allAnsweredQuestions +=  "<span class='text-warning'> INCORRECT </span>";
				allAnsweredQuestions +=  " The correct answer is:<span class='text-success'> " + questions[i].correct + ") " + questions[i].options[questions[i].correct] +  " </span><br />" ;
			}
			allAnsweredQuestions += "<hr class='gray-rule' />";
	}


}

allAnsweredQuestions += "<p>You answered " + correctAnswers + " out of " + questionsAmount + " questions correctly, or " + correctAnswers/questionsAmount *100 +"%</p>"
answerElement.innerHTML = allAnsweredQuestions;

