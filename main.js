const displayNum = document.getElementById('number');
const displayOp = document.getElementById('operator');
let displayNumValue;
let displayOpValue;
let equation = '';
function clearDisplay() {
  displayOp.innerHTML = '';
  displayNum.innerHTML = 0;
  displayNumValue = 0;
  equation = '';
}

function numButton(button) {
  if (displayNum.innerHTML == 0) {
    let buttonValue = button.value;
    displayNum.innerHTML = buttonValue;
    displayNumValue = Number(buttonValue);
    equation = equation + buttonValue;
  } else {
    let buttonValue = button.value;
    displayNum.innerHTML = displayNum.innerHTML + buttonValue;
    displayNumValue = displayNumValue.toString();
    displayNumValue = displayNumValue.concat(buttonValue);
    displayNumValue = Number(displayNumValue);
    equation = equation + buttonValue;
  }
}

function opButton(button) {
  let buttonValue = button.value;
  displayOpValue = buttonValue;
  displayOp.innerHTML = displayNumValue + ' ' + displayOpValue;
  num = Number(displayNumValue);
  displayNumValue = 0;
  displayNum.innerHTML = 0;
  equation = equation + ' ' + buttonValue + ' ';
  displayOp.innerHTML = equation;
}

function decPoint() {
  if (equation.search(".") !== (-1)) {
    equation = equation + '.'
    displayNum.innerHTML = displayNum.innerHTML + '.';
    displayOp.innerHTML = equation;
  } else {
    equation = equation;
  }
}

function backspace() {
  let newEquation = equation.slice(0, -1);
  equation = newEquation;
  displayOp.innerHTML = equation;
  displayNumValue = displayNumValue.toString();
  let newDisplay = displayNumValue.slice(0, -1);
  displayNumValue = newDisplay;
  displayNum.innerHTML = displayNumValue;
}

function operate() {
  displayNum.innerHTML = eval(equation);
  displayOp.innerHTML = '';
  console.log(eval(equation));
}
