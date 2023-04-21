const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
//console logs a number between 1-10, whole integer

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}
//if there is no score, let it be 0

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

const correctAnswer = num1 * num2;
//correct answer will be num1 multiplied by num2

formEl.addEventListener("submit", () => {
    const userAnswer = +inputEl.value 
    if(userAnswer === correctAnswer){
        score++;
        //increase score by 1
        updateLocalStorage();
    }
    else{
        score--;
        //decrease score by 1
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

