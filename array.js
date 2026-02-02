let programmingLang= ["Python", "PHP", "JavaScript", "Ruby"];
programmingLang.push("Java", "C#")
programmingLang.pop()
programmingLang.unshift("Rust")
programmingLang.shift()
let slice = programmingLang.slice(0, 3)
console.log(slice);
console.log(programmingLang)
let splice = programmingLang.splice(1,2)
console.log(splice)
console.log(programmingLang)