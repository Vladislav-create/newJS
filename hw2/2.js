"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное числовое id.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: 1,
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: 2,
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: 3,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: 4,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const blocksReviews = document.querySelectorAll(".block__reviews"); //коллекция со всеми блоками для отображения комментариев
const iPhoneReview = document.querySelector(".iPhone"); //блок для отображения комментариев
const galaxyReview = document.querySelector(".galaxy"); //блок для отображения комментариев
const playStationReview = document.querySelector(".playStation"); //блок для отображения комментариев

const btnAddComment = document.querySelectorAll(".block__btn"); //кнопка для добавления комментария

const inputElemIPhone = document.querySelector(".block__comment__iPhone"); //инпут для iPhone
const inputElemGalaxy = document.querySelector(".block__comment__galaxy"); //инпут для galaxy
const inputElemPlayStation = document.querySelector(
  ".block__comment__playStation"
); //инпут для playStation

for (const btn of btnAddComment) {
  btn.addEventListener("click", addComment);
}

class Review {
  static count = 4;
  constructor(text) {
    Review.count++;
  }
}

//Вывод массива с комментариями
function showComments(data) {
  for (const item of data) {
    if (item.product === "Apple iPhone 13") {
      for (const comment of item.reviews) {
        let elem = document.createElement("div");
        elem.classList.add("block__reviews__width");
        elem.textContent = `id: ${comment.id}. ${comment.text}`;
        iPhoneReview.insertAdjacentElement("beforeend", elem);
      }
    }
    if (item.product === "Samsung Galaxy Z Fold 3") {
      for (const comment of item.reviews) {
        let elem = document.createElement("p");
        elem.textContent = `id: ${comment.id}. ${comment.text}`;
        galaxyReview.insertAdjacentElement("beforeend", elem);
      }
    }
    if (item.product === "Sony PlayStation 5") {
      for (const comment of item.reviews) {
        let elem = document.createElement("p");
        elem.textContent = `id: ${comment.id}. ${comment.text}`;
        playStationReview.insertAdjacentElement("beforeend", elem);
      }
    }
  }
}
showComments(initialData);

function addComment(e) {
  const message = "Комментарий неподходящей длины! Должен быть от 50 до 500 символов";
  const obj = {};
  if (e.target.value === "iPhone") {
    const newComment = new Review();
    newComment.id = Review.count;
    newComment.text = inputElemIPhone.value;
    if (
      inputElemIPhone.value.length < 50 ||
      inputElemIPhone.value.length > 500
    ) {
      throw new Error(
        message
      );
    }
    obj.product = "Apple iPhone 13";
    obj.reviews = [newComment];
    showComments([obj]);
  } else if (e.target.value === "galaxy") {
    const newComment = new Review(inputElemGalaxy.value);
    newComment.id = Review.count;
    newComment.text = inputElemGalaxy.value;
    if (
      inputElemGalaxy.value.length < 50 ||
      inputElemGalaxy.value.length > 500
    ) {
      throw new Error(
        message
      );
    }
    obj.product = "Samsung Galaxy Z Fold 3";
    obj.reviews = [newComment];
    showComments([obj]);
  } else if (e.target.value === "playStation") {
    const newComment = new Review(inputElemPlayStation.value);
    newComment.id = Review.count;
    newComment.text = inputElemPlayStation.value;
    if (
      inputElemPlayStation.value.length < 50 ||
      inputElemPlayStation.value.length > 500
    ) {
      throw new Error(
        message
      );
    }
    obj.product = "Sony PlayStation 5";
    obj.reviews = [newComment];
    showComments([obj]);
  }
}
