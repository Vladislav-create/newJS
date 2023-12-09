/*
Задание 2: 
Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов. 
Посетители сайта могут выбирать разные элементы мебели, цвета и материалы для 
своего гарнитура. После того как пользователь собрал свой комплект и сохраняет 
свой выбор, информация о нем сохраняется в localStorage. При следующем посещении 
сайта их индивидуальные настройки автоматически загружаются, и они видят ранее 
созданный мебельный комплект.
 
1. Создайте базовую HTML-структуру с различными элементами мебели (например, 
стол, стул, диван) и возможными параметрами для них (цвет, материал, дизайн).
2. Пользователи могут выбирать разные элементы и параметры, чтобы составить свой
мебельный гарнитур.
3. После выбора всех желаемых параметров предоставьте кнопку "Сохранить 
комплект", которая сохраняет текущий выбор пользователя в localStorage.
4. При следующем посещении сайта автоматически загрузите сохраненные параметры 
из localStorage и отобразите ранее созданный комплект.
5. Убедитесь, что у пользователей есть возможность очистить сохраненные 
настройки (очистить localStorage).
*/ 

const table = document.querySelector('.table');
const chairs = document.querySelector('.chairs');
const btnSave = document.querySelector('.btnSave');
const btnClearSelection = document.querySelector('.clearSelection');

btnSave.addEventListener('click', saveValues)
btnClearSelection.addEventListener('click', clearSelection)

function saveValues() { 
    
    localStorage.setItem('Мебель', JSON.stringify({
        table: table.value,
        chairs: chairs.value
    }))
}
if (localStorage.getItem('Мебель')) {
    table.value = JSON.parse(localStorage.getItem('Мебель')).table
    chairs.value = JSON.parse(localStorage.getItem('Мебель')).chairs
}

function clearSelection () {
    localStorage.removeItem('Мебель')
}