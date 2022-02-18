// Challenges

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var inBudget = 85

if (inBudget <= 100) {
    console.log("in budget");
} else {
    console.log("not in budget")
}


// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true;

if (hungry === true) {
    console.log("eat food")
} else {
    console.log("keep coding");
}


// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "green"

if (trafficLight === "green") {
    console.log("go!")
} else if (trafficLight === "yellow") {
    console.log("slow down");
} else if (trafficLight === "red") {
} else {
    console.log("enter a color");
}


// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var num = 10
var numOne = 5

if (num > numOne) {
    console.log(num);
} else {
    console.log(numOne);
}


// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var number = 4

if (number === 0) {
    console.log("zero")
} else if (number % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}


// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var score = 80

if (score === 100) {
    console.log("perfect score!")
} else if (score >= 90) {
    console.log("you got a A");
} else if (score >= 80) {
    console.log("you got a B");
} else if (score >= 70) {
    console.log("you got a C");
} else if (score >= 60) {
    console.log("you got a D");
} else if (score >= 50) {
    console.log("you got a F");
} else if (score >= 0) {
    console.log("no grade available");
} else {
    console.log("enter a number");
}


// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
var whatType = "yoooo"
console.log(typeof whatType)


// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

var password = "thisisanawesomepassword"

if (password.length >= 12 && password.includes("!")) {
    console.log("that is a mighty strong password!")
} else if (password.length >= 8 || password.includes("!")) {
    console.log("That password is strong enough")
} else {
    console.log("That is not a valid password.")
}