//1️⃣ What does the following code return/print?
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); // answer: 8
// console.log(yearNeptuneDiscovered); // answer:1846
//2️⃣What does the following code return/print?
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
//3️⃣What does the following code return/print?
function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // answer:"Your name is Alejandro and you like purple"
getUserData({ firstName: "Melissa" }); // ?
getUserData({}); // answer:"Your name is Melissa and you like green."
