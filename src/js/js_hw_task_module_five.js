// ==================================================
// ===================== Task 1 =====================
// ==================================================
//

Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.

Метод checkPizza объекта pizzaPalace использует this.
Метод order объекта pizzaPalace использует this
Вызов pizzaPalace.order("Smoked") возвращает строку "Order accepted, preparing «Smoked» pizza"
Вызов pizzaPalace.order("Four meats") возвращает строку "Order accepted, preparing «Four meats» pizza"
Вызов pizzaPalace.order("Big Mike") возвращает строку "Sorry, there is no pizza named «Big Mike»"
Вызов pizzaPalace.order("Viennese") возвращает строку "Sorry, there is no pizza named «Viennese»"

const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],

  checkPizza(pizzaName) {
    return pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },

};



//
// ==================================================
// ===================== Task 2 =====================
// ==================================================
//

Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды. Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.

После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

Объявлена переменная customer
Значение переменной customer это объект со свойствами и методами
Вызов customer.getDiscount() возвращает текущее значение свойства discount
Вызов customer.setDiscount(0.15) обновляет значение свойства discount
Вызов customer.getBalance() возвращает текущее значение свойства balance.
Вызов customer.getOrders() возвращает текущее значение свойства orders
Вызов customer.addOrder(5000, "Steak") добавляет "Steak" в массив значений свойства orders и обновляет баланс
Метод getBalance объекта customer использует this
Метод getDiscount объекта customer использует this
Метод setDiscount объекта customer использует this
Метод getOrders объекта customer использует this
Метод addOrder объекта customer использует this

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  getBalance() {
    return balance;
  },
  getDiscount() {
    return discount;
  },
  setDiscount(value) {
    discount = value;
  },
  getOrders() {
    return orders;
  },
  addOrder(cost, order) {
    balance -= cost - cost * discount;
    orders.push(order);
  },
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


//
// ==================================================
// ===================== Task 3 =====================
// ==================================================
//

Тестировщики нашли баги в коде сервиса хранения истории заказов еды. Тебе необходимо исправить их, правильно расставив this в методах объекта historyService, чтобы методы начали работать правильно.

Объявлена переменная historyService
Значение переменной historyService это объект с исходными свойствами и методами
Вызов historyService.getOrdersLog() возвращает строку с перечислением данных всех заказов из свойства orders
Вызов historyService.getEmails() возвращает массив всех уникальных почтовых адресов из свойства orders
Вызов historyService.getOrdersByEmail("solomon@topmail.net") возвращает [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
Вызов historyService.getOrdersByEmail("artemis@coldmail.net") возвращает [{ email: "artemis@coldmail.net", dish: "Pizza" }]
Метод getOrdersLog объекта historyService использует this
Метод getEmails объекта historyService использует this
Метод getOrdersByEmail объекта historyService использует this

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  getOrdersLog() {
    return orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return orders.filter(order => order.email === email);
  },
};


//
// ==================================================
// ===================== Task 4 =====================
// ==================================================
//

Измени код так, чтобы объект parent стал прототипом для объекта в переменной сhild.

Объявлена переменная parent
Значение переменной parent это объект
Вызов parent.hasOwnProperty("surname") возвращает true
Вызов parent.hasOwnProperty("heritage") возвращает true
Объявлена переменная child
Значение переменной child это объект
Вызов child.hasOwnProperty("name") возвращает true
Обращение к child.name возвращает "Jason"
Вызов child.hasOwnProperty("age") возвращает true
Обращение к child.age возвращает 27
Вызов child.hasOwnProperty("surname") возвращает false
Обращение к child.surname возвращает "Moore"
Вызов child.hasOwnProperty("heritage") возвращает false
Обращение к child.heritage возвращает "Irish"
Вызов parent.isPrototypeOf(child) возвращает true
Используется метод Object.create()

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = {};

child.name = "Jason";
child.age = 27;


//
// ==================================================
// ===================== Task 5 =====================
// ==================================================
//

 Измени код, построив цепочку прототипов так, чтобы объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.

