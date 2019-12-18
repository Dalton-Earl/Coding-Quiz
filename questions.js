$(document).ready(function () {
  

var questions = [
    {
      title: "1Commonly used data types DO NOT include:",
      choices: ["1strings", "booleans", "alerts", "numbers"],
      answer: "1alerts"
    },
    {
      title: "2The condition in an if / else statement is enclosed within ____.",
      choices: ["2quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "2parentheses"
    },
    {
      title: "3Commonly used data types DO NOT include:",
      choices: ["3strings", "booleans", "alerts", "numbers"],
      answer: "3alerts"
    },
    {
      title: "4The condition in an if / else statement is enclosed within ____.",
      choices: ["4quotes", "curly brackets", "parentheses"],
      answer: "4parentheses"
    },
    {
      title: "5Commonly used data types DO NOT include:",
      choices: ["5strings", "booleans", ],
      answer: "5alerts"
    },
    {
      title: "6The condition in an if / else statement is enclosed within ____.",
      choices: ["6quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "6parentheses"
    },
    {
      title: "7Commonly used data types DO NOT include:",
      choices: ["7strings", "booleans", "alerts", "numbers"],
      answer: "7alerts"
    },
    {
      title: "8The condition in an if / else statement is enclosed within ____.",
      choices: ["8quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "8parentheses"
    },
    {
      title: "9Commonly used data types DO NOT include:",
      choices: ["9strings", "booleans", "alerts", "numbers"],
      answer: "9alerts"
    },
    {
      title: "10The condition in an if / else statement is enclosed within ____.",
      choices: ["10quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "10parentheses"
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
  
    }
  
  quizButton.click(function(){
    if(questions.length > qN ){
    
      // console.log(qN);
      // console.log(questions.length);
      $("#question").html(questions[qN].title);
      
      } else {
        $("#question").html("the quiz is done!")
        //run a function that displays the quiz score in this statement. 
      }
   displayAnswers();
    qN++;
  });
 
  
   console.log(answerButton);
  $(".answerBtn").click(function(){
  alert("clickin an answers")

});

  // function startTimer(){

  // }
});


