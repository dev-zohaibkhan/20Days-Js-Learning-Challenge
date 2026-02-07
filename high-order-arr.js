// for of loop for array and strings

let arr = [1, 2, 3, 4, 5, 6 ,7]

for (const val of arr) {
    // console.log(val);
}

// let str = "Zohaib Khan";
// for (const name of str) {
//     switch (name) {
//         case " ":
//             continue
//             break;
    
//         default:
//             console.log(`the char is ${name}`)
//             break;
//     }
// }

// map method is know for unique value 
let map = new Map();
map.set('PAK', 'Pakistan')
map.set('In', 'India')
map.set('AFG', 'Afghanistan')
map.set('In', 'India')
console.log(map);

// how can i print all the key and values of a map method using for of loop ( used of aray destructuring)
for (const [key, values] of map) {
    // console.log(key, values);
}

// for in loops using objects

let obj = {
    cpp : 'C++',
    js : 'Javascript',
    php : 'PHP'
}
for (const values in obj) {   
    // console.log(`${values} shortcut for ${obj[values]}`);   
}

// for in loop using array

let array = [3, 5, 6, 7, 8, 3]
for (const key in array) {
    // console.log(`${key} index of ${array[key]}`);
}


// for each loop for arrays ( mostly used loop for array )

let lang = ['cpp', 'python', 'html', 'css']
lang.forEach((val) => {
    console.log(val);
    
})

