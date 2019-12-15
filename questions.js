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
      choices: ["4quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "4parentheses"
    },
    {
      title: "5Commonly used data types DO NOT include:",
      choices: ["5strings", "booleans", "alerts", "numbers"],
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

  var quizButton = $(".startQuiz");
  quizButton.click(function(){
    // alert("You have started the Quiz");
    var questionNumber = 0; 
    for(i=0;i<questions.length;i++){
    console.log(questions[questionNumber].choices);
    $("#question").html(questions[questionNumber].title);
    
    choices = questions[i].choices;
    
    
    
    
    $(".startQuiz").remove();
    $(".lead").append( "<button class='btn btn-primary btn-lg choicesBtn' role='button'></button>")
    $(".choicesBtn").html(questions[questionNumber].choices);
  

  }
    // $("#question").html(questions[0].title); 
    // $(".startQuiz").html(questions[0].choices[0])
    
    // $(".choicesBtn").html("new buttons")
    // $(".lead").append( "<button class='btn btn-primary btn-lg choicesBtn' role='button'></button>")
    
    


  });
  // function displayAnswers(){
  //   var choices =  questions[i].choices;
  //   for(i=0: i<choices.length; i++){

  //   }
  // }

  // function startTimer(){

  // }
});


