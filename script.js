/*----- state variables -----*/

let calc;
let numbs = [];
let signs;

/*----- contants -----*/

/*----- cached elements  -----*/
const display = document.getElementById("display");
const resetButton = document.getElementById("clear");

/* ----- event listeners-----* /


/*----- functions -----*/
init();

function init() {
  calc = [
    [7, 8, 9, "/"],
    [4, 5, 6, "*"],
    [1, 2, 3, "-"],
    [0, ".", "+", "="],
  ];
  numbs = [];
  display.value = "";

  render();
}

function render() {
  calculator();
  renderClear();
}

function calculator() {
  calc.forEach((rowArr, rowId) => {
    rowArr.forEach((cellVal, colId) => {
      const cellId = `r${rowId}c${colId}`;
      const cellEl = document.getElementById(cellId);
      cellEl.rowId = rowId;
      cellEl.colId = colId;
      cellEl.cellVal = cellVal;
      cellEl.addEventListener("click", handleCalculation);
    });
  });
}

function handleCalculation(event) {
  const row = event.target.rowId;
  const col = event.target.colId;
  const cell = event.target.cellVal;
  display.value += cell;
  if (typeof cell === "number") {
    numbs.push(cell);
    return;
  }

  switch (cell) {
    case "+":
      signs = "+";
      break;
    case "-":
      signs = "-";
      break;
    case "/":
      signs = "/";
      break;
    case "*":
      signs = "*";
  }

  if (cell === "=") {
    startCalc(numbs, signs);
  }
}

function startCalc(numbs, sign) {
  if (sign === "/") {
    divideValues(numbs);
  } else if (sign === "+") {
    addValues(numbs);
  } else if (sign === "*") {
    multiplyValues(numbs);
  } else if (sign === "-") {
    subtractValues(numbs);
  }
}

function addValues(numbs) {
  let sum = 0;
  numbs.forEach((num) => {
    sum += num;
  });
  display.value = sum;
}

function multiplyValues(numbs) {
  let multiply = 1;
  numbs.forEach((num) => {
    multiply *= num;
  });
  display.value = multiply;
}

// function divideValues(numbs) {
//   console.log("here");
//   let divide = ;
//   numbs.forEach((num) => {
//     num /= num;
//   });

//   console.log(divide);
//   display.value = divide;
// }
function subtractValues(numbs) {
  let subtract = 0;
  for (let i = 0; i < numbs.length; i++) {
    subtract[i] = numbs[i] - numbs[i + 1];
    display.value = subtract;
  }

  console.log(subtract);
}

function renderClear() {
  resetButton.addEventListener("click", init);
}
