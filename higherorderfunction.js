// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.
//
// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

//PSEUDO CODE
// create a function
// use the .map method to iterate through the variable given
// multiply each value by 10
// return new values
// console log the function


var arr1 = [3, 9, 15, 4, 10]
// // --> [30, 90, 150, 40, 100]

const multiply = arr => {
  let multBy10 = arr.map((value) => {
    return value * 10
  })
  return multBy10
}

console.log(multiply(arr1))


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// // --> [7, 3, 5, 13]

//create a function
// must take values as parameters
// use .filter method to filter out the even numbers
// return numbers that are not odd
// console log the odd numbers

const onlyOdds = arr2.filter(value => {
  return value % 2 !== 0
})

console.log(onlyOdds);


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // --> "nicework"

//PSEUDO CODE
//create function
// must take in an array as parameter
//declared a new variable called newString
// use .filter to filter out numbers and boolean and only return strings
// returned newString w/ the use of .join method to get rid of spaces
// logged the function w/ the given variable

const findString = (array) => {
  let newString = array.filter(value => {
    return typeof value === "string"
  })
  return newString.join("")
}

console.log(findString(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
// // --> [58, "abcd", true]

// PSEUDO CODE
//create a function
// takes an array as parameters
// use .filter method to filter out false, null, 0, and empty strings
//return the new variable that includes number, string, and true
// log by calling onto the function name along with the variable provided

const wordsNum = (array) => {
  let newWords = array.filter(value => {
    return value !== 0 && value !== false && value !== " " && value !== null
  })
  return newWords
}
console.log(wordsNum(filterArrayValues))


// STRETCH Challenges

// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome"
// // --> "jvscrpt s wsm"

//PSEUDO CODE
//create a function
// must take in a value as parameter
// use .split method to separate the string and turn into an array
// declare new variable
// use .filter to filter out the vowels of a,e,i,o,u
//return new string without vowels
// use .join to turn into a string
// log function name w/ the given variable as the argument

const noVowels = (strings) => {
  let arr = strings.split("")
  var string = arr.filter(value => (
    value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
  ))
    return string.join("")
}
console.log(noVowels(str))



// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]
// // --> [3, 7, 10, 5, 4, 8, 2, 1]

//PSEUDO CODE
// create a function
// must take in 2 arrays as parameters
// create new variable to store new values once arrays are merged together
// use .concat method on the 2 variables provided and store in the new variable created
// use .filter method that takes in a value and index, ?????
// ?????
// return new variable
// log the function along with the 2 variables as arguments

const twoArrays = (array1, array2) => {
  let bothArrays = arr1.concat(arr2)
  let singleArray = bothArrays.filter((value, index) => {
    return bothArrays.indexOf(value) === index
  })
  return singleArray
}
console.log(twoArrays(arr1,arr2))
