const display = document.getElementById("display");
const result = document.getElementById("result");

function appendToDisplay(input) {
  display.innerText += input;
}

function toggleSign() {
  if (display.innerText.startsWith === "-") {
    display.innerText = "+";
  } else if (display.innerText !== "") {
    display = "-" + display.innerText;
  }
  updateDisplay();
}
function clearDisplay() {
  display.innerText = "";
  result.innerText = "";
}

function calculate() {
  try {
    result.innerText = eval(display.innerText);
  } catch {
    result.innerText = "Error";
  }
}
