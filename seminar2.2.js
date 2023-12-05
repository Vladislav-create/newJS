/*
Задание 2: 
Мы создаем приложение. У нас планируется два вида пользователей, обычные и 
премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.
 
1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые 
должны создаваться при создании экземпляра класса).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumExpiration (дата истечения срока
действия премиум аккаунта, должно задаваться при создании объекта), а у 
RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User 
и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо
использовать instanceof для проверки типа переданного пользователя и дать 
соответствующий ответ из функции (в свободном формате).
*/

class User {
    constructor(name, surname) {
        this.name = name,
        this.surname = surname
    }
}

class PremiumUser extends User {
    constructor(name, surname, term){
        super(name, surname)
        this.premiumExpiration = term
    }
}

class RegularUser extends User {
    constructor (name, surname) {
        super(name, surname)
    }
}

const userPremium = new PremiumUser ('Иван', 'Иванов', '01.01.2024')
const userRegular = new RegularUser('Иван', 'Иванов')

function getAccountInfo(user) {
    if (user instanceof PremiumUser) console.log(`Срок действия премиум - ${user.premiumExpiration}`);
    if (user instanceof RegularUser) console.log(`Обычный клиент, премиума нет`);
}

getAccountInfo(userPremium)
getAccountInfo(userRegular)