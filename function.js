// function result(num1, num2){
//     console.log(num1 + num2);
// }
// result // in this method only defined a refrence not execution
// result(10, 20)
result(10, "2") // 102 because of js auto conversion
// result(10 , "z")

function result(num1, num2){
    let result =  num1 + num2
    return result
}
result(20, 40) // in this way the output is not printed because you return the value but not execute the value you need the variable to store this function and excute or directly console.log to execute this function

// console.log(result(20,60));

// let value = result(50, 60); // but this way is so beautifull from direct console.log
// console.log(value);


// rest operator
function shopingCart(...carts){ // i used a rest operator
    return carts
}
console.log(shopingCart(2, 3, 5 ,6));  // the fucntion give me an array and add all the arguments

// function with objects

let user = {
    name: "zohaib khan",
    class: "web developement"
}

function userData(userData){
    console.log(`Username is ${userData.name} and the Class is ${userData.class}`);
}
// userData(user) // this method is professional
userData({
    name: "Zohaib Khan",
    class: "Web Development"
})

// function with arrays

let nums = [100, 200, 400, 600];

function returnNums(eachNum){
    return eachNum[2]
}
let finalVal = returnNums(nums)
console.log(finalVal);

