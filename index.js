var numOfWin = 0;
var numOfLoss = 0;

for (let i = 0; i < 5; i++) {
  var randomNum = Math.floor(Math.random() * 5) + 1;
  var guessNum = parseInt(prompt("Enter number between 1 to 5"));
  if (randomNum == guessNum) {
    numOfWin++;
    document.write(randomNum, "==", guessNum, "</br>");
  } else {
    document.write(randomNum, "!=", guessNum, "</br>");

    numOfLoss++;
  }
}
document.write(`You have won ${numOfWin} times. </br>`);
document.write(`You have lost ${numOfLoss} times. </br>`);
