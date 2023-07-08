//1️⃣Object Destructuring: What does the following code return/print?
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); // answer: 8
// console.log(yearNeptuneDiscovered); // answer:1846
//2️⃣Object Destructuring: What does the following code return/print?
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); //
//answer:
//{yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659,
// };
//3️⃣Object Destructuring: What does the following code return/print?
function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // answer:"Your name is Alejandro and you like purple"
getUserData({ firstName: "Melissa" }); // ?
getUserData({}); // answer:"Your name is Melissa and you like green."
//1️⃣Array Destructuring: What does the following code return/print?
// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); //answer: Maya
// console.log(second); //answer: Marisa
// console.log(third); //answer: Chi
//2️⃣Array Destructuring: What does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops); //answer: Raindrops on roses
console.log(whiskers); //answer: whiskers on kittens
console.log(aFewOfMyFavoriteThings); //answer:["Bright copper kettles",
//   "warm woolen mittens",
//   "Brown paper packages tied up with strings"]
//3️⃣Array Destructuring: What does the following code return/print?
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];

// console.log(numbers); // answer: [10, 30,20]

//ES2015 Refactoring**********
//1️⃣ES5 Assigning Variables to Object Properties
// var obj = {
//   numbers: {
//     a: 1,
//     b: 2,
//   },
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;
/* Write an ES2015 Version */
let obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};
let {
  numbers: { a, b },
} = obj;
console.log(a);
console.log(b);

//2️⃣ES5 Array Swap
// var arr = [1, 2];
// var temp = arr[0];
// 1;
// arr[0] = arr[1];
// arr[1] = temp;
/* Write an ES2015 Version */
let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];
//3️⃣raceResults()Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array
// Write a one line function to make this work using:
// 1. An arrow function
// 2. Destructuring
// 3. ‘Enhanced’ object assignment (same key/value shortcut)
// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/
// function raceResults(arr) {
//   const [first, second, third, ...rest] = arr;
//   return { first, second, third, rest: [...rest] };
// }
const raceResults = (arr) => {
  const [first, second, third, ...rest] = arr;
  return { first, second, third, rest: [...rest] };
};
