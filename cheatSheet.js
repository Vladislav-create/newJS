"use strict";

/*
Задание 1: 
Необходимо создать механизм для безопасного добавления метаданных к объектам 
книг с использованием ключей типа Symbol. Для чего необходимо:
1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
2. Реализовать методы addMetadata и getMetadata и другие методы, которые будут 
необходимы для работы кода ниже.
*/

// Объявляем символы reviewSymbol, ratingSymbol и tagsSymbol

// const reviewSymbol = Symbol('review')
// const ratingSymbol = Symbol('rating')
// const tagsSymbol = Symbol('tags')

// class Book {
//     constructor(title, author) {
//       this.title = title;
//       this.author = author;
//     }

/**
 * Метод извлекает из объекта значение под свойством metadataType
 * и возвращает его.
 * @param {Symbol} metadataType
 * @returns {Array}
 */
// getMetadata(metadataType) {
//     if (this[metadataType]) {
//         return this[metadataType]
//     } return []

// }

/**
 * Метод добавляет в объект массив под ключом metadataType, со значением
 * data внутри. Если массив под данным свойством уже существует,
 * тогда data просто будет добавлен в данный массив.
 * @param {Symbol} metadataType
 * @param {any} data
 */
//     addMetadata(metadataType, data) {
//         if (!this[metadataType]) {
//             this[metadataType] = []
//         } this[metadataType].push(data)
//     }

//     getAverageRating() {
//         const sum = this[ratingSymbol].reduce((acc, item) => acc + item, 0)
//         const avg = sum / this[ratingSymbol].length
//          return  Math.round(avg * 10) / 10
//     }

//     hasTag(tag) {
//         if (!this[tagsSymbol]) {
//             return false
//         }
//         return this[tagsSymbol].includes(tag)
//     }

//     reviewsCount() {
//         if (!this[reviewSymbol]) {
//             return 0
//         } return this[reviewSymbol].length
//     }
//   }

//   const book = new Book("1984", "George Orwell");
//   console.log(book);
//   book.addMetadata(reviewSymbol, "Отличная книга о дистопии!");
//   book.addMetadata(reviewSymbol, "Книга отстой, не покупайте ее.");
//   book.addMetadata(ratingSymbol, 5);
//   book.addMetadata(ratingSymbol, 4);
//   book.addMetadata(ratingSymbol, 4);
//   console.log(book);
//   console.log(book[ratingSymbol]);

// // ["Отличная книга о дистопии!", "Книга отстой, не покупайте ее."]
//   console.log(book.getMetadata(reviewSymbol));
//   console.log(book.getMetadata(ratingSymbol)); // [5, 4, 4]
//   console.log(book.getMetadata(tagsSymbol)); // []

//   book.addMetadata(tagsSymbol, "novel");
//   book.addMetadata(tagsSymbol, "dystopia");
//   console.log(book);
//   console.log(book.getMetadata(tagsSymbol)); // ["novel", "dystopia"]

//   console.log(book.getAverageRating()); // 4.3
//   console.log(book.hasTag("novel")); // true
//   console.log(book.hasTag("blockbuster")); // false
//   console.log(book.reviewsCount()); // 2
// ----------------------------------------------------------------------------------------------------------------------------------

/*
Задание 2: 
Создайте обычный объект library. Необходимо реализовать Symbol.iterator, у 
которого каждая итерация будет возвращать следующую книгу из библиотеки.
Продемонстрируйте работу Symbol.iterator у нашего объекта.
*/
// Список книг:
const books = [
  { title: "1984", author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
];

// const iterator = books[Symbol.iterator]()
// console.log(iterator.next());
// console.log(iterator.next());

const library = {
  books,
//   [Symbol.iterator]() {
//     let index = 0;
//     return {
//       next: () => {
//         if (index < this.books.length) {
//           return {
//             value: this.books[index++],
//             done: false,
//           };
//         }
//         return {
//           done: true,
//         };
//       },
//     };
//   },
    *[Symbol.iterator](){
        for (let i = 0; i < this.books.length; i++) {
            yield this.books[i]
        }
    }
};

// console.log(books);

for (const book of library) {
  console.log(book);
}
//------------------------------------------------------------------------------------------------------------------------------------

/*
Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не 
являются стандартными массивами, но похожи на них. Однако у таких коллекций 
нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы 
научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.
 
Задание 3: 
Напишите функцию, которая собирает все элементы <div> на странице, преобразует 
их в массив и фильтрует только те из них, у которых есть атрибут data-active.
Выведите отфильтрованный результат в консоль.
*/
 
// const allDiv = document.querySelectorAll('div');
// const result = Array.from(allDiv).filter((el) => el.hasAttribute('data-active'))
// console.log(result);
//----------------------------------------------------------------------------------

/*
Задание 4.
Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, 
кто из них посетил какие уроки и кто из преподавателей вёл данные уроки. 
 
Необходимо: 
1. Создать Map объект, который будет использоваться для хранения соответствия 
между уроком и преподавателем, урок => преподаватель.
2. Необходимо создать Map объект, ключами которого будут объекты студентов,
а значениями будут Set объекты, которые будут хранить уроки, посещенные 
студентом.
*/

// const ivan = {
//     name: "ivan",
// };
// const alex = {
//     name: "alex",
// };
// const kostay = {
//     name: "kostay",
// };

// const lessonsTeacher = new Map();
// lessonsTeacher.set('JS', 'Alex')
//                 .set('Java', 'Olga')
//                 .set('Python', 'Peter')
// console.log(lessonsTeacher);

// const studentLessons = new Map(
//     [
//         [ivan, new Set(['JS', 'HTML'])],
//         [alex, new Set(['CSS', 'JS', 'JAVA'])],
//         [kostay, new Set(['JS', 'HTML', 'SCSS', 'VUE'])]
//     ]
// );
 
 
// // Преподаватель по Математике: Смирнов.
// console.log(`Преподаватель по JS: ${lessonsTeacher.get('JS')}`);
// // Уроки Ивана: Математика, История.
// console.log(`Уроки Ивана: ${[...studentLessons.get(ivan)].join(', ')}`);

// let set = new Set(["апельсин", "яблоко", "банан", "банан", "банан"]);
// console.log(set);