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

console.log(result(20,60));

let value = result(50, 60); // but this way is so beautifull from direct console.log
console.log(value);


