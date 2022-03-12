# User Stories
# Create a method called sum_these_numbers which takes two integers as an argument and prints their sum to the screen.

# def sum_these_numbers(n1,n2)
#   n1+n2
# end
# p sum_these_numbers(1,2)

# Create a method called is_even, which takes a single integer, and which then returns true if the number is even, and false otherwise.

# def is_even(n)
#   if n%2 == 0
#    true
#   else
#    false
#   end
# end
# p is_even(9)

# Create a method that takes a number as an argument and prints "Valid" if the number is between 1 and 10 (inclusive) and "Invalid" otherwise.

# def is_valid(n)
#   if n>0 && n<11
#     'Valid'
#   else
#     'Invalid'
#   end
# end
# p is_valid(5)
# p is_valid(11)

# Create a method that takes in a string and determines if the string is a palindrome.

# def palindrome(string)
#   if string.reverse.downcase == string.downcase
#     "#{string} is a palindrome"
#   else
#     "#{string} is not a palindrome"
#   end
# end
# p palindrome('Hannah')

# You are writing the user registration page for a secure web site. On the registration page, the user has to enter a user ID and a password, which has to adhere to the to following criteria:

def reg
p 'Name?'
user = gets.chomp
p 'Password?'
pass = gets.chomp
  if
    user == pass
    p 'Username and password can\'t be the same'
  elsif user.length < 6 || pass.length < 6
    p 'Both username and password must be at least six characters long'
  elsif pass.downcase == 'password'
    p 'C\'mon, be more original.'
  elsif !pass.include?('!') && !pass.include?('#') && !pass.include?('$')
    p 'Password needs to include either #, !, or $.'
  elsif pass.count('0-9') == 0
    p "Password must include at least one integer."
  else
    p 'This is a valid username and password'
  end
end
reg
# As a developer, I can create a method that checks for the following rules for a user ID and password:
# User ID and password cannot be the same.
# User ID and password must be at least six characters long.
# Password must contain at least one of: !#$
# User ID cannot contain the following characters: !#$ or spaces
# Password cannot be the word "password".
# User Stories: Stretch
# As a user, I can enter my user ID and password into the terminal after being prompted to find out if the they are acceptable.
# User Stories: Super Stretch
# As a developer, my method ensures that the user's password must contain at least one number.
