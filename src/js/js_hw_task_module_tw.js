Статические свойства также могут быть приватными, то есть доступными только внутри класса. Для этого имя свойства должно начинаться с символа #, равно как частные свойства. Обращение к частному статическому свойству вне тела класса вызовет ошибку.



Статические методы

В классе можно объявить не только методы будущего экземпляра, а также методы, доступные только классу – статические методы, которые могут быть как публичные, так и частные.Синтаксис объявления аналогичен статическим свойствам, за исключением того, что значение будет метод.

class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: "mango@mail.com" });

console.log(User.isEmailTaken("poly@mail.com"));
console.log(User.isEmailTaken("mango@mail.com"));


Особенность статических методов состоит в том, что при их вызове ключевое слово this ссылается на сам класс. Это означает, что статический метод может получить доступ к статическим свойствам класса, но не к свойствам экземпляра. Логично, потому что статические методы вызывает сам класс, а не его экземпляры.



Подражание классам

Ключевое слово extends позволяет реализовать подражание классам, когда один класс(дочерний, производный) подражает свойствам и методам другого класса(родительского).


class Child extends Parent {
  // ...
}

В выражении class Child extends Parent дочерний класс Child следует (расширяет) от родительского класса Parent.

Это означает, что мы можем объявить базовый класс, который сохраняет общие характеристики и методы для группы производных классов, которые подражают свойствам и методам родительского, но также добавляют свои уникальные.



Например, в приложении есть пользователи с разными ролями - администратор, копирайтер, контент менеджер и т.д. У каждого типа пользователя есть набор общих характеристик, например почта и пароль, но также есть и уникальные.

Создав независимые классы для каждого типа пользователя, мы получим дублирование общих свойств и методов, и, если необходимо изменить, например название свойства, придется проходить по всем классам, а это неудобно и требует много времени.

Вместо этого можно создать общий класс User, который будет сохранять набор общих свойств и методов, после чего создать классы для каждого типа пользователя, которые подражают этому набору от класса User.При необходимости изменить что - либо общее, достаточно будет изменить только код класса User.



class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  // Тіло класу ContentEditor
}

const editor = new ContentEditor("mango@mail.com");
console.log(editor); // { email: "mango@mail.com" }
console.log(editor.email); // "mango@mail.com"

Клас ContentEditor наслідує від класу User його конструктор, геттер і сеттер email, а також однойменну публічну властивість. Важливо пам'ятати, що приватні властивості і методи батьківського класу не наслідуються дочірнім класом.



Конструктор дочірнього класу​

Насамперед в конструкторі дочірнього класу необхідно викликати спеціальну функцію super(аргументи) - це псевдонім конструктора батьківського класу.В іншому випадку, при спробі звернутися до this в конструкторі дочірнього класу, виникне помилка.Під час виклику конструктора батьківського класу передаємо необхідні йому аргументи для ініціалізації властивостей.


class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor({ email, posts }) {
    // Виклик конструктора батьківського класу User
    super(email);
    this.posts = posts;
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'


Методы дочернего класса

В дочернем классе можно объявлять методы, доступные только его экземплярам.

// Уявімо, що вище є оголошення класу User

class ContentEditor extends User {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'
editor.addPost("post-1");
console.log(editor.posts); // ['post-1']


const carrot = {
  color: "orange",
}

const apple = {
  color: "red",

  printColor() {
    console.log(this.color);
  },
}

apple.printColor.bind(carrot)()

const fruits = {
  fruit: "apple",
  color: "red",
 
  getFruit() {
    console.log(this.fruit).push("orange");
  },
  setFruit(newFruit) {
    this.fruit = newFruit
  }
}

fruits.fruit("banana") 
console.log(newFruit);

const box = {
  itemName: "pansel",
  itemWight: 5,

  getItem() {
    
  }
}
const box = {
  itemName: "pansel",
  itemWight: 5,

  getItem() {
    
  }
}