Объявлена переменная ancestor
Значение переменной ancestor это объект.
Объявлена переменная parent
Значение переменной parent это объект.
Объявлена переменная child
Значение переменной child это объект.
Вызов ancestor.isPrototypeOf("parent") возвращает true
Вызов parent.isPrototypeOf("child") возвращает true
Вызов ancestor.hasOwnProperty("surname") возвращает true
Обращение к ancestor.surname возвращает "Dawson"
Вызов parent.hasOwnProperty("surname") возвращает true
Обращение к parent.surname возвращает "Moore"
Вызов child.hasOwnProperty("surname") возвращает false
Обращение к child.surname возвращает "Moore"
Вызов ancestor.hasOwnProperty("heritage") возвращает true
Обращение к ancestor.heritage возвращает "Irish"
Вызов parent.hasOwnProperty("heritage") возвращает false
Обращение к parent.heritage возвращает "Irish"
Вызов child.hasOwnProperty("heritage") возвращает false
Обращение к child.heritage возвращает "Irish"
Используется метод Object.create()

const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};

const parent = {};
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = {};
child.name = "Jason";
child.age = 27;

//
// ==================================================
// ===================== Task 6 =====================
// ==================================================
//

Используя ключевое слово class объяви класс Car с пустым телом.

Объявлен класс Car
Результат вызова new Car() это пустой объект

//
// ==================================================
// ===================== Task 7 =====================
// ==================================================
//

Добавь классу Car метод constructor который принимает три параметра:

brand - марка автомобиля.
model - модель автомобиля.
price - цена автомобиля.
Класс Car должен создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

Объявлен класс Car
У класса Car есть метод constructor
В результате вызова new Car("Audi", "Q3", 36000) получится объект { brand: "Audi", model: "Q3", price: 36000 }
В результате вызова new Car("BMW", "X5", 58900) получится объект { brand: "BMW", model: "X5", price: 58900 }
В результате вызова new Car("Nissan", "Murano", 31700) получится объект { brand: "Nissan", model: "Murano", price: 31700 }

class Car {

}


//
// ==================================================
// ===================== Task 8 =====================
// ==================================================
//

Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) конструктора.

Объявлен класс Car
У класса Car есть метод constructor
В результате вызова new Car({ brand: "Audi", model: "Q3", price: 36000 }) получится объект { brand: "Audi", model: "Q3", price: 36000 }
В результате вызова new Car({ brand: "BMW", model: "X5", price: 58900 }) получится объект { brand: "BMW", model: "X5", price: 58900 }
В результате вызова new Car({ brand: "Nissan", model: "Murano", price: 31700 }) получится объект { brand: "Nissan", model: "Murano", price: 31700 }

class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}


//
// ==================================================
// ===================== Task 9 =====================
// ==================================================
//

Добавь классу Car два метода.

getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
В классе Car объявлен метод getPrice
Метод getPrice возвращает значение свойства price экземпляра класса который его вызывает
В классе Car объявлен метод changePrice
Метод changePrice изменяет значение свойства price экземпляра класса который его вызывает

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

}


//
// ==================================================
// ===================== Task 10 ====================
// ==================================================
//

Напиши класс Storage, который будет создавать объекты для управления складом товаров. Класс ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

Объяви следующие методы класса:

getItems() - возвращает массив текущих товаров в свойстве items объекта который вызывает этот метод.
addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта который вызывает этот метод.
removeItem(itemToRemove) - принимает товар itemToRemove и удаляет его из массива товаров в свойстве items объекта который вызывает этот метод.
Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

Объявлен класс Storage
В классе Storage объявлен метод getItems
В классе Storage объявлен метод addItem
В классе Storage объявлен метод removeItem
Метод getItems возвращает значение свойства items экземпляра класса который его вызывает
Метод addItem изменяет свойство items экземпляра класса который его вызывает
Метод removeItem изменяет свойство items экземпляра класса который его вызывает
В результате вызова new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значение переменной storage это объект
У объекта storage есть свойство items
Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Nanitoids", "Prolonger", "Antigravitator"]
Второй вызов, storage.getItems(), после вызова storage.addItem("Droid"), возвращает массив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
Третий вызов storage.getItems(), после вызова storage.removeItem("Prolonger"), возвращает массив["Nanitoids", "Antigravitator", "Droid"]


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


//
// ==================================================
// ===================== Task 11 ====================
// ==================================================
//

Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку, которая записывается на создаваемый объект в свойство value.

Объяви следующие методы класса:

getValue() - возвращает текущее значение свойства value.
padEnd(str) - получает параметр str (строку) и добавляет её в конец значения свойства value объекта который вызывает этот метод.
padStart(str) - получает параметр str (строку) и добавляет её в начало значения свойства value объекта который вызывает этот метод.
padBoth(str) - получает параметр str (строку) и добавляет её в начало и в конец значения свойства value объекта который вызывает этот метод.
Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

