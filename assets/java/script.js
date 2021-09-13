
//Query Selector
const question = document.querySelector('#question');
const progressText = document.querySelector('#progressText');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');



//Question Scoring System
let currentQuestion = {}
let acceptingAnswer = true
let score = 0 
let questionCounter = 0
let availableQuestions = []

   let questions = [
     //1
       {
         question: "What Year was Java Script Founded?",
         choice1: "1991",
         choice2: "1835",
         choice3: "1995",
         choice4: "1997",
         answer: 3,
       },
     
     //2
     {
        question: "What Function Does document.querySelector() Perform When Tasked?",
        choice1: "deletes the document",
        choice2: "selects the query",
        choice3: "returns the first element within the document selector",
        choice4: "documents the query",
        answer: 3,
      },
      
     //3
     {
        question: "What Does Boolean mean",
        choice1: "system of algerbraic notations",
        choice2: "a binary variable having two possible values true or false",
        choice3: "the start of java script",
        choice4: "structure of a function",
        answer: 2,
      },

     //4
     {
        question: "Which Symbol can Be Used for Comments",
        choice1: "//",
        choice2: "()",
        choice3: "&^",
        choice4: "::",
        answer: 1,
      },
      
     //5
     {
        question: "Would The Following Function Work : console.log(chicago)",
        choice1: "Yes",
        choice2: "No",
        choice3: "Not Sure",
        choice4: "Skip",
        answer: 1,
      }
   ]

   const SCORE_POINTS = 10
   const MAX_QUESTIONS = 5

     startQuiz = () => {
         questionCounter = 0
         score = 0 
         availableQuestions = [...questions]
         getNewQuestion()
     }

    getNewQuestion = () => {
        if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
            localStorage.setItem('mostRecentScore', score)

            return window.location.assign('/highscore.html')
        }

        questionCounter++
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
        progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
   
       const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
       currentQuestion = availableQuestions[questionsIndex]
       question.innerText = currentQuestion.question

       choices.forEach(choice => {
           const number = choice.dataset['number']
           choice.innerText = currentQuestion['choice' + number]
       } )

      
       availableQuestions.splice(questionsIndex, 1)

       acceptingAnswers = true
    }


 choices.forEach(choice => {
     choice.addEventListener('click', e => {
         if(!acceptingAnswer) return

         acceptingAnswer = false
         const selectedChoice = e.target
         const selectedAnswer = selectedChoice.dataset['number']
            
         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
         'incorrect'

         if (classToApply === 'correct') {
             incrementScore(SCORE_POINTS)
         }

         selectedChoice.parentElement.classList.add(classToApply)

         setTimeout(() => {
             selectedChoice.parentElement.classList.remove(classToApply)
             getNewQuestions()
         }, 1000)
    })
 })


 incrementScore = num => {
     score +=num
     scoreText.innerText
 }

 startQuiz()