// Создайте две html-страницы:

// 1. Страница добавления отзыва о продукте.
// Должна содержать форму с полем для ввода названия продукта и текстовое поле
// для текста отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
// Необходимо реализовать проверку, оба поля должны быть заполнены, если это не
// так, необходимо выводить ошибку пользователю.

const productInput = document.querySelector(".product");
const reviewArea = document.querySelector(".review");
const btnAddReview = document.querySelector(".addReview");

btnAddReview.addEventListener("click", addReviewLocal);

const reviewsKey = "reviews";
let arrReviews = [];

function addReviewLocal() {
  arrReviews = [];
  const userProduct = productInput.value;
  const userReview = reviewArea.value;
  if (productInput.value === "" || reviewArea.value === "") {
    throw new Error("Пустое поле");
  } else {
    if (localStorage.length != 0) {
      const allReviewsinStorage = JSON.parse(localStorage.getItem(reviewsKey));
      arrReviews.push(...allReviewsinStorage);
    }
    const newReview = {
      id: localStorage.length,
      product: userProduct,
      review: userReview,
    };
    arrReviews.push(newReview);
    const resultReviews = JSON.stringify(arrReviews);
    localStorage.setItem(reviewsKey, resultReviews);
  }
}
