let display_value = 0;
let temporary_memory = 0;
let last_step = "";

let display = document.getElementById("display")

function addNumber(number) {
  display_value = parseInt(`${display_value.toString()}${number.toString()}`)
  display.innerText = display_value
}

function functionButton(method) {
  temporary_memory = display_value;
  logMemory()
  display_value = 0
  display.innerText = display_value
  last_step = method
}

function functionEquals() {
  switch (last_step) {
    case "add":
      display_value = temporary_memory + display_value;
      display.innerText = display_value
      break;
    case "subtract":
      display_value = temporary_memory - display_value;
      display.innerText = display_value
      break;
    case "divide":
      display_value = temporary_memory / display_value;
      display.innerText = display_value
      break;
    case "multiply":
      display_value = temporary_memory * display_value;
      display.innerText = display_value
      break;
    default:
      break;
  }
}

function logMemory() {
  document.getElementById("memory").innerText += `\n${temporary_memory}`
}