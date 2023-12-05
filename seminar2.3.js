/*
Задание 3: 
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, 
является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:
 
```
<input type="text" class="number-input" placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```
 
Необходимо обрабатывать событие проверки числа пользователем, проверяющая 
функция должна использовать try и catch для проверки вводимого значения.
*/

const userNum = document.querySelector('.number-input');
const btn = document.querySelector('.check-button');
const message = document.querySelector('.message');
btn.addEventListener('click', getValue)

// function getValue() {
//     if (!Number.isFinite(+userNum.value)) {
//         message.textContent = 'Вы ввели не число';
//     } 
// }
function getValue() {
    try {
        if (!Number.isFinite(+userNum.value)) throw new Error ('Вы ввели не число') 
    } catch (error) {
        message.textContent = error.message
    } finally {
        console.log('Проверка завершена');
    }
}