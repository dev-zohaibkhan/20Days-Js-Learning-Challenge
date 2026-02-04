let user = "zohaib";
let pass = 1122;

if(user === "zohaib" && pass === 1122){
    let otp = 4567;
    if(otp === 4567){
        console.log("Welcome to Dashboard!");
    }else{
        console.log("You Entered Wrong OTP!");
        
    }
}else{
    console.log("You Entered Wrong Username/Password");
    
}

// Switch Statments
let day = "Frieday";

switch(day){
    case "Sunday":
        console.log("today is Sunday");
    break
    case "Monday":
        console.log("today is Monday");        
    break
    case "Tuesday":
        console.log("today is Tuesday");        
    break
    case "Wednesday":
        console.log("today is Wednesday");        
    break
    case "Thersday":
        console.log("today is Thersday");        
    break
    case "Frieday":
        console.log("today is Frieday");        
    break
    case "Saturday":
        console.log("today is Saturday");        
    default:
        console.log("Plese enter the correct Day!");
        break

}


// Nullish Coslescing Operator
let val;
// val = 6 ?? 9; // the output is 6
// val = null ?? 9 // the outpus is 9 because its check a safety
val = undefined ?? 5 // the output is 5 because the first value is undefined and its check safety
console.log(val);


// Ternary Operator

let marks = 75;

marks >= 70 ? console.log("Grade A") : console.log("Grade B");

