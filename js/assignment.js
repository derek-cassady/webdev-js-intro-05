"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare your two immutable variables
let shiftValue;
let popValue;

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    answerOneEl.textContent = todos.join(", ");
}

function updateAnswerTwo() {
    answerTwoEl.textContent = todos[2];
}

function removeLastValue() {
    popValue = todos.pop();
}

function removeFirstValue() {
    answerFourEl.textContent = todos.join(", ");
}

function addShiftAndPopValues() {
    todos.reverse();
}

function updateAnswerFour() {
    answerFiveEl.textContent = todos.join(", ");
}

function reverseTodoList() {
    shiftValue = todos.shift();
}

function updateAnswerFive() {
    todos.push(shiftValue, popValue);
}

function updateAnswerSix() {
    answerSixEl.textContent = todos.join(", ");
}

function render() {
    updateAnswerOne();
    updateAnswerTwo();
    removeLastValue();
    updateAnswerFour();
    reverseTodoList();
    updateAnswerFive();
    removeFirstValue();
    addShiftAndPopValues();
    updateAnswerSix();
}

submissionBtn.addEventListener("click", function () {
    // Update this function
    render();
});
