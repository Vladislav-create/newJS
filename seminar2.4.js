/*
Задание 4:
Пользователи вашего сайта могут добавлять элементы в список. Но есть условие: 
введенное значение должно содержать от 3 до 10 символов.
 
Создайте HTML-структуру:
 
```
<input type="text" class="user-input">
<button class="add-button">Добавить</button>
<ul class="item-list"></ul>
<div class="error-message"></div>
```
 
Необходимо обрабатывать событие добавления элемента в список. Функция, 
обрабатывающая событие, должна выбрасывать исключение, если длина введенного 
значения не соответствует требованиям.
Если исключение было выброшено, необходимо добавить сообщение об ошибке в div.
Не важно, была ошибка или нет, после того как мы совершим попытку добавления 
данных, необходимо вывести в консоль "Попытка добавления элемента завершена."
*/

// const userInput = document.querySelector(".user-input");
// const errorMessage = document.querySelector(".error-message");
// const addBtn = document.querySelector(".add-button");
// const list = document.querySelector(".item-list");

// addBtn.addEventListener("click", addElement);

//  function addElement() {
//   try {
//     if (userInput.value.length < 3 || userInput.value.length >= 10) {
//       throw new Error("значение должно содержать от 3 до 10 символов");
//     } else {
//       list.innerHTML += `<li>${userInput.value}</li>`;
//     }
//   } catch (error) {
//     errorMessage.textContent = error.message;
//   } finally {
//     console.log("Попытка добавления элемента завершена");
//   }
// }

class Helper {
    static count= 0;

    constructor() {
        Helper.count++;
        // this.count = count
    }
}

const x = new Helper()
// const y = new Helper()

console.log(x);
console.log(Helper.count);