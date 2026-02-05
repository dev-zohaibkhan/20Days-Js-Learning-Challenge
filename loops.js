// for loop
// Half Pyramid using Js

for(let i = 1; i <=10; i++){
    console.log("* ".repeat(i)); 
}
    console.log("Break....");
    
// Pyramid Using Js
let n = 10;
for(let i = 1; i <= n; i++){
    console.log("   ".repeat((n - i)) + " * ".repeat(i * 2 - 1));
}

console.log("break...");

// Print something new

let items = ["books", "pens", "papers", "copies"];
for(let index = 0; index < items.length; index++){
    console.log(`the items is ${items[index]}`);
}

// break and continue Statments
// break Statments

for(let i= 1; i<5; i++){
    if(i == 3){
        console.log("Breaked");
        break // the value is not printing after apply break statments
    }
    console.log(`the value is ${i}`);
}

// Continue Statments
for(let i= 1; i<5; i++){
    if(i == 3){
        console.log("Continued");
        continue // the value is not printing after apply break statments
    }
    console.log(`the value is ${i}`);
}
