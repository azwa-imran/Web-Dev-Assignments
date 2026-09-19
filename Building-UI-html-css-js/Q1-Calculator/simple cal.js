function getNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  return [num1, num2];
}

function showResult(text) {
  document.getElementById("result").innerText = text;
}

function add() {
  const [num1, num2] = getNumbers();
  showResult("Result: " + (num1 + num2));
}

function subtract() {
  const [num1, num2] = getNumbers();
  showResult("Result: " + (num1 - num2));
}

function multiply() {
  const [num1, num2] = getNumbers();
  showResult("Result: " + (num1 * num2));
}

function divide() {
  const [num1, num2] = getNumbers();
  if (num2 === 0) {
    showResult("Cannot divide by zero");
  } else {
    showResult("Result: " + (num1 / num2));
  }
}