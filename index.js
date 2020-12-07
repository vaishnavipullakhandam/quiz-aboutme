const chalk = require('chalk');

var readlineSync = require('readline-sync');
var userName = readlineSync.question(chalk.cyan('May I have your name? '));
var score=0
console.log(chalk.blue("----------"))
console.log(chalk.yellow("!!"+"Welcome"+" " +userName+"!!"))
console.log(chalk.blue("----------"))
/** welcoming part end **/


function quiz(question,answer){
  var userAnswer=readlineSync.question(question);
  

  if(answer.toUpperCase()==userAnswer.toUpperCase()){
   console.log(chalk.green("correct!"))
   score=score+1
   
 } else {
   console.log(chalk.red("wrong!"))
   
 }
 console.log(chalk.blue("----------"))
}

var question = [{
  question:"where do I live?",
answer:"Hyderabad"
},{
  question:"what is my favorite fruit?",
answer:"strawberry"
},{question:"what is my favorite weather?",
answer:"summer"
},{question:"what is my favorite color?",
answer:"blue"} ]


for(var i=0;i<question.length;i++){
  var currentquestion=question[i]
  quiz(currentquestion.question,currentquestion.answer)
}

console.log("your total score :"+" "+score+"/4")