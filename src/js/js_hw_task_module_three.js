const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
};
console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion());

//==============
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const item of this.potions) {
      if (item.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    const newProduct = {
      ...newPotion,
    };

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (potionName === potion.name) {
        this.potions.splice(i, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    let resalt = `Potion ${oldName} is not in inventory`;
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];

      if (oldName === potion.name) {
        potion.name = newName;
        resalt = `Found ${oldName} change to ${newName}`;
      }
    }
    return console.log(resalt);
  },
};
console.log(atTheOldToad.getPotions());


Метод sort()
Метод  sort() сортирует элементы массива, но в отличие от других методов переборки, он сортирует исходный массив.

Сортирует и изменяет исходный массив.
Возвращает измененный массив, то есть ссылку на отсортированный выходной.
По умолчанию сортирует по росту.
Сортировка производится путем приведения значений к строке и сравнения порядковых номеров в таблице Unicode.
Такой массив чисел будет отсортирован по росту.

const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores); // [19, 35, 56, 61, 74, 92]

Но поскольку по умолчанию значения приводятся к строке, стандартная сортировка чисел работает необычно.Поэтому в следующем упражнении мы рассмотрим как задавать свой порядок сортировки.

const scores = [27, 2, 41, 4, 7, 3, 75];
scores.sort();
console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

Массив строк сортируется по алфавиту.

const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
students.sort();
console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]


В то же время порядковый номер заглавных меньше, чем у строчных.

const letters = ["b", "B", "a", "A", "c", "C"];
letters.sort();
console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']


Из - за сортировки исходного массива нарушается принцип чистоты функций и нельзя удобно создать несколько производных коллекций на основе исходной.Например, создать коллекцию, отсортированную по росту, а другую – по убыванию.Поэтому перед сортировкой производят полную копию исходного массива и сортируют уже ее.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort();

console.log(scores); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

Свой порядок сортировки чисел

Для указания своего порядка сортировки метода  sort(compareFunction) следует передать колбек - функцию с двумя параметрами.Это функция сравнения(compare function), порядок сортировки зависит от ее результата.Метод  sort() будет вызывать ее для двух случайных элементов.

массив.sort((a, b) => {
  // Тіло колбек-функції
});

a – первый элемент для сравнения.
b – второй элемент для сравнения.
Если вызов  compareFunction(a, b) возвращает любое отрицательное значение, то есть  a меньше  b, сортировка поставит  a перед  b.Это сортировка по росту.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

Если вызов  compareFunction(a, b) возвращает любое положительное значение больше нуля, то есть  b больше  a, сортировка поставит  b перед  a.Это сортировка по убыванию.

const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores].sort((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

Если вызов  compareFunction(a, b) вернет 0, сортировка оставит  a и  b неизменными по отношению друг к другу, но отсортирует их по отношению ко всем остальным элементам. Но вообще неважно, что возвращать, если их взаимный порядок не суть важно.



Свой порядок сортировки строк

Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк  localeCompare()

firstString.localeCompare(secondString)

Он вызывается на строке, которую нужно сравнить(firstString) с тем, что был передан ему в качестве аргумента(secondString).

"a".localeCompare("b"); // -1
"b".localeCompare("a"); // 1
"a".localeCompare("a"); // 0
"b".localeCompare("b"); // 0

Возвращает отрицательное значение, если  firstString он должен быть перед  secondString.
Возвращает положительное значение больше нуля, если  firstString должно быть после  secondString.
Если строки одинаковы, то возвращается ноль.
Это удобно использовать для сортировки строк, поскольку метод  sort() ожидает такие же значения от колбек - функции.

const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

Сортировка объектов

При работе с массивом объектов сортировка выполняется по числовому или строковому значению определенного свойства.К примеру, у нас есть группа студентов с баллами за тест.Необходимо отсортировать массив объектов по возрастанию и убыванию количества баллов и по имени студента.

const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

const inAscendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);


//=========================================


Цепочки методов
У нас есть массив объектов с именами, баллами и посещаемыми предметами каждого студент

const students = [
  { name: "Манго", score: 83, courses: ["математика", "фізика"] },
  { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
  { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
];

Необходимо получить массив их имен, отсортированных по росту баллов за тест. С этой целью мы отсортируем копию массива методом  sort(), после чего методом  map() создадим массив значений свойства  name из отсортированного массива.

const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map(student => student.name);

console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

Проблема в том, что у нас появляются промежуточные переменные после каждой операции, кроме финальной. Переменная  sortedByAscendingScore – излишняя и необходима только для хранения промежуточного результата.



Избавиться от таких «мертвых» переменных можно с помощью группировки вызовов методов в цепочке.Каждый последующий метод будет выполняться на основе результата предыдущей работы.

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']


Делаем копию исходного массива перед сортировкой.
На копии вызываем метод  sort().
К результату работы метода  sort() применяем метод  map().
Переменной  names присваивается результат работы метода  map().
Получим массив уникальных посещаемых предметов, отсортированный по алфавиту.

const uniqueSortedCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']

На исходном массиве вызываем  flatMap() и производим разглаженный массив всех курсов.
К результату метода  flatMap() применяем метод  filter() для фильтрации уникальных элементов.
В результате метода  filter() вызываем  sort().
Переменной  uniqueSortedCourses присваивается результат работы метода  sort().


Цепочка методов может быть произвольной длины, но обычно не более 2-3 операций. Во-первых, перебирающие методы используются для сравнительно простых операций над коллекцией. Во-вторых, вызов каждого последующего метода - это дополнительная переборка массива, что при большом количестве, может сказаться на производительности.






const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};






