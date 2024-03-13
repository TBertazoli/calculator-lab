// Purpose: To create a calculator that can perform basic math operations.

/*----- cached elements  -----*/
const display = document.getElementById("display");

/*----- functions -----*/

function num(value) {
  let strLength = display.value.length;
  let signals = ["+", "-", "*", "/"];
  if (
    signals.includes(display.value[strLength - 1]) &&
    signals.includes(value)
  ) {
    return;
  }
  display.value += value;
}

function startCalc() {
  display.value = eval(display.value);
}

function resetCalc() {
  display.value = "";
}
