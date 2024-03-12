// Purpose: To create a calculator that can perform basic math operations.

/*----- cached elements  -----*/
const display = document.getElementById("display");

/*----- functions -----*/

function num(value) {
  display.value += value;
}

function startCalc() {
  display.value = eval(display.value);
}

function resetCalc() {
  display.value = "";
}
