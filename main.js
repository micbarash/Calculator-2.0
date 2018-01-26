const displayNum = document.getElementById('number');
const displayOp = document.getElementById('operator');
let displayNumValue;
function clearDisplay() {
  displayOp.innerHTML = 0;
  displayNum.innerHTML = 0;
}
function num0() {
  if (displayNum.innerHTML == 0) {
    displayNum.innerHTML = 0;
    displayNumValue = 0;
  } else {
    displayNum.innerHTML = displayNum.innerHTML + 0;
    displayNumValue = displayNumValue.toString();
    displayNumValue = displayNumValue.concat('0');
    displayNumValue = Number(displayNumValue);
    console.log(displayNumValue);
  }
}
function numButton(button) {
  if (displayNum.innerHTML == 0) {
    let buttonValue = button.value;
    displayNum.innerHTML = buttonValue;
    displayNumValue = buttonValue;
  } else {
    let buttonValue = button.value;
    displayNum.innerHTML = displayNum.innerHTML + buttonValue;
    displayNumValue = displayNumValue.toString();
    displayNumValue = displayNumValue.concat(buttonValue);
    displayNumValue = Number(displayNumValue);
    console.log(displayNumValue);
  }
}
