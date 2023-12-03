"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/
//Коллекция с поварами и их специализация
let chefsMap = new Map();
chefsMap.set('Пицца', 'Олег')
        .set('Суши', 'Андрей')  
        .set('Десерт', 'Анна')
//мапа для хранения заказов
let ordersMap = new Map();
// Меню
let menu = ["Маргарита", "Пепперони", "Три сыра", "Филадельфия", "Калифорния", "Чизмаки", "Сеякемаки", "Тирамису", "Чизкейк"]

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  constructor() {
  }
  newOrder(param1, ...param2) {
    try {
      for (const iterator of param2) {
        if (!menu.includes(iterator.name)) {
          throw new SyntaxError('Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.')
        }
      }

      if (!ordersMap.has(param1)) {
        ordersMap.set(param1, param2)
        //если в мапе уже есть такой заказ
      } else if (ordersMap.has(param1)) { 
          let resultOrder = []
          resultOrder = ordersMap.get(param1)
          let nextOrder = param2
          for (const newItem of nextOrder) {
            if (resultOrder.find(item => item.name === newItem.name)) {
              resultOrder.find(item => item.name === newItem.name).quantity += newItem.quantity 
            } else {
              if (menu.find(item => item === newItem.name)) {
                resultOrder.push(newItem)
              }
            }
          }
          ordersMap.set(param1, resultOrder)
      }
    } catch (error) {
      console.log(error.message);
    } 
  }
}

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"), 
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);
// Вывод:
// Клиент Иван заказал: 
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");

manager.newOrder(
  clientPavel, 
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel, 
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);


// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel, 
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.

let clients = ordersMap.keys();
for (const client of clients) {
  console.log(`Клиент ${client.firstname} заказал:`);
  let clientOrder = ordersMap.get(client)
  for (const item of clientOrder) {
    console.log(`${item.type} "${item.name}" - ${item.quantity}; готовит повар ${chefsMap.get(item.type)}`);
  }
}