const display = document.getElementById('display');

function updateDisplay(value) {
  display.value += value;
}

function buttonNum1onclick() {
  updateDisplay('1');
}
function buttonNum2onclick() {
  updateDisplay('2');
}
function buttonNum3onclick() {
  updateDisplay('3');
}
function buttonNum4onclick() {
  updateDisplay('4');
}
function buttonNum5onclick() {
  updateDisplay('5');
}
function buttonNum6onclick() {
  updateDisplay('6');
}
function buttonNum7onclick() {
  updateDisplay('7');
}
function buttonNum8onclick() {
  updateDisplay('8');
}
function buttonNum9onclick() {
  updateDisplay('9');
}
function buttonNum0onclick() {
  updateDisplay('0');
}

function plus() {
  updateDisplay(' + ');
}
function minus() {
  updateDisplay(' - ');
}
function division() {
  updateDisplay(' / ');
}
function multi() {
  updateDisplay(' * ');
}
function buttonTochkaonclick() {
  updateDisplay('.');
}

function resetFoo() {
  display.value = '';
}

function resultFoo() {
  try {
    display.value = eval(display.value.replace(/[^-()\d/*+.]/g, ''));
  } catch {
    display.value = 'Ошибка';
  }
}

function rootFoo() {
  try {
    display.value = Math.sqrt(eval(display.value.replace(/[^-()\d/*+.]/g, '')));
  } catch {
    display.value = 'Ошибка';
  }
}

document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (key >= '0' && key <= '9') {
    updateDisplay(key);
  } else if (key === '+') {
    plus();
  } else if (key === '-') {
    minus();
  } else if (key === '*') {
    multi();
  } else if (key === '/') {
    division();
  } else if (key === 'Enter') {
    resultFoo();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key === 'Escape') {
    resetFoo();
  } else if (key === '.') {
    buttonTochkaonclick();
  }
});
