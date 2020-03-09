const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];



let filterArray = [];

function firstCharA(name) {
    return name.charAt(0) == "A"
}
filterArray = inventors.filter(firstCharA);
console.log(filterArray);



function CharN(name) {
    return name.includes("n");
}
const filterSecondArray = inventors.filter(CharN);
console.log(filterSecondArray);

let filterThirdArray = [];

function firstInit(name) {
    return name.charAt(0) + name[name.indexOf(' ') + 1]
}
filterThirdArray = inventors.map(firstInit);
console.log(filterThirdArray);


function checkEven(x) {
    return x % 2 === 0 || x === 0
}

let evens = numbers.filter(checkEven);
console.log(evens);



function checkTwoDigit(x) {
    return x > 9
}
let twoDigit = numbers.filter(checkTwoDigit);
console.log(twoDigit);



function firstName(name) {
    return name.split(' ')[0];
}

let filterArray = inventors.map(firstName);
console.log(filterArray);

function lengthName(name) {
    return name.length;
}

let filterLengthArray = inventors.map(lengthName);
console.log(filterLengthArray);

function capitalName(name) {
    return name.toUpperCase();
}

let filterCapitalArray = inventors.map(capitalName);
console.log(filterCapitalArray);

function checkTimesHundred(x) {
    return x * 100;
  }
  let hundredDigit = numbers.map(checkTimesHundred);
  console.log(hundredDigit);

  let newArray = []

for(let i =1; i<5 ;i ++){
  newArray.push(Math.pow(2,i))
}
console.log(newArray)




