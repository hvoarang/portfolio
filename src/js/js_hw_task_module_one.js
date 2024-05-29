const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
let midArr = [15];
let lessArr = [];
let bigArr = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] > midArr[0]) {
    bigArr.push(array[i]);
  } else if (array[i] < midArr[0]) {
    lessArr.push(array[i]);
  }
}

console.log(`Bigger - ${midArr} : ${bigArr}`);
console.log(`Less - ${midArr} : ${lessArr}`);

const arrs = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
let midNumber = arrs.length / 2;
let mid = [midNumber];
let hight = [];
let less = [];

for (i = 0; i < arrs.length; i += 1) {
  if (i < mid - 1) {
    less.push(arrs[i]);
  } else if (i > mid - 1) {
    hight.push(arrs[i]);
  }
}

console.log(`Bigger - ${mid} : ${hight}`);
console.log(`Less - ${mid} : ${less}`);

var num = 8;
var num = 2;
console.log(num);

const a = ['Mango'];
// Оскільки a - це масив, в b записується посилання на вже існуючий
// масив в пам'яті. Тепер a і b вказують на той самий масив.
const b = a;
console.log(a); // ["Mango"]
console.log(b); // ["Mango"]

// Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
a.push('Poly');
console.log(a); // ["Mango", "Poly"]

// b також змінилось, тому що b, як і a,
// просто містить посилання на те ж саме місце в пам'яті
console.log(b); // ["Mango", "Poly"]

// Результат повторюється
b.push('Ajax');
console.log(a); // ["Mango", "Poly", "Ajax"]
console.log(b); // ["Mango", "Poly", "Ajax"]

const name = 'Mango';
console.log(name.split('')); // ["M", "a", "n", "g", "o"]

const message = 'JavaScript - це цікаво';
console.log(message.split(' ')); // ["JavaScript", "-", "це", "цікаво"]

const words = ['JavaScript', 'це', 'цікаво'];
console.log(words.join('')); // "JavaScriptцецікаво"
console.log(words.join(' ')); // "JavaScript це цікаво"
console.log(words.join('-')); // "JavaScript-це-цікаво"

//=========================

const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(clients.indexOf('Poly')); // 2
console.log(clients.indexOf('Monkong')); // -1

//=========================

const fruit = 'apple';

if (fruit === 'apple' || fruit === 'strawberry') {
  console.log('It is a red fruit!');
}

const fruit = 'apple';

if (
  fruit === 'apple' ||
  fruit === 'strawberry' ||
  fruit === 'cherry' ||
  fruit === 'cranberries'
) {
  console.log('It is a red fruit!');
}

// Виносимо варіанти в масив
const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
const fruit = 'cherry';
// Перевіряємо присутність елемента
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}

const numbers = [];

numbers.push(1);
console.log(numbers); // [1]

numbers.push(2);
console.log(numbers); // [1, 2]

numbers.push(3);
console.log(numbers); // [1, 2, 3]

numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

numbers.push(5);
console.log(numbers); // [1, 2, 3, 4, 5]

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop()); //  5
console.log(numbers); // [1, 2, 3, 4]

console.log(numbers.pop()); //  4
console.log(numbers); // [1, 2, 3]

console.log(numbers.pop()); //  3
console.log(numbers); // [1, 2]

console.log(numbers.pop()); //  2
console.log(numbers); // [1]

console.log(numbers.pop()); //  1
console.log(numbers); // []

//====================

const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

const scores = [1, 2, 3, 4, 5];

// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
const deletedScores = scores.splice(0, 3);

// Тепер масив scores містить два елементи
console.log(scores); // [4, 5]

// А масив deletedScores містить три видалені елементи
console.log(deletedScores); // [1, 2, 3]

const colors = ['red', 'green', 'blue'];

colors.splice(2, 0, 'purple');
console.log(colors); // ["red", "green", "purple", "blue"]

const colors = ['red', 'green', 'blue'];

colors.splice(1, 0, 'yellow', 'pink');
console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

const languages = ['C', 'C++', 'Java', 'JavaScript'];

// Заміняємо елемент з індексом 1 на новий
languages.splice(1, 1, 'Python');
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Заміняємо один елемент (з індексом 2) на декілька
languages.splice(2, 1, 'C#', 'Swift', 'Go');
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

//==================

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Monkong', 'Singu'];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]

//=====================
//=====================
//=====================

// 1. Оголошення функції multiply
function multiply() {
  // Тіло функції
  console.log('Це лог на момент виклику функції multiply');
}

// 2. Виклики функції multiply
multiply(); // 'Це лог на момент виклику функції multiply'
multiply(); // 'Це лог на момент виклику функції multiply'

function multiply(x, y, z) {
  console.log('Код до return виконується звичайним чином');

  // Повертаємо результат виразу множення
  return x * y * z;

  console.log('Цей лог ніколи не виконається, він стоїть після return');
}

// Результат роботи функції можна зберегти у змінну
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550

function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}

count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(); // countFrom = 0, countTo = 10, step = 1

function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

//==========
function withdraw(amount, balance) {
  if (amount === 0) {
    console.log('Для проведення операції введіть суму більшу за нуль');
  } else if (amount > balance) {
    console.log('Недостатньо коштів на рахунку');
  } else {
    console.log('Операція зняття коштів проведена успішно');
  }
}

withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
withdraw(500, 300); // "Недостатньо коштів на рахунку"
withdraw(100, 300); // "Операція зняття коштів проведена успішно"

//===========
function withdraw(amount, balance) {
  if (amount === 0) {
    console.log('Для проведення операції введіть суму більшу за нуль');
  } else if (amount > balance) {
    console.log('Недостатньо коштів на рахунку');
  } else {
    console.log('Операція зняття коштів проведена успішно');
  }
}

withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
withdraw(500, 300); // "Недостатньо коштів на рахунку"
withdraw(100, 300); // "Операція зняття коштів проведена успішно"

//==============================

function withdraw(amount, balance) {
  // Если условие выполняется, вызывается console.log
  // и выход из функции. Код после тела if не выполнится.
  if (amount === 0) {
    console.log('Для проведения операции введите сумму больше нуля');
    return;
  }

  // Если условие первого if не выполнилось, то его тело пропускается
  // и интерпретатор доходит до второго if.
  // Если это условие выполняется, вызывается console.log и выход из функции.
  // Код, находящийся после тела if, не выполнится.
  if (amount > balance) {
    console.log('Недостаточно средств на счете');
    return;
  }

  // Если ни один из предыдущих if не исполнился,
  // интерпретатор доходит до этого кода и выполняет его.
  console.log('Операция снятия средств произведена');
}

withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
withdraw(500, 300); // "Недостаточно средств на счете"
withdraw(100, 300); // "Операция снятия средств произведена"

function counter() {
  let arr = [];
  let mid = [15];
  let top = [];
  let bot = [];

  for (i = 0; i <= arr.length; i++) {
    if (arr[i] < mid[0]) {
      top.push(arr[i]);
    } else if (arr[i] > mid[0]) {
      bot.push(arr[i]);
    } else {
      console.log('asd');
    }
  }
}

counter([123, 111, 11, 1, 222, 22222, 3333, 2, 15, 16, 17]);
