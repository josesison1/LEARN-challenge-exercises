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
// console.log(friend(friends))



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

// console.log(bigger(arr1, arr2))


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

// console.log(geese(ar1,ar2))

// OR 

const geeses = (array1, array2) => {
    let newArray = array2.filter(array2 => ! array1.includes(array2)) 
    return newArray
}

// console.log(geeses(arrr1,arrr2))



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

// console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))





// PALINDROME

var palin = "racecars"

const palindrome = (str) => {
    let rev = str.split(" ").reverse().join()
    if (rev === str) {
        return true
    }
    return false
}


// console.log(palindrome(palin))