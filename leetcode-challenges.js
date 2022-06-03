Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

 
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


******************** PSEUDO CODE ********************
//create a function that takes in 2 parameters, an array and a number
//out of the list of numbers in the array, return the index of 2 numbers that 
//would give you the sum of the "target" parameter

//ex. nums = [1,2,3,4], target = 5
//return [ 0,3 ]

//iterate through nums w/ a loop to find the index of the first number
//create another inner loop to iterate to find the second number 
//create a conditional to check whether 2 numbers add up to the "target"
//implement logical operator (&&) to ensure the 2 numbers are not the same index
//return the index of the 2 numbers that add up to the number of "target"

numss = [1,2,3,4]
target = 5

const answer = (nums, target) => {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 0; j <= nums.length; j++) {
            if (nums[i] + nums[j] === target && i != j){
                return [i, j]
            }
        }
    }
}
console.log(answer(nums, target))
