let display = document.getElementById("display");

function append(value) {
  // jika awal 0 dan input bukan titik
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  }
  // jika awal 0 dan input titik → jadi 0.
  else if (display.innerText === "0" && value === ".") {
    display.innerText = "0.";
  }
  // cegah double titik dalam satu angka
  else if (value === "." && display.innerText.includes(".")) {
    return;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function calculate() {
  try {
    let result = eval(display.innerText);
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === "") {
    display.innerText = "0";
  }
}

// Support keyboard input
document.addEventListener("keydown", function (e) {
  if (!isNaN(e.key) || ["+", "-", "*", "/", "."].includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    display.innerText = display.innerText.slice(0, -1) || "0";
  } else if (e.key.toLowerCase() === "c") {
    clearDisplay();
  }
});
