// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]


let friends = ["Jose", "Maria", "Jacob", "Adam"]

const friend = (array) => {
     let newFriend = array.filter(value => {
        return value.length === 4
    })
   return newFriend
}
console.log(friend(friends))



// In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.
// Note: Both arrays have the same dimensions.


let arr1 = [10, 23, 44, 52, 8]
let arr2 = [4, 23, 31, 50, 69]

const bigger = (array1, array2) => {
    let newArr = []
    for (let i=0; i<array1.length; i++) {
        if(array1[i] > array2[i]) {
         newArr.push(array1[i])
        } else{
         newArr.push(array2[i])
        }
    }
    return newArr
}

console.log(bigger(arr1, arr2))


// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.


let ar1 = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
let ar2 = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

const geese = (arr, brr) => {
    let newArrr = []
    for (let i = 0; i < brr.length; i++) {
        if (!arr.includes(brr[i])) {
            newArrr.push(brr[i])
        } 
    }
    return newArrr
}

console.log(geese(ar1,ar2))

// OR 

const geeses = (array1, array2) => {
    let newArray = array2.filter(array2 => ! array1.includes(array2)) 
    return newArray
}

console.log(geeses(arrr1,arrr2))



// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")


const findNeeldle = (arr) => {
    for (let i=0; i < arr.length; i++)
    if (arr[i].includes("needle")){
        return `found the needle at position ${arr.indexOf("needle")}`
    } 
}

// OR

const findNeedle = (arr) => {
    return `found the needle at position ${arr.indexOf('needle')}`
    }

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))




// PALINDROME

var palin = "racecars"

const palindrome = (str) => {
    let rev = str.split(" ").reverse().join()
    if (rev === str) {
        return true
    }
    return false
}


console.log(palindrome(palin))




// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, operator){
  if (operator === "add") {
    return a + b 
  } else if (operator === "subtract") {
    return a - b 
    } else if (operator === "multiply") {
    return a * b 
    } else if (operator === "divide") {
    return a / b 
    }
}





// Given a string, swap the case for each of the letters.

// Examples
// ""           -->   ""
// "CodeWars"   -->   "cODEwARS"
// "abc"        -->   "ABC"
// "ABC"        -->   "abc"
// "123235"     -->   "123235"

function swap(str){
let newStr = ""
for(let i=0; i < str.length; i++){
  if (str[i] === str[i].toUpperCase()){
      newStr += str[i].toLowerCase()
  } else {
      newStr += str[i].toUpperCase()
  }
}
  return newStr
}



//Given a sequence of numbers, find the largest pair sum in the sequence.

// For example
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

function largestPairSum (numbers) {
  numbers.sort((b,a) => a-b)
  return numbers[0] + numbers[1]
}


// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:
// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
  let newname = name.toLowerCase() 
  let newnew = newname[0].toUpperCase() + newname.slice(1)
  return `Hello ${newnew}!`
}




// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)){
    return true
  } else {
    return false
  }
}




// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let newStr = str.toLowerCase().split("")
  let ex = []
  let oh = []
  console.log(newStr)
     
  for(let i=0; i < newStr.length; i++) {
    if (newStr[i] === "x") {
      ex.push(newStr[i])
    } else if (newStr[i] === "o") {
      oh.push(newStr[i])
    }
    }
  if (ex.length === oh.length){
    return true
    } else {
    return false
    }
  }
       
       
       
// DESCRIPTION:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3    
       
   function stray(numbers) {
    let strayChar = numbers[0]

    if (strayChar !== numbers[1] && strayChar !== numbers[2]) {
      return strayChar
     }
        
    for(let i = 1; i < numbers.length; i++){
      if(strayChar !== numbers[i]) {
           return numbers[i]
      }
    }    
 }



// DESCRIPTION:
// You can print your name on a billboard ad. Find out how much it will cost you. 
// Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).


function billboard(name, price = 30){
  let sum =0;
  
  for (let i=1;i <= name.length;i++){
    sum += price
  }
  return sum
} 




// DESCRIPTION:
// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

// You need to create a function that converts the input into this format, 
// with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"

function spongeMeme(sentence) {
  const newWord =  sentence.split("").map((v, i) => {
    if (i % 2 !== 0) {
      return v.toLowerCase()
    } else {
      return v.toUpperCase()
    }
  })
  return newWord.join('')
  }




// DESCRIPTION:
// You were camping with your friends far away from home, but when it's time to go back, 
// you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, 
//      your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  console.log(distanceToPump, mpg, fuelLeft)
  
  const gas = fuelLeft * mpg
  
  if (gas === distanceToPump || gas > distanceToPump){
    return true
  } else if (gas < distanceToPump) {
    return false
  }
}




// DESCRIPTION:
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


function betterThanAverage(classPoints, yourPoints) {
  let sum = 0
  for (let i=0; i < classPoints.length; i++) {
    sum += classPoints[i]
    }
  
  let avg = sum / classPoints.length  
  if (yourPoints > avg) {
    return true
  } else {
    return false
  }
  }




// DESCRIPTION:
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.


var min = function(list){
    
  return Math.min(...list)
}

var max = function(list){
    
  return Math.max(...list)
}




// DESCRIPTION:
// You are given two sorted arrays that both only contain integers. 
// Your task is to find a way to merge them into a single one, sorted in asc order. 
// Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. 
// If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function mergeArrays(arr1, arr2) {
  let newArr = []
  for(let i=0; i < arr1.length; i++) {
    if(newArr.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i])
    }
  }
  for(let i=0; i < arr2.length; i++){
    if(newArr.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i])
    }
  }
  return newArr.sort((a,b) => a-b)
}
