const stdClass = Symbol("HTML");
let std = {
    firstName : "zohaib",
    "last Name" : "khan",
    id: 20,
    [stdClass]:"Web Development",
    email:"lol@farcry.html",
    pass:2233
}

// console.log(std.firstName);
// console.log(std["last Name"]); // i reffer this way
// console.log(typeof std.stdClass); // it's not working but no problem

let teacher = {
    firstName : "zaid",
    lasatName : "khan",
    email : "teacher@google.com",
    id : 2299,
    pass : 1234
}

let obj1= {
    1 :"a",
    2 : "b",
}
let obj2= {
    3 :"a",
    4 : "b",
}
let obj3= {
    5 :"a",
    6 : "b",
}

// let combine = Object.assign(obj1 , obj2, obj3)
// console.log(combine);

let add = {...obj1, ...obj2, ...obj3}
console.log(add);

// object de-structuring

let {email, firstName} = teacher; // this is object de-structuring
console.log(firstName ,email);



 