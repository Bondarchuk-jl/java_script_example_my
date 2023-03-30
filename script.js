/* let students = 100;
students = students + 50;
students += 70;
console.log(students); */


/* const result = 108 + 223 - 2 * 5;
console.log(result); */
// Example 4 - Клас Math

// Напиши скрипт, який виводить у консоль заокруглені вгору / вниз і т.д.значення змінної value.Використовуй методи Math.floor(), Math.ceil() та Math.round().
// Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.9;

// console.log(Math.floor(value))
// console.log(Math.ceil(value))
// console.log(Math.round(value))
/* 
Example 5 - Шаблонні рядки

Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = ``;
console.log(message); // "Cyberdyne Systems has 200 bots in stock" 

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(message);*/
/* Example 6 - Методи рядків та чейнінг

Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

Індекс маси тіла необхідно округлити до однієї цифри після коми;

 
let weight = '88,3';
let height = '1.75';
weight = Number(weight.replace(",", "."));
height = +height.replace(",", ".");

console.log(weight);
console.log(height);

// const bmi = weight / (height * height);
// const bmi = weight / height ** 2; 
const bmi =Number(( weight / Math.pow(height, 2)).toFixed(1));


console.log(bmi); // 28.8*/

// Example 7 - Оператори порівняння та приведення типів

// Яким буде результат виразів?

// console.log(5 > 4);
// true

// console.log(10 >= '7');

// console.log('2' > '12'); Порівняння через таблицю юнікодів
// юні код маленьких вище ніж великих

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);
// Example 8 - Логічні оператори

// Яким буде результат виразів?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);


// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
// if (maxLength >=message) {
//   result = message;
// }
//   else {
//     // result = message.slice(0, maxLength);
//     result =`${message.slice(0, maxLength)}...`;
//   }
//   /// Change code above this line
//   return result;
// }

// formatMessage('Nunc sed turpis a felis in nunc fringilla', 15);
// function checkForSpam(message) {
//   let result;
//   message = message.toLowerCase();
//   console.log(message)
//   // Change code below this line
// result = message.includes("sale") || message.includes("spam");

//   // Change code above this line
//   return result;
// }

// Example 1 - Базові операції з масивом

//     Створіть масив genres з елементами «Jazz» та «Blues».
//     Додайте «Рок-н-рол» до кінця.
//     Виведіть у консоль перший елемент масиву.
//     Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
//     Видаліть перший елемент та виведіть його в консоль.
//     Вставте «Country» та «Reggae» на початок масиву.

// const genres = ["Jazz", "Blues"];
// genres.push("Rock");
// console.log(genres.length)
// console.log(genres[genres.length - 1])
// console.log(genres.slice(0, 1)[0])
// Example 2 - Масиви та рядки

// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

//
// const values = '8 11';
// const valuesArray = values.split(" ");
// const a = Number (valuesArray[0])
// const b = Number(valuesArray[1]);
// const square = a * b;
// console.log(square)

// Example 3 - Перебір масиву

// Напиши скрипт для перебору масиву fruits циклом for.
// Для кожного елемента масиву виведи в консоль рядок у форматі
// номер_елемента: значення_елемента.Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// // for (let i = 0; i < fruits.length; i + - 1)
// // console.log(` ${i+1}: ${fruits[i]}`)
// for (const fruit of fruits) {
//   console.log(fruit);
// }
// Example 5 - Масиви та рядки

// Напиши скрипт, який виводить у консоль усі слова рядка крім
// першого і останнього.Результуючий рядок не повинен
// починатися або закінчуватися символ пробілу.Скрипт
// повинен працювати для будь - якого рядка.

// const string = 'Welcome to the future';
// перевести в строку
// const strArray = string.split(" ");
// видаляемо перший елемент
// strArray.shift()
// видаляемо останній елемент
// strArray.pop();
// переводимо до строки з пробілом
// const newString = strArray.join(" ")


// Example 6 - Масиви та рядки

// Напиши скрипт, який «розгортає» рядок
//   (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';
// const strArray = string.split(" ");
// strArray.reverse()
// const strNew = strArray.join(" ");
// abo
 
// const reverseStr = string.split("").reverse().join("")

// const string = 'Welcome to the future';
// 1. створення масиву яка буде зберігати результат і накопичувати значення
// 2. зробити із строки масив і перебрати його задом наперед
// 3. пушити в масив результату поточний символ
// 4. робимо із масиву резельтуту строку
// let newString = [];
// const stringArray = string.split("");
// for (i = stringArray.length - 1; i >= 0; i -= 1) {
//   console.log(stringArray[i]);
// newString.push(stringArray[i])
// }
// newString = newString.join("")
// console.log(newString)
// як змінити елементи місцями
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// let temp = langs[1]
// langs[1] = langs[2]
// langs[2]=temp
// Example 7 - Сортування масиву із циклом

