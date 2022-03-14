# Challenges
# Write a loop that prints the numbers 1 to 20.

num = 1
while num <= 20
    puts num
    num += 1
end

# Write a loop that prints the numbers 1 to 20 using a different approach than previously used.

(1..20).each do |num|
    p num
end
    

# Write a loop that prints only even numbers from 20 to 0.

num = 20 
while num >= 0
    p num
    num -= 2
end

# Create a method that takes in an array of numbers and returns a new array with all the numbers multiplied by 5.

nums = [1,2,3,4,5]

def mult(arr)
    arr.map do |v|
    v * 5
    end 
end

p mult(nums)

# Create a method that takes in an array of lowercase words and capitalizes all of the words, permanently modifying the original array.

words = ['hello my name is jose', 'kendra is cool', 'nico is too']

def bigletters(arr)
    arr.map do |v|
        v.upcase 
end
end 

p bigletters(words)

# Create a method that takes in an array of numbers and returns the largest number in the array.

nums = [10,5,1000000,50,100]

def biggest(arr)
    arr.max()
end

p biggest(nums)

# Create a method that takes in an array of numbers and returns the smallest number in the array.

nums = [10,5,1000000,50,100]

def smallest(arr)
    arr.min()
end

p smallest(nums)


# Create a method that takes in an array of numbers and returns only the odd numbers sorted from least to greatest.

arr = [2, 7, 150, 5, 12, 69, 11, 13, 27]

def oddsort(ar)
    newArr = []
    ar.each do |i|
       if i % 2 != 0
       newArr << i
       end
end 
    newArr.sort
end

    p oddsort(arr)

# Create a method that takes in an array of strings and returns all the strings in reverse casing. All uppercased letters should be returned lowercased and all lowercased letters should be returned uppercased.

strings = ['HEY what ARE you GUYS up TO']

def ayo(str)
    str.join("").swapcase.split(" ")
end

p ayo(strings)

# Create a method that takes in an array of words and returns all the words that start with a particular letter. Ex) Given the array ['Apple', 'Avocado', 'Banana', 'Mango'] and the letter 'a' the method should return ['Apple', 'Avocado']. With the same method, given the letter 'm' should return ['Mango'].

awords = ['Apple', 'Avocado', 'Banana', 'Mango']

def aword(arr)
    arr.select do |val|
        val[0].include?('A')
    end
end 
p aword(awords)

# FIZZBUZZ
# Write a method that prints the numbers from 1 to 100. For multiples of three print Fizz instead of the number, for multiples of five print Buzz instead of the number, for numbers that are multiples of both three and five print FizzBuzz, for all other numbers print the number.

def fizzbuzz
  (1..100).each do |i|
    if i % 3 == 0 && i % 5 == 0
      puts 'fizzbuzz'
    elsif i % 3 == 0
      puts 'fizz'
    elsif i % 5 == 0
      puts 'buzz'
    else
      puts i
    end
  end
end

fizzbuzz




