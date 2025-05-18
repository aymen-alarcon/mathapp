// Get all input fields
const n1 = document.getElementById('op1');
const c1 = document.getElementById('op2');
const nc1 = document.getElementById('op3');
const result = document.getElementById('result');
const op = document.querySelectorAll('.op');

// Confirm before closing the window
function closeApp() {
  if (confirm("Voulez-vous vraiment fermer ?")) {
    window.close();
  }
}

// Clear individual inputs
function clear1() {
  n1.value = "";
  n1.focus();
}

function clear2() {
  c1.value = "";
  c1.focus();
}

function clear3() {
  nc1.value = "";
  nc1.focus();
}

// Clear all inputs and result
function clearAll() {
  for (let i = 0; i < op.length; i++) {
    op[i].value = "";
  }
  result.value = "";
  n1.focus();
}

// Validate all inputs are numbers
function validateInputs() {
  for (let i = 0; i < op.length; i++) {
    if (op[i].value.trim() === "" || isNaN(op[i].value)) {
      alert(`Entrée ${i + 1} invalide.`);
      op[i].focus();
      return false;
    }
  }
  return true;
}

// Sum function
function add() {
  if (!validateInputs()) return;
  let sum = 0;
  op.forEach(el => sum += parseFloat(el.value));
  result.value = sum;
}

// Subtraction function
function subtract() {
  if (!validateInputs()) return;
  let diff = parseFloat(op[0].value);
  for (let i = 1; i < op.length; i++) {
    diff -= parseFloat(op[i].value);
  }
  result.value = diff;
}

// Multiplication function
function multiply() {
  if (!validateInputs()) return;
  let product = 1;
  op.forEach(el => product *= parseFloat(el.value));
  result.value = product;
}

// Division function
function divide() {
  if (!validateInputs()) return;
  let division = parseFloat(op[0].value);
  for (let i = 1; i < op.length; i++) {
    const val = parseFloat(op[i].value);
    if (val === 0) {
      alert("Division par zéro non autorisée.");
      return;
    }
    division /= val;
  }
  result.value = division;
}

// Average function
function average() {
  if (!validateInputs()) return;
  let total = 0;
  op.forEach(el => total += parseFloat(el.value));
  result.value = total / op.length;
}