// Напиши скрипт сортування масиву рядків
// в алфавітному порядку за першою літерою елемента.
// lengs.sort
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// 1. запустити цикл, який проходиться по всім iндексам елементам
// 2 запустити вкладений цикл який буде починатись з 1 шндексу не нульового
// 3 перевірка на порівняння преші букви сусідніх елементів
// 3.1 якщо бува зліва більша за букву справа то міняємо елементи місцями

// for (let i = 0; i < langs.length; i += 1) {
//   console.log(`El: ${langs[i]} | i: ${i}`)
//   for (let j = 1; j < langs.length; j += 1){
    
//   }
// }
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   let doArray = firstArray.concat(secondArray);
//   if ( doArray.length > maxLength) {
//     let forArray = doArray.slice(0, maxLength);
//     return forArray;
//   } else {
//     return doArray;
//   }


    // Change code above this line
//   // }
// function calculateTotal(number) {
//  // Change code below this line
//   let summa = 0
//   for (let i = 1; i <= number; i += 1) {
//      summa = summa + i
//   }
//   console.log(summa)
//   // return summa

//   // Change code above this line
// }
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0;  i < fruits.length; i+=1 ) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
// function calculateTotalPrice(order) {
//   let total = 0;
 
//   // Change code below this line
// for( i=0; i<=order[i]; i++ ) {
//   total = total + order[i];
// }
//   // Change code above this line
//   return total;
// }
// function calculateTotalPrice(order) {
//   let total = 0;
 
//   // Change code below this line
// for( const valueAll of order ) {
//   total +=valueAll;
// }
//   // Change code above this line
//   return total;
// }
// function findLongestWord(string) {
//   // Change code below this line
// let strAll = string.split(" ")
//   for (let i = 0; i <= strAll[i]; i+=1 ){
//  return string[i]
// }




//   // Change code above this line
//   return strAll
// }
// function findLongestWord(string) {
//   // Change code below this line
//   let longFF = string.split(" ")
// let longName = "";
// for ( const londerS of longFF) {
  
//     if (londerS.length > longName.length){
//       longName = londerS;
//     }
// }

// // for (let i = 0; i >= string; i+=1 ){
// //  strAll = strAll + string[i]
// // }


//   // Change code above this line
//   return longName;
// }

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   let total =0 ;
//   // const catT = min.concat(max)
//   // Change code below this line
// for( i = 0; i<=min; i => max){
//   total = min.push(1);
// }
//   // Change code above this line
//   return numbers;
// }
// function createArrayOfNumbers(min, max) {
//   const numbers = [min, max];
  

//   // Change code below this line
//   for (let i= 0; i = max.length; i + 1)
//   {
//     numbers += min[i];
// }
//   // Change code above this -
//   return numbers;
// }
// function filterArray(numbers, value) {
//   const newNumbers= []
//    // Change code below this line
//   for (let i = 1; i <= numbers.length; i++){
//   if (numbers[i]>value){
//   newNumbers.push(numbers[i])}
// }
// return newNumbers

//   // Change code above this line
// }
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let array3 = []
//   const hasArray = array1.includes(array2);
//   for ( let i =0; i<=array1.lenght; i +=1 )
//   if ( array1[i]>= array1[i].includes(array2[i])){
//     array3.push(array1[i])
//   }

// return array3
//  // Change code above this line

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let array3 = []
//   // const hasArray = array1.includes(array2);
//   for (const newArray of array1) {
//     if ( newArray === array2)
//   }
  

// return array3
//  // Change code above this line
// }
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// // const keys = Object.keys(products)
// // const values = Object.values(products)
// function getProductPrice(productName) {
//   // Change code below this line
// for ( const product of products){
//   if ( product.name === productName){
//    return product.price
//   }
//   return null
// }


//   // Change code above this line
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// const keys = []
// const allKeys = Object.keys(products)
//  const value = Object.values(products)
// function getAllPropValues(propName) {
//   // Change code below this line
 
// for( const product of products) {
//    keys.push(products[value])
// }

//   // Change code above this line
// }
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
  
// for ( const product of products){
//   // if (!(productName in product)) {return 0}
//    if ( product.name === productName){
//   return product.price*product.quantity
// }
//   else (!(productName in product)) return 0;
// }
//   // Change code above this line
// }
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//  const newData = {...data}
// const  {completed:newCompleted ,category: newCategory, priority:newPriority, text  } = newData
//   // Change code above this line
  
// }

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
  
//   console.log(`Delivering pizza ${pizzaName}.`);
// };
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName){
//   console.log (`Eat pizza ${pizzaName}.`)
// };
function makeTask(data) {
  // const completed = false;
  // const category = "General";
  // const priority = "Normal";
  // Change code below this line
const {completed, category, priority} = data;
const newData = {...data}
  const { completed: newCompleted, text } = newData;
   
  return newData;

  // Change code above this line
}

