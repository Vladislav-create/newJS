// 2. Страница просмотра отзывов.
// Показывает список всех продуктов, на которые были оставлены отзывы.
// Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы"
// (надпись кнопки меняется), при нажатии на которую показываются / скрываются
// отзывы продукта.
// После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв
// из localstorage и со страницы.
// Если удалены все отзывы продукта, то продукта вовсе должен быть удален, как из
// localstorage, так и со страницы.


const boxContent = document.querySelector('.box__content');
const reviewsKey = 'reviews'
const allRevies = JSON.parse(localStorage.getItem(reviewsKey))

for (const item of allRevies) {

    boxContent.insertAdjacentHTML("beforeend", `<h3>${item.product}</h3>\n
                                    <div class = "box__review hiden"><p>${item.review}</p>\n
                                    <button class = "btn__del">Удалить</button></div>
                                    <button class = "btn__show">Показать отзыв</button>
                                    `)
    
    const boxReview = document.querySelector('.box__review');
    const btnShow = document.querySelector('.btn__show');
    const btnDel = document.querySelector('.btn__del');

    btnShow.addEventListener('click', ()=>{
        if (btnShow.textContent === 'Показать отзыв') {
            btnShow.textContent = 'Скрыть отзывы'
        } else {
            btnShow.textContent = 'Показать отзыв'
        }
        boxReview.classList.toggle('hiden')
    })

    btnDel.addEventListener('click', () => {
            let index = item.id
          let allReviewsArr = JSON.parse(localStorage.getItem(reviewsKey))
          console.log(allReviewsArr);
        
        console.log(allReviewsArr);
        localStorage.clear()
        localStorage.setItem(reviewsKey, JSON.stringify(allReviewsArr.splice(index, 1)))
    })
}