Объявлен класс StringBuilder
В классе StringBuilder объявлен метод getValue
Метод getValue возвращает значение свойства value экземпляра класса который его вызывает
В классе StringBuilder объявлен метод padEnd
Метод padEnd изменяет свойство value экземпляра класса, который его вызывает
В классе StringBuilder объявлен метод padStart
Метод padStart изменяет свойство value экземпляра класса который его вызывает
В классе StringBuilder объявлен метод padBoth
Метод padBoth изменяет свойство value экземпляра класса который его вызывает
В результате вызова new StringBuilder(".") значение переменной builder это объект
У объекта builder есть свойство value
Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку .
Второй вызов builder.getValue(), после вызова builder.padStart("^"), возвращает строку ^.
Третий вызов builder.getValue(), после вызова builder.padEnd("^"), возвращает строку ^.^
Четвёртый вызов builder.getValue(), после вызова builder.padBoth("="), возвращает строку =^.^=

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


//
// ==================================================
// ===================== Task 12 ====================
// ==================================================
//

Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

getBrand() - возвращает значение приватного свойства brand.
changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
Объявлен класс Car
Свойство brand в классе Car объявлено приватным
Конструктор класса принимает объект со свойствами brand, model и price
В результате вызова new Car({ brand: "Audi", model: "Q3", price: 36000 }) получится объект { model: "Q3", price: 36000 }
В результате вызова new Car({ brand: "bmw", model: "X5", price: 58900 }) получится объект { model: "X5", price: 58900 }
В результате вызова new Car({ brand: "Nissan", model: "Murano", price: 31700 }) получится объект { model: "Murano", price: 31700 }
У экземпляра нет публичного свойства brand
Метод getBrand() возвращает значение приватного свойства brand.
Метод changeBrand("Honda") изменяет значение приватного свойства brand на "Honda"

class Car {

  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

}

//
// ==================================================
// ===================== Task 13 =====================
// ==================================================
//

Выполни рефакторинг класса Storage, сделав свойство items приватным.

Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

Объявлен класс Storage
У объекта storage нет свойства items
В классе Storage объявлен метод getItems
В классе Storage объявлен метод addItem
В классе Storage объявлен метод removeItem
Свойство items в классе Storage объявлено приватным
Конструктор класса принимает свойство items
В результате вызова new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значение переменной storage это объект
Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Nanitoids", "Prolonger", "Antigravitator"]
Второй вызов, storage.getItems(), после вызова storage.addItem("Droid"), возвращает массив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
Третий вызов storage.getItems(), после вызова storage.removeItem("Prolonger"), возвращает массив ["Nanitoids", "Antigravitator", "Droid"]


class Storage {

  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.items = this.items.filter(item => item !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]



//
// ==================================================
// ===================== Task 14 =====================
// ==================================================
//

Выполни рефакторинг класса StringBuilder, сделав свойство value приватным.
Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
Объявлен класс StringBuilder
Свойство value в классе StringBuilder объявлено приватным
В классе StringBuilder объявлен метод getValue
В классе StringBuilder объявлен метод padEnd
В классе StringBuilder объявлен метод padStart
В классе StringBuilder объявлен метод padBoth
В результате вызова new StringBuilder('.') значение переменной builder это объект
У объекта builder нет свойства value
Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку .
Второй вызов builder.getValue(), после вызова builder.padStart("^"), возвращает строку ^.
Третий вызов builder.getValue(), после вызова builder.padEnd("^"), возвращает строку ^.^
Четвёртый вызов builder.getValue(), после вызова builder.padBoth("="), возвращает строку =^.^=

class StringBuilder {

  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value += str;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


//
// ==================================================
// ===================== Task 15 ====================
// ==================================================
//

Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с приватными свойствами.

Объявлен класс Car
В классе Car объявлено приватное свойство brand
В классе Car объявлено приватное свойство model
В классе Car объявлено приватное свойство price
Конструктор класса принимает объект со свойствами brand, model и price
В классе Car объявлен геттер brand
В классе Car объявлен сеттер brand
В классе Car объявлен геттер model
В классе Car объявлен сеттер model
В классе Car объявлен геттер price
В классе Car объявлен сеттер price

class Car {
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }

  getModel() {
    return this.model;
  }

  updateModel(newModel) {
    this.model = newModel;
  }

  getPrice() {
    return this.price;
  }

