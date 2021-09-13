//Variables
var score = 0;
var questionIndex = 0;

//Query Selector
const question = document.querySelector('#question');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

const choices = Array.from(document.querySelectorAll('.choice-text'));

//Question Scoring System
let currentQuestion = {}
let acceptingAnswer = true
let score = 0 
let questionCounter = 0
let availableQuestions = []

   let question = [
       {
           
       }
   ]