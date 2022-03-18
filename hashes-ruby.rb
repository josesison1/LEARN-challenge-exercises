# Challenges: Practice with Hashes
# As a developer, I can create a hash called my_phone using the Ruby method .new.

my_phone = Hash.new

# p my_phone

# As a developer, I can add five key:value pairs of app names and their descriptions to my hash.

my_phone[:instagram] = 'so everyone can be an "influencer"'
my_phone[:facebook] = 'stay connected with friends and families'
my_phone[:linkedin] = 'platform to network '
my_phone[:espn] = 'to get updates on sports scores and news'
my_phone[:tiktok] = 'to show off skills so mommmy and daddy can be proud'

# p my_phone

# As a developer, I can return a value from my_phone by passing in the name of a key.

# p my_phone[:tiktok]



# As a developer, I can update two keys in my_phone.

my_phone[:IG] = my_phone.delete :instagram
my_phone[:FB] = my_phone.delete :facebook

# p my_phone

# As a developer, I can update two values in my_phone.

my_phone[:IG] = 'to look for the best memes'
my_phone[:tiktok] = 'so i can be the coolest person in the world'

# p my_phone

# As a developer, I can delete two key:value pairs from my_phone.

my_phone.delete(:espn)
my_phone.delete(:linkedin)

# p my_phone

# As a developer, I can use an enumerable method to return information about all of my_phone's applications.

my_phone.each do |key, value|
#    p "#{key} is #{value}"
end


# Stretch Challenges
# As a developer, I can create a custom method that takes in my_phone and returns an array with the app name capitalized and information about each phone app.

def phone(h)
   h.map do |key, value|
     "#{key.capitalize} is #{value}"
     end
    end

p phone my_phone