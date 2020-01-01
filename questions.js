$(document).ready(function () {
  

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Inline CSS Applies a unique style over:",
      choices: ["single element", "multiple elements", "everything on document", "everything after the CSS"],
      answer: "single element"
    },
    {
      title: "In HTML the element defining a table row is:",
      choices: ["tablerow", "tabr", "tr","trow"],
      answer: "trow"
    },
    {
      title: "What Symbol is used in Jquery?",
      choices: ["%", "$","#","@" ],
      answer: "$"
    },
    {
      title: "How do you declare a text document as HTML?",
      choices: [`!doctype html`, "var Doctype = html", "Document.HTML", "This is HTML"],
      answer: "!doctype html"
    },
    {
      title: "Where do you put elements you want to display",
      choices: ["head", "script", "body", "html"],
      answer: "body"
    },
    {
      title: "How do you link to an external CSS style sheet?",
      choices: ["Link = CSS", "stylesheet = style.css", "href>style.css<href", `link rel="stylesheet" href="style.css"`],
      answer: `link rel="stylesheet" href="style.css"`
    },
    {
      title: "When you have an array What is the best way to do work through it?",
      choices: ["fruit loops", "for loops", "how loops", "do while loops"],
      answer: "for loops"
    },
    
    
  ];

  var quizButton = $(".startQuiz",);
  
  var qN = 0;
  var timerEl = $(".timer");
  var timeLeft = questions.length * 15;
  var score = 0;

  function displayAnswers(){
    var questionChoice = questions[qN].choices.length;
    
    for(var i = 0; i<questionChoice;i++){
      // console.log(questionChoice);
      $(".startQuiz").remove();
      $(".lead").append(` <button class="btn btn-primary btn-lg answerBtn" role="button">${questions[qN].choices[i]}</button>`);
      
    }
    console.log()
    qN++;
    $(".answerBtn").click(function(){
      $(".lead").empty();

      
      displayQuestions();
      
      displayAnswers();
      
      var answerIn = $(this).text();
      if(questions[qN].answer === answerIn){
      score++
      }
      else{
        
      }
       console.log(score);
       
    });
    
  
    }
    function displayQuestions(){
     
      if(questions.length > qN ){
        
        $("#question").html(questions[qN].title);
        
        } 
        else {
          
          //run a function that displays the quiz score in this statement.
          var scoreMultiplier = timeLeft;
          timerEl.remove();
          score = score * scoreMultiplier;
          $("#question").html(`Your score is ${score}`);
          $(".lead").append(` <button class="btn btn-primary btn-lg saveBtn" role="button">Save Your Score</button>`); 
        }
        
    }
    function startTimer() {
      
      // console.log(timeLeft)
    
      var timeInterval = setInterval(function() {
        timerEl.text( timeLeft + " seconds remaining")
        timeLeft--;
    
        if (timeLeft === 0 ) {
          timerEl.text("");
          clearInterval(timeInterval);
        }
        
    
      }, 1000);
    }
    $(".saveBtn").click(function(){
    alert("saved!")
  });  
    
  quizButton.click(function(){
   
   displayQuestions();
   displayAnswers();
   startTimer();
    
    
      
  });
  
 
});


