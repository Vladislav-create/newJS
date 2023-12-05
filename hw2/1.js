"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

const listOfBooks = [
  "Айвенго",
  "Томминокеры",
  "Темная башня",
  "Под куполом",
  "Противостояние",
];

class Library {
  #books = "";
  constructor(listBooks) {
    const uniqueSet = new Set(listBooks);
    if (listBooks.length === uniqueSet.size) {
      this.#books = listBooks;
    } else {
      throw new Error("В списке книг есть дубликаты");
    }
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (!this.#books.includes(title)) {
      this.#books.push(title);
    } else {
      throw new Error("В списке уже есть такая книга");
    }
  }
  removeBook(title) {
    if (!this.#books.includes(title)) {
      throw new Error("В списке нет такой книги, которую вы хотите удалить!");
    } else {
      let findElemIndex = this.#books.indexOf(title);
      this.#books.splice(findElemIndex, 1);
    }
  }
  hasBook(title) {
    console.log(this.#books.includes(title));
  }
}

const testObject = new Library(listOfBooks);
console.log(testObject);
console.log(testObject.allBooks);
testObject.addBook("Темная башня: «Стрелок»");
testObject.removeBook("Томминокеры");
testObject.hasBook("Айвенго");
