let lastNumber = prompt();
let operator = prompt();
let nextNumber = prompt();

operate(lastNumber, operator, nextNumber);

function operate(lastNumber, operator, nextNumber) {
  switch (operator) {
    case "+":
      console.log(add(lastNumber, nextNumber));
      break;
    case "-":
      console.log(subtract(lastNumber, nextNumber));
      break;
    case "*":
      console.log(multiply(lastNumber, nextNumber));
      break;
    case "/":
      console.log(divide(lastNumber, nextNumber));

      break;
    default:
      break;
  }
}
function add(last, next) {
  last = Number(last);
  next = Number(next);

  return last + next;
}

function subtract(last, next) {
  return last - next;
}

function multiply(last, next) {
  return last * next;
}

function divide(last, next) {
  return last / next;
}