  setPrice(newPrice) {
    this.price = newPrice;
  }
}


//
// ==================================================
// ===================== Task 16 ====================
// ==================================================
//

Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

Объявлен класс Car
У класса Car есть статическое свойство MAX_PRICE
Значение статического свойства MAX_PRICE это число 50000
У экземпляра нет свойства MAX_PRICE
В классе Car объявлен геттер price
В классе Car объявлен сеттер price
Вызов сеттера price у экземпляра класса, со значением аргумента меньше чем значение MAX_PRICE, изменяет свойство #price
Вызов сеттера price у экземпляра класса, со значением аргумента больше чем значение MAX_PRICE, не изменяет свойство #price

class Car {
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000


//
// ==================================================
// ===================== Task 17 ====================
// ==================================================
//

Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds the maximum".
В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".
Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).

Объявлен класс Car
У класса Car есть статический метод checkPrice(price)
Вызов Car.checkPrice(36000) возвращает строку "Success! Price is within acceptable limits"
Вызов Car.checkPrice(18000) возвращает строку "Success! Price is within acceptable limits"
Вызов Car.checkPrice(64000) возвращает строку "Error! Price exceeds the maximum"
Вызов Car.checkPrice(57000) возвращает строку "Error! Price exceeds the maximum"

class Car {
  static #MAX_PRICE = 50000;
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


//
// ==================================================
// ===================== Task 18 ====================
// ==================================================
//

В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

Объяви класс Admin, который наследует от класса User
Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), значение которого это объект { BASIC: "basic", SUPERUSER: "superuser" }
Объявлен класс Admin
Класс Admin наследует от класса User
У класса Admin есть публичное статическое свойство AccessLevel
Обращение к Admin.AccessLevel.BASIC возвращает строку "basic"
Обращение к Admin.AccessLevel.SUPERUSER возвращает строку "superuser"

class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}


//
// ==================================================
// ===================== Task 19 ====================
// ==================================================
//

Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. Добавь классу Admin публичное свойство accessLevel, значение которого будет передаваться при вызове конструктора.

Чтобы показать как будет использоваться класс Admin мы добавили инициализацию экземпляра под объявлением класса.

Объявлен класс Admin
Класс Admin наследует от класса User
У класса Admin есть публичное статическое свойство AccessLevel
У класса Admin есть метод constructor с параметром в виде объекта {email, accessLevel}
У класса Admin в конструкторе для свойства email используется обращение к конструктору родительского класса
Обращение к Admin.AccessLevel.BASIC возвращает строку "basic"
Обращение к Admin.AccessLevel.SUPERUSER возвращает строку "superuser"

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"


//
// ==================================================
// ===================== Task 20 ====================
// ==================================================
//

Объявлен класс Admin
Класс Admin наследует от класса User
У класса Admin есть публичное свойство blacklistedEmails
У класса Admin есть публичный метод blacklist
У класса Admin есть публичный метод isBlacklisted
После вызова mango.blacklist("poly@mail.com") значение свойства blacklistedEmails это массив 

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
console.log(mango.isBlacklisted("poly@mail.com")); // true


class Car {
  static #MAX_PRICE = 50000;
  static checkPrice(price) {
    return price > this.#MAX_PRICE
      ? 'Error! Price exceeds the maximum'
      : 'Success! Price is within acceptable limits'
  }
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

class Car {
  static #MAX_PRICE = 50000;
  static checkPrice(price) {
    return price > this.#MAX_PRICE
      ? 'Error! Price exceeds the maximum'             
      : 'Success! Price is within acceptable limits'
    
  }
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price));
console.log(Car.checkPrice(bmw.price));
console.log(Car.checkPrice(bmw.price));


const image = document.querySelector(".image");

console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(image.hasAttribute("src")); // true

console.log(image.getAttribute("alt")); // "Rocks and waterfall"

image.setAttribute("alt", "Amazing nature");

console.log(image.getAttribute("alt")); // Amazing nature



const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close




const заголовок = document.createElement( "h1" ) ; 
console.log(заголовок) ; // <h1></h1>

heading.textContent =  "Это заголовок" ; 
console.log(heading) ; // <h1>Это заголовок</h1>

const image = document.createElement( "img" ) ; 
image.src =  "https://placeimg.com/640/480/nature" ; 
image.alt =  "Природа" ; 
console.log(image) ; // <img src="https://placeimg.com/640/480/nature" alt="Природа" />


const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);


const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
list.innerHTML = markup;


const article = document.querySelector(".article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference? 
// Article title is lost because we overwrite element content.
article.innerHTML += htmlString;



const list = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");