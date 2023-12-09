/*
Задание 1: 
Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" 
во внутреннем массиве (имитируя базу данных). Когда пользователь нажимает на 
кнопку "Загрузить новости", ваш код должен имитировать задержку, словно 
происходит реальная загрузка данных из внешнего источника, а после этой 
задержки — отображать новости на странице.
 
1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером 
для их отображения.
2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна 
имитировать задержку в 2 секунды перед успешным возвращением данных из 
"виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она 
должна возвращать ошибку вместо данных.
3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), 
обрабатывая успешное выполнение и ошибки с использованием then() и catch().
При успешной загрузке отобразите статьи на странице. При ошибке покажите 
сообщение об ошибке.
4. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" 
новостей и активирует её снова после завершения операции (будь то успешная 
загрузка или ошибка).
*/

const mockDatabase = [
  { title: "Новость 1", content: "Содержимое новости 1..." },
  { title: "Новость 2", content: "Содержимое новости 2..." },
  // ... другие статьи
];

function fetchNews() {
  return new Promise((resolve, reject) => {
      btnAddNews.disabled = true
    setTimeout(() => {
      if (Math.random() * 10 > 3) {
        resolve(mockDatabase);
      } else {
        reject(new Error("Ошибка получения данных"));
      }
      
    }, 1000);
  })
    .then((arr) => printNews(arr))
    .catch((err) => printError(err.message))
    .finally(() => btnAddNews.disabled = false)
}

const btnAddNews = document.querySelector(".load_news");
btnAddNews.addEventListener("click", fetchNews);
const news = document.querySelector(".content");

function printNews(data) {
    for (const iterator of data) {
        news.textContent += `${iterator.title}\n${iterator.content}`
    }
}
function printError(params) {
    news.textContent = params
}

