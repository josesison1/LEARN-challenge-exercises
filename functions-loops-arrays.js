// Challenges
// Don't forget to pseudo code.


// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// output: [9, 27, 45, 12, 30]

var testArr1 = [3, 9, 15, 4, 10]

var newArray = []

const firstArray = (array1) => {
  for (let i=0; i < array1.length; i++) {
    newArray.push(array1[i] * 3)
  }
  return newArray
}
 console.log(firstArray(testArr1));



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// output: --> [-7, 3, 5, 13]

var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
var newArr2 = []

const secondArray = (array2) => {
  for (let i=0; i < array2.length; i++) {
    if (array2[i] % 2 !== 0) {
      newArr2.push(array2[i])
    }
  }
  return newArr2
}

console.log(secondArray(testArr2))



// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// output: --> "nicework"

var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
var letters = []

const thirdArray = (array3) => {
  for (let i=0; i < array3.length; i++) {
    if (typeof array3[i] === "string") {
      letters.push(array3[i])
    }
  }
  return letters.join("")
}
console.log(thirdArray(comboArr))



// Create a function that takes in an array of numbers and returns the sum.
var addThese1 = [1, 2, 3, 4]
// // --> 10

var addThese2 = []
// // --> 0

var sum = 0
const addItUp = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return sum
}
console.log(addItUp(addThese1))
console.log(addItUp(addThese2))



// Create a function that takes in an array of numbers and returns the index of the largest number.
var indexHighestNumber = [1, 4, 2, 3]
// output: --> 1
var newNum5 = []

const largestNum = (numnum) => {
  for (let i=0; i < numnum.length; i++) {
    if (newNum5 < numnum) {
      newNum5++
    }
    return newNum5
  }
}

console.log(largestNum(indexHighestNumber))

// STRETCH Challenges
// Create a function that takes in two arrays and returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]

const noDup = (array1, array2) => {
  var combinedArr = array1.concat(array2)
  var newArr = []
  for (let i = 0; i < combinedArr.length; i++) {
    if (newArr.indexOf(combinedArr[i]) === -1) {
    newArr.push(combinedArr[i])
    }
  }
  return newArr
}
console.log(noDup(arr1,arr2))



// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
var arrayLength = 6
var arrayValue = 0
// output:b [0, 0, 0, 0, 0, 0]

var arrayLength1 = 4
var arrayValue1 = 11
// output: [11, 11, 11, 11]


const twoArray = (arrayy1, arrayy2) => {
  var newArrs = []
  for (let i = 0; i < arrayy1; i++) {
    newArrs.push(arrayy2)
  }
  return newArrs
}
console.log(twoArray(arrayLength, arrayValue))
console.log(twoArray(arrayLength1, arrayValue1))




// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
var addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // --> 10

var addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // --> 55

var addUp3 = 600
// // --> 180300

const addEmUp = (num) => {
  let counter = 0

  for (let i = 0; i <= num; i++){
    counter += i

  }
  return counter
}
console.log(addEmUp(addUp1))
console.log(addEmUp(addUp2))
console.log(addEmUp(addUp3))




// EPIC Challenges
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
