// Arrays Challenges

// Consider the variable:
var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
console.log(groceryList.push("soda"))
console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.
var add = "granola"
console.log(groceryList.concat(add))

// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(0,2));

// Write the code that will add "beans" to the "chips" and "dip" array.
var newItem = "beans"
console.log(groceryList.slice(0,2).concat(newItem));

// Consider the variable:
var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
console.log(numbers.unshift("0"));
console.log(numbers)

// Write the code that will add the number 12 to the end of the array.
console.log(numbers.push(12));
console.log(numbers)


// Write the code that will remove the first number from the array.
console.log(numbers.shift())
console.log(numbers)


// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var newNum = "0 "
console.log(newNum.concat(numbers))

// Consider the variable:
var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2));

// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))

// Write the code that returns the number at the third index.
console.log(numSet[3])

// Consider the variable:
var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""))


// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charReversed = characters.reverse()
console.log(charReversed)


// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charReversed.join("*"))



// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charReversed.join(""))



// Create two arrays consisting of three first names of your cohort members in each.
var studentOne = ["Jacob", "Ryan", "Marc"]
var studentTwo = ["Tiffany", "Dane", "Omar"]



// Write the code that sorts the names in alphabetical order.
console.log(studentOne.sort())
console.log(studentTwo.sort())


// Write the code that sorts the names in reverse alphabetical order.
console.log(studentOne.reverse())
console.log(studentTwo.reverse())



// Write the code that sorts all the names in alphabetical order in a single array.
var allStudents = studentOne.concat(studentTwo)
console.log(allStudents.sort())

// Consider the variables:
var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.
for (let i=0; i < numbers.length; i++) {
    newNum = numbers[i]
    if (newNum % 2 !== 0) {
        console.log(newNum)
    }
}

// Write the code that adds the values from odd indexes into the oddIndexes array.
for (let i=0; i < numbers.length; i++) {
    newNum = numbers[i]
    if (newNum % 2 !== 0) {
        oddIndexes.push(newNum)
    }
}
console.log(oddIndexes)
