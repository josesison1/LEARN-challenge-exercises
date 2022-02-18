// Challenges

// Write a function named marco that returns "polo".
const marco = () => {
  return "polo"
}

console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
  return `Welcome, ${name}!`
}

console.log(greeting("Jose"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return "even"
  } else {
    return "odd"
  }
}
console.log(oddOrEven(4))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
  return number * 3
}

console.log(triple(10));


// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (numOne, numTwo) => {
  return numOne * numTwo
}

console.log(multiply(5,5))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (numberOne, numberTwo) => {
  if (numberOne % numberTwo === 0) {
    return `${numberOne} is evenly divisible by ${numberTwo}`
  } else {
    return "These numbers are not divisible"
  }
}
console.log(divisibleBy(20,5));



// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (number) => {
  if (number >= 90) {
    return "You got a A."
  } else if (number >= 80){
    return "You got a B."
  } else if (number >= 70){
    return "You got a C."
  } else if (number >= 60){
    return "You got a D."
  } else {
    return "You failed"
  }
}

console.log(assignGrade(85))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (stringOne, stringTwo) => {
  if (stringOne > stringTwo) {
    return stringOne
  } else {
    return stringTwo
  }
}

console.log(isLonger("yo", "yooooo"));

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (numOne, numTwo) => {
  if (numOne > numTwo) {
    return numOne
  } else {
    return numTwo
  }
}

console.log(greaterNum(5, 10))


// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (string) => {
  return string.toUpperCase()
}

console.log(yelling("whats up bro"));

// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.
const helloWorld = (language = "en") => {
  if (language === "en") {
    return "Hello World"
  } else if (language === "es") {
    return "Hola Mundo"
  } else if (language === "tl") {
    return "Kamusta Mundo"
  } else if (language === "ja") {
    return "Konnichiwa sekai"
} else if (language === "de") {
  return "Hallo Welt"
}
}

console.log(helloWorld("de"))
console.log(helloWorld("tl"))
console.log(helloWorld("es"))
console.log(helloWorld())


// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
//
const pluralizer = (num, noun) => {
  if (num === 1) {
    return `${num}, ${noun}`
  } else {
    return `${num}, ${noun}s`
  }
}

console.log(pluralizer(5, "dog"))
console.log(pluralizer(1, "cat"))
console.log(pluralizer(2, "rabbit"))
// pluralizer(5, "cat")
// // expected output: "5 cats"
//
// pluralizer(1, "dog")
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
const pluralizers = (num, noun) => {
  if (noun === "sheep") {
    return `${num}, sheep`
  } else if (noun === "goose" && num > 1) {
    return `${num}, geese`
  } else if (noun === "child" && num > 1) {
    return `${num}, children`
  } else if (noun === "person" && num > 1) {
    return `${num}, people`
  } else {
    return "invalid input"
  }
}

console.log(pluralizers(5, "sheep"))
console.log(pluralizers(3, "goose"))
console.log(pluralizers(2, "child"))
console.log(pluralizers(10, "person"))
console.log(pluralizers(20, "ball"))
