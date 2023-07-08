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
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); //answer: Maya
console.log(second); //answer: Marisa
console.log(third); //answer: Chi
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
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // answer: [10, 30,20]
