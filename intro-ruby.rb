
#Ruby Challenges
#Arithmetic Challenges
#Remember that floats are numbers with a decimal point whereas integers have no fractional part so in Ruby, 1 and 1.0 are different types of things with slightly different behaviors.


# Add, subtract, multiply and divide some numbers and floats.
p 2 + 5
p 50 - 10
p 10 * 10
p 5 / 2
p 100 / 5.5

# Find the remainder of dividing two numbers using the modulo operator (%).
p 50 % 10

# Divide a number by 0.
# p 50 / 0

# Divide 0 by 0.
# p 0 /0 

# Variables Challenges
# Set a variable called my_favorite_number equal to your favorite number
my_favorite_number = 69

# Calculate your favorite number divided by 2
p my_favorite_number / 2

# Set another variable called someones_favorite equal to 13
someones_favorite = 13

# Change the value of someones_favorite to 7
someones_favorite = 7
p someones_favorite

# Subtract my_favorite_number from someones_favorite
p my_favorite_number - someones_favorite

# Change the value of my favorite number to be 26 times its current value
p my_favorite_number * 26

# Strings Challenges
# Create a variable and return it in a sentence string interpolation
name = 'jose'
p "Hey, what's up #{name}!"

# Create a variable that contains a string and test some of the Ruby string methods
# .upcase
p name.upcase

# .reverse
p name.reverse

# .include?
p name.include?('o')

# .capitalize
p name.capitalize

# Arrays Challenges
# Create an array that contains the name of at least five TV shows
arr = ['my', 'fav', 'show', 'is', 'that', 'one']

# Find the length of the array
p arr.length

# Return the first item in the array
p arr[0]

# Return the fourth item in the array
p arr[3]

# Permanently reverse the order of the array
p arr.reverse

# Create a new empty array for your top favorite TV shows
newarr = []

# From the full TV show array, add your top two favorite shows to the empty array
newarr << arr[0]
newarr << arr[2]
p newarr