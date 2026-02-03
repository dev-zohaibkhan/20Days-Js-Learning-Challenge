// function result(num1, num2){
//     console.log(num1 + num2);
// }
// result // in this method only defined a refrence not execution
// result(10, 20)
// result(10, "2") // 102 because of js auto conversion
// result(10 , "z")

// function result(num1, num2){
//     let result =  num1 + num2
//     return result
// }
// result(20, 40) // in this way the output is not printed because you return the value but not execute the value you need the variable to store this function and excute or directly console.log to execute this function

// console.log(result(20,60));

// let value = result(50, 60); // but this way is so beautifull from direct console.log
// console.log(value);


// rest operator
// function shopingCart(...carts){ // i used a rest operator
//     return carts
// }
// console.log(shopingCart(2, 3, 5 ,6));  // the fucntion give me an array and add all the arguments

// function with objects

// let user = {
//     name: "zohaib khan",
//     class: "web developement"
// }

// function userData(userData){
//     console.log(`Username is ${userData.name} and the Class is ${userData.class}`);
// }
// userData(user) // this method is professional
// userData({
//     name: "Zohaib Khan",
//     class: "Web Development"
// })

// function with arrays

// let nums = [100, 200, 400, 600];

// function returnNums(eachNum){
//     return eachNum[2]
// }
// let finalVal = returnNums(nums)
// console.log(finalVal);


// Tip = in scope the child access the parent values but the parent cannot access the child values

// if(true){
//     let username = "zohaib";
//     if(username === "zohaib"){
//         let website = " Facebook";
//         console.log(username + website)
//     }
//     console.log(website); // in this case they give an error
// }
// console.log(username); // same in this case give an error because of scope


// Definition of Expression
// let num = function(val){ // those function which can include inside in variable is called expression
//     return val + 3
// }
// console.log(num(3));

// Explicit mean if you can use the (return) keyword this is explicit
// implicit mean if you cannot use the (return) keyword directly work this is implicit like below code

// let addNum = (num1, num2) => num1 + num2; // in this time you are not using the Parentheses brackets
// let addVal = (num3, num4) => (num3 + num4) // in this time you are using the Parantheses brackets but the output is same there is no error 


// IIFE (imediately invoked function)

// we used IIFE for some reason some time the gloabal execution populate in our vaiable for removing this population we used IIFE

(function username() {
    console.log("Jus testing")
    
})(); // there is two paraentheses brackerts the first one is for function definiton and the second one is for function execution
// Tip = use the statement terminator after fucntion execution in IIFE because js is not include a statment terminator by default in this method

