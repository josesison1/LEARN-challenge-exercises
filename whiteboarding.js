

// ******** WHITEBOARDING INTERVIEW QUESTIONS ******** //

//PROMPT: create a function that takes in a string of array and output the array in all upperCase

// input: string of array
// output: string of array in all UPPERCASE

//create a function
//must take in array as parameter
//iterate through the array using a for loop
//access each index in the array and pushing it into a new variable
//create new variable
//utilize .upperCase method to turn each index into uppercase
//return the new variable
//log by calling onto the function name and setting the variable as argument

//input example
var arr = ["make", "me", "uppercase"]

//function initialization
const upperCase = (array) => {
  //declared new empty array
  var capitalize = []
  //loop for iteration through each index inside the array
  for (var i = 0; i < array.length; i++) {
    //accesssing each index of the array and pushing them into the new variable
    //utilizing .toUpperCase method to turn each index into uppercase
    capitalize.push(array[i].toUpperCase())
  }
  //return new array created that contains the new uppercased elements
  return capitalize
}
//log by calling onto the function name and calling onto the variable as argument
console.log(upperCase(arr))

//----------------------------------------------------------------------------//

//PROMPT: Given an array of different value types, return only the string values

//input: array with different value types
//output: array with only the strings value types

//create a function
//must take in an array as parameter
//declare new variable to store new array
//iterate through the array
//push the index of the array only if they are string type values
//return new variable that includes the strings


//input example
var list = ["jose", 12, true, "ryan"]

//initializing a function
const onlyNames = (array) => {
  //declare new variable containing an empty array
  var newName = []
  //iterate through the length of the array
  for (let i = 0; i < array.length; i++) {
    //conditional statement to only find the value that is a string
    if (typeof array[i] === "string")
    //utilize .push method to transfer the value that is a string into the new variable
    newName.push(array[i])
  }
  //return new variable that contains only strings type
  return newName
}
//log by calling onto the function name and referring to the variable as argument
console.log(onlyNames(list))

//----------------------------------------------------------------------------//
