/*
Задание 1: 
Давайте создадим класс для управления банковским счетом. В этом классе будет 
приватное свойство для хранения текущего баланса, а также методы для внесения 
и снятия денег со счета.
Необходимо реализовать класс BankAccount, в нем:
1. Приватное свойство #balance, которое инициализируется значением 0 и 
представляет собой текущий баланс счета.
2. Геттер balance, который позволит получить информацию о текущем балансе.
3. Метод deposit(amount), который позволит вносить средства на счет. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, в противном случае 
выбрасывайте соответствующую ошибку.
4. Метод withdraw(amount), который позволит снимать средства со счета. 
Убедитесь, что сумма внесения не отрицательная, что значение является 
нормальным числом и дробная часть не превышает двух знаков, и сумма снятия 
не может превышать текущий баланс аккаунта в противном случае выбрасывайте 
соответствующую ошибку.
*/

class BankAccount {
    constructor(){

    }
    #balance = 0

    get balance(){
        return this.#balance
    }
    
    isCorrectMoney(amount){
        if (amount < 0) throw new Error('Отрицательное число');
        if (!Number.isFinite(amount)) throw new Error('Число не подходящее, слишком длинное дробное/бесконечное/ не число');
        if (String(amount).split('.')[1]?.length > 2) throw new Error ('Дробная часть больше 2');
    }

    deposit(amount){
        this.isCorrectMoney(amount)
        this.#balance += amount;
    }

    withdraw(amount){
        this.isCorrectMoney(amount)
        if (amount > this.#balance) throw new Error ('Недостаточно средств');
        
        this.#balance -= amount;
    }
}

const clientDeposit = new BankAccount();

// clientDeposit.deposit(-1)
// clientDeposit.deposit(NaN)
// clientDeposit.deposit(45.666)
clientDeposit.deposit(100000000)
console.log(clientDeposit.balance);