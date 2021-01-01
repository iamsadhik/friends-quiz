var score =0; 
var readlineSync = require("readline-sync");
var userAnswer = readlineSync.question("WHAT IS YOUR NAME ? ");
console.log("Welcome " +userAnswer+ "how much do YOU KNOW ABOUT SADHIK ?");

var score=0;
function play(question,answer)
{
  var playerAnswer = readlineSync.question(question)
  if(playerAnswer === answer)
  {
    console.log("you are right ");
    score++;
  }
  else
  {
    console.log("you are wrong ");
    score--;
  }
  console.log("your score is: ",score );
}


 var questions = [
   {
     question: "what is my DOB ? ",
     answer: "29 may 2000"
     
   },
   {
     
     question: "where do i live? ",
     answer: "bengaluru"
   },
   {
     question: "My favourite cricketer? ",
     answer: "MSD"
   },
   ];

   
   for(var i=0 ;i<questions.length;i++)
   {
     var sad=questions[i];
     play(sad.question ,sad.answer)
   }

