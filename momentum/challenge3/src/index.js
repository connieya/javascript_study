let maxValue = document.querySelector("h3 #max-value");
let targetValue = document.getElementById("target-value");
let content = document.getElementById("content");
let result = document.getElementById("result");
document.getElementById("btn").addEventListener("click", playGame());

const playGame = () => {
  let maxNumber = maxValue.value;
  let targetNumber = targetValue.value;
  if (maxNumber < 0 || maxNumber === "") {
    console.log("값을 확인하세요");
    return;
  }
  if (targetNumber > maxNumber) {
    console.log("값을 똑바로 입력하세요");
    return;
  }
  let randomNumber = Math.floor(Math.random() * ++maxNumber);
  content.innerText = `You chose : ${targetNumber} , the machine chose : ${randomNumber}`;
  if (targetNumber >= randomNumber) {
    result.innerText = `You won!`;
  } else {
    result.innerText = `You lost!`;
  }
};
