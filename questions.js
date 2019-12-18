$(document).ready(function () {
  

var questions = [
    {
      title: "1Commonly used data types DO NOT include:",
      choices: ["1strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "2The condition in an if / else statement is enclosed within ____.",
      choices: ["2quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "3Commonly used data types DO NOT include:",
      choices: ["3strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "4The condition in an if / else statement is enclosed within ____.",
      choices: ["4quotes", "curly brackets", "parentheses"],
      answer: "parentheses"
    },
    {
      title: "5Commonly used data types DO NOT include:",
      choices: ["5strings", "booleans", ],
      answer: "alerts"
    },
    {
      title: "6The condition in an if / else statement is enclosed within ____.",
      choices: ["6quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "7Commonly used data types DO NOT include:",
      choices: ["7strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "8The condition in an if / else statement is enclosed within ____.",
      choices: ["8quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "9Commonly used data types DO NOT include:",
      choices: ["9strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "10The condition in an if / else statement is enclosed within ____.",
      choices: ["10quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    
  ];

  var quizButton = $(".startQuiz",);
  
  var qN = 0;

  function displayAnswers(){
    var questionChoice = questions[qN].choices.length;
    
    for(var i = 0; i<questionChoice;i++){
      console.log(questionChoice);
      $(".startQuiz").remove();
      $(".lead").append(` <button class="btn btn-primary btn-lg answerBtn" role="button">${questions[qN].choices[i]}</button>`);
      
    }
    qN++;
    $(".answerBtn").click(function(){
      $(".lead").empty();

      
      displayQuestions();

      displayAnswers();
    });
  
    }
    function displayQuestions(){
      
      if(questions.length > qN ){
        
        // console.log(qN);
        // console.log(questions.length);
        $("#question").html(questions[qN].title);
        
        } else {
          $("#question").html("the quiz is done!")
          //run a function that displays the quiz score in this statement. 
        }
        
    }
    
  quizButton.click(function(){
   displayQuestions();
   displayAnswers();
   
    
    
      
  });
 

  // function startTimer(){

  // }
});


