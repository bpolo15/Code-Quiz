var timer = document.querySelector(".timer");
var startButton = document.getElementById("start-btn");
var startMessage = document.querySelector('.controls');
var endHide = document.getElementById("questionHide")
startButton.addEventListener('click', startGame)
var question2= document.getElementById('question2');
var question3= document.getElementById('question3');
var endPage = document.getElementById('highScore');
var enterButton = document.querySelector('#enter');
var displayHighScores = document.querySelector("#highScorePage");


var questionprompt = document.getElementById('question');
var questionprompt2 = document.getElementById('question2');
var questionprompt3 = document.getElementById('question3');



var answer1 = document.querySelector('.btn1');
var answer2 = document.querySelector('.btn2');
var answer3 = document.querySelector('.btn3');
var answer4 = document.querySelector('.btn4');


var answer5 = document.querySelector('.btn5');
var answer6 = document.querySelector('.btn6');
var answer7 = document.querySelector('.btn7');
var answer8 = document.querySelector('.btn8');

var answer9 = document.querySelector('.btn9');
var answer10 = document.querySelector('.btn10');
var answer11 = document.querySelector('.btn11');
var answer12 = document.querySelector('.btn12');




var secondsLeft = 20;
var points=0;
function setTime() {
    
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endGame();
    
    }

  }, 1000);
}
function startGame() {

    setTime();
    console.log('started');
    startButton.classList.add('hide');
    startFirstQuestion();
    



}
function startFirstQuestion(){
    startMessage.classList.add('hide');
    endHide.classList.remove('hide');
    question2.classList.add('hide');
   
   var firstQuestion = document.createElement("p");
    firstQuestion.textContent="Who is the oldest actor in the show FRIENDS?";
    questionprompt.appendChild(firstQuestion)
    console.log(firstQuestion)
    
    
    answer1.innerHTML="Lisa Kudrow."
    

    answer1.addEventListener('click', function(){
        points += 10;
        secondsLeft +=10;
        alert("Correct!")
        console.log(points)
        secondQuestion();
    })
    answer2.addEventListener('click', function(){
        if(points<10)
        {
            points = 0;
        }
        else{
        points -=10
        }
        if(secondsLeft>10){
        secondsLeft -=10;
        alert("Wrong!")
        secondQuestion();
        }
        else{
            endgame();
        }
    })
    answer3.addEventListener('click', function(){
        if(points<10){
            points=0;
        }else{
        points -=10
        }
        if(secondsLeft>10){
        secondsLeft -=10;
        alert("Wrong!")
        secondQuestion();
        }
        else{
            endgame();
        }
    })
    answer4.addEventListener('click', function(){
        if(points<10){
            points=0;
        }else{
        points -=10
        }        if(secondsLeft>10){
        secondsLeft -=10;
        alert("Wrong!")
        secondQuestion();
        }
        else{
            endgame();
        }
    })
    
    
        
    }
    function secondQuestion(){
        endHide.classList.add('hide');
        question2.classList.remove('hide');

        var firstQuestion = document.createElement("p");
        firstQuestion.textContent="The show FRIENDS has how many seasons?";
        questionprompt2.appendChild(firstQuestion)
        console.log(firstQuestion)
        
        
        answer8.innerHTML="10! Still not enough."
        
    answer8.addEventListener('click', function(){
        points += 10;
        secondsLeft +=10;
        alert("Correct!")
        console.log(points)
        thirdQuestion();
    })
    answer7.addEventListener('click', function(){
        if(points<10){
            points=0;
        }else{
        points -=10
        }        if(secondsLeft>10){
        secondsLeft -=10;
        alert("Wrong!")
        thirdQuestion();
        }
        else{
            endgame();
        }
    })
    answer6.addEventListener('click', function(){
        if(points<10){
            points=0;
        }else{
        points -=10
        }        if(secondsLeft>10){
        secondsLeft -=10;
        alert("Wrong!")
        thirdQuestion();
        }
        else{
            endgame();
        }
    })
    answer5.addEventListener('click', function(){
        if(points<10){
            points=0;
        }else{
        points -=10
        }
        if(secondsLeft>10){
        secondsLeft -=10;
        alert("Wrong!")
        thirdQuestion();
        }
        else{
            endgame();
        }
    })


    }
    function thirdQuestion(){
        endHide.classList.add('hide');
        question2.classList.add('hide');
        question3.classList.remove('hide');

        var firstQuestion = document.createElement("p");
        firstQuestion.textContent="Who showed up in a wedding dress on the pilot episode of FRIENDS?";
        questionprompt3.appendChild(firstQuestion)
        console.log(firstQuestion)
        
        
        answer10.innerHTML="Rachel."
        
    answer10.addEventListener('click', function(){
        points += 10;
        secondsLeft +=10;
        alert("Correct!")
        console.log(points)
        endgame();
    })
    answer9.addEventListener('click', function(){
        if(points<10){
            points=0;
        }else{
        points -=10
        }
        if(secondsLeft>10){
        secondsLeft -=10;
        alert("Wrong!")
        endgame();
        }
        else{
            endgame();
        }
    })
    answer11.addEventListener('click', function(){
        if(points<10){
            points=0;
        }else{
        points -=10
        }
        if(secondsLeft>10){
        secondsLeft -=10;
        alert("Wrong!")
        endgame();
        }
        else{
            endgame();
        }
    })
    answer12.addEventListener('click', function(){
        if(points<10){
            points=0;
        }else{
        points -=10
        }        if(secondsLeft>10){
        secondsLeft -=10;
        alert("Wrong!")
        endgame();
        }
        else{
            endgame();
        }
    })






    }
    


    









function endgame(){
    question3.classList.add('hide');
    endPage.classList.remove('hide');
    alert("Times up!")
    

    var showScore = document.createElement("p");
    showScore.textContent="High Score! " + points;
    endPage.appendChild(showScore)
    enterButton.addEventListener("click", function(event) {
        event.preventDefault();
      
    var nameEnter = document.querySelector("#name").value;
    
   localStorage.setItem('name', nameEnter)
   localStorage.setItem('points', points)


    highScorePage();

    })



    console.log("finish");
    console.log(points);

};

function highScorePage(){
    question3.classList.add('hide');
    endPage.classList.add('hide');
    displayHighScores.classList.remove('hide');

    var DisplayRecord = document.createElement("p");
    var DisplayName = localStorage.getItem('name');
    var displayPoints = localStorage.getItem('points');
    DisplayRecord.textContent = "Name: " + DisplayName + " -  Points: " + displayPoints;

        displayHighScores.append(DisplayRecord)






}