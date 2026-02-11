// filter return a copy of an array not change in original array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let storeNum = numbers.filter((num) => num > 3) // suing implicit
// console.log(storeNum)
let otherNum = numbers.filter((num) => {
    return num > 5 // in under a scope the return keyword is manadarity
})
// console.log(otherNum);
// console.log(numbers)

// map  not changing on original array 
let num = [1, 2, 3, 4, 5, 6, 7, 8]
let newNums = num.map((eNum) => (eNum * 2))
// console.log(newNums);

// method channing mean apply multiple map are same method like filter and etc and each item
let newNumber = num.map((eachNum) => eachNum * 3).map((eachNum) => eachNum + 2).filter((eachNum) => eachNum > 10)
// console.log(newNumber);

// reduce method 
let initalVal = 1;
let totalNum = num.reduce((acc, currVal) => {
    // console.log(`acc is ${acc} and curr value is ${currVal}`);  
    // return acc + currVale
}, initalVal)
// console.log(totalNum);

// Capitalize Names
let names = ["zohaib", "khan", "ali", "khan"]
let capitalizeNames = names.map((capName) => capName.charAt(0).toUpperCase() + capName.slice(1))
// console.log(capitalizeNames)

// Double the Numbers
let numBers = [5, 10, 15, 20, 25, 60]
let doubled = numBers.map((dbl) => dbl + dbl)
console.log(doubled)

// Add Currency Symbol

let prices = [100, 250, 400, 800, 2000];
let dolarPrice = prices.map((dPrice) => `$${dPrice.toString()}`)
console.log(dolarPrice)

// Get Word Length

let words = ["html", "css", "javascript", "react"];
let length = words.map((length) => length.length)
console.log(length);

// Extract Specific Property

let users = [
  { id: 1, name: "Ali", email: "ali@gmail.com" },
  { id: 2, name: "Ahmed", email: "ahmed@gmail.com" },
  { id: 3, name: "Zohaib", email: "zohaib@gmail.com" }
];

let emails = users.map((email) => email.email)
console.log(emails);

