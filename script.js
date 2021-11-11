let buttons = document.getElementsByTagName("button");
let input = document.querySelector("#scr");
let clear = document.querySelector("#clr");
let equal = document.querySelector("#equal");
for (let i = 0; i < buttons.length; i++) {
  if (
    buttons[i].innerHTML !== "C" &&
    buttons[i].innerHTML !== "=" &&
    buttons[i].innerHTML !== "←"
  ) {
    buttons[i].addEventListener("click", function (event) {
      input.value += event.target.innerHTML;
    });
  }
  else if (buttons[i].innerHTML === "←") {
    buttons[i].addEventListener("click", function (event) {
      let x = input.value;
      input.value = x.substr(0, x.length - 1);
      console.log(input.value);
    })
  }
}
clear.addEventListener("click", function () {
  input.value = "";
});
// "34x45"
function indexOfAll(str, keys = []) {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let index = str.indexOf(key);
    if (index >= 0) return index;
  }
  return -1;
}
equal.addEventListener("click", function () {
  let a = input.value;
  let operator = indexOfAll(a, ["+", "-", "x", "÷", "%"]);
  let operand1 = Number(a.slice(0, operator));
  let operand2 = Number(a.slice(operator + 1));
  let result = 0;
  switch (a[operator]) {
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "x":
      result = operand1 * operand2;
      break;
    case "÷":
      result = operand1 / operand2;
      break;
    case "%":
      result = operand1 % operand2;
      break;
    default:
      result = "NaN";
      break;
  }
  input.value = result;
});