const display = document.getElementById("calculate");
const result = document.getElementById("result");

function appendToDisplay(input) {
  display.innerText += input;
}
function toggleSign() {
  if (display.innerText.startsWith("-")) {
    display.innerText = display.innerText.substring(1);
  } else if (display.innerText !== "") {
    display.innerText = "-" + display.innerText;
  }
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
