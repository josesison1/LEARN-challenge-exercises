

# Ruby Conditionals 
# keyword ---> if/else if/else

puts 'Player 1 choose one of the following: Rock, Paper, Scissors.'
playerone = gets.chomp
puts 'Player 2 choose one of the following: Rock, Paper, Scissors.'
playertwo = gets.chomp


if playerone === 'rock' && playertwo === 'scissors'
    p 'Player 1 wins!'
  elsif playerone === 'rock' && playertwo === 'paper'
    p 'Player 2 wins!'
  elsif playerone === 'scissors' && playertwo === 'rock'
    p 'Player 2 wins!'
  elsif playerone === 'scissors' && playertwo === 'paper'
    p 'Player 1 wins!'
  elsif playerone === 'paper' && playertwo === 'rock'
    p 'Player 1 wins!'
  elsif playerone === 'paper' && playertwo === 'scissors'
    p 'Player 2 wins!'
  elsif playerone === playertwo
    p 'Tie!'
  end