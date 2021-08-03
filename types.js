// 1. Строковый тип данных - String
// Строку можно создавать с помощью одинарных/двоиных ковычек. Или с помощью 
// обратных бэктиков ( "", '', `` );
const myName = 'Шадияр';
let greeting = `Здравствуйте ${myName}, как ваши дела?`;
console.log(typeof greeting);


//2. Числовой тип данных - Number
let num1 = 5;
let num2 = 10;
let num3 = num1 + num2;
console.log(typeof num3)

let num4 = 3.14; // <- Тип Float

// 3. Булевый тип - Boolean хранит в себе 2 значения:
// false (неправда) или true (это правда)
let boolFalse = false;
let boolTrue = true;
console.log(typeof boolTrue);

// 4. Null - ничего!!! Нету значения
let number5 = 123456789;
number5 = null;
console.log(number5);

// 5. Undefined - неопределенность.