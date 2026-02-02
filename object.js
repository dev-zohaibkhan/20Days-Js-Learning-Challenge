const stdClass = Symbol("HTML");
let std = {
    firstName : "zohaib",
    "last Name" : "khan",
    id: 20,
    [stdClass]:"Web Development",
    email:"lol@farcry.html",
    pass:2233
}

console.log(std.firstName);
console.log(std["last Name"]); // i reffer this way
console.log(typeof std.stdClass); // it's not working but no problem




