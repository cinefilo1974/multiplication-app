const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

//console.log(num1,num2);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score")); //we use JSON.parse to convert to number

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`; // I just added to a new const

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAnswer = num1 * num2;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value; // to get the result convert to number, add +
  //console.log(userAns, typeof userAns);
  if (userAns === correctAnswer) {
    score++;
    updateLocalStorage();
    //console.log(score)
  } else {
    score--;
    updateLocalStorage();
    //console.log(score)
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score)); // we use JSON.stringify to convert score to string
}
