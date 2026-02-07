// for of loop for array and strings

let arr = [1, 2, 3, 4, 5, 6 ,7]

for (const val of arr) {
    console.log(val);
}

let str = "Zohaib Khan";
for (const name of str) {
    switch (name) {
        case " ":
            continue
            break;
    
        default:
            console.log(`the char is ${name}`)
            break;
    }
}