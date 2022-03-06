

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
//output: ["MAKE", "ME", "UPPERCASE"]

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

//OR

//function declaration that takes an array w/ different values
const onlyNames = (array) => {
  //create new variable to store new filtered array
  var newArr = array.filter(value => {
    //only return the values that is type of string
    return typeof value === "string"
  })
  //return new variable created that contains string values
  return newArr
}

  console.log(onlyNames(list))
//output: ["jose", "ryan"]

//----------------------------------------------------------------------------//

// PROMPT: Given a string of different names, take the first letter of
// each name and output those letters collected into a string

//input: "Eddie, Lauren, Jay, Maria, Mike"
//output: ELJMM

//create a function
//must take in a string as a parameter
//declare a new variable and set it to the input and use the split method - 
//to separate each name into it's own array, and use .map() to iterate
//through the array and return each 0 index, which will be stored
//in the new variable, return the new variable which will contain 
//the first letters of every name and use .join() method to return
//it back into a string

//input example:
let names = "Eddie, Lauren, Jay, Maria, Mike"

//function declaration, taking a string parameter
const letter = (string) => {
  //declaring new variable and set it to the value of the input,
  //splitting each name into its own array and iterating through
       let letters = string.split(" ").map(value => {
         //return each value at 0 index
        return value[0]
    })
       //return the new variable containing the first letters of every word
       //use join method to turn the array back into a string
    return letters.join("")
}
    console.log(letter(names))
//output: ELJMM
