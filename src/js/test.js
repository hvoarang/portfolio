const validNumber = Number('51'); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number('qweqwe'); // NaN
console.log(Number.isNaN(invalidNumber)); // true

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); // 0.41

// Math.floor(num) - повертає найменше ціле число,
// менше, або яке дорівнює зазначеному числу
console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найбільше ціле число,
// більше, або яке дорівнює зазначеному числу.
console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа,
// округленого до найближчого цілого
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - піднесення до степеня
console.log(Math.pow(2, 4)); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
console.log(Math.random()); // випадкове число між 0 і 1
console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

//Конкатенация строк
const message = 'Манго' + 'есть' + 'счастлив';
console.log(message); // Манго счастлив

console.log(1 + '2'); // консоль «12»
console.log(1 + '2' + 4); // Консоль «124» . журнал ( 1 + 2 + «4» ); // "34"
