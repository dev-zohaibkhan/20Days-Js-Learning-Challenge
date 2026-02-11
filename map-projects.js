// Capitalize Names
let names = ["zohaib", "khan", "ali", "khan"]
let capitalizeNames = names.map((capName) => capName.charAt(0).toUpperCase() + capName.slice(1))
console.log(capitalizeNames)

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

