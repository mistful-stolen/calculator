// let lastNumber = prompt();
// let operator = prompt();
// let nextNumber = prompt();

// operate(lastNumber, operator, nextNumber);

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

let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

let anew = document.getElementById("anew");
let backspace = document.getElementById("backspace");
let slash = document.getElementById("slash");
let asterisk = document.getElementById("asterisk");
let dot = document.getElementById("dot");
let dash = document.getElementById("dash");
let plus_sign = document.getElementById("plus-sign");
let equal_sign = document.getElementById("equal-sign");
let display = document.getElementById("numbers");

let control = [
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  slash,
  asterisk,
  dash,
  plus_sign,
  dot,
];

let operator = "";

for (let button of control) {
  button.addEventListener("click", () => {
    if (button.textContent === "*") {
    } else {
      if (display.textContent === "0") {
        display.textContent = button.textContent;
      } else {
        display.textContent += button.textContent;
      }
    }
  });
}
