// filter return a copy of an array not change in original array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let storeNum = numbers.filter((num) => num > 3) // suing implicit
// console.log(storeNum)
let otherNum = numbers.filter((num) => {
    return num > 5 // in under a scope the return keyword is manadarity
})
console.log(otherNum);
console.log(numbers)