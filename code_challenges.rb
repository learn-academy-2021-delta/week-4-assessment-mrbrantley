# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN
# "Matsumoto is nice so we are nice"
# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def even_odd (num)
  if (num.class !=Integer) && (num.class !=Float)
    p "#{num} is neither odd nor even"
  elsif num % 2 == 0
    p "#{num} is even"
  else
    p "#{num} is odd"
  end
end

# even_odd(num1)
# even_odd(num2)
# even_odd(num3)
# even_odd(2.0)
# even_odd(2.1)
# even_odd("poop")
# even_odd(true)
# even_odd(nil)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_voweles (str)
  p str.delete "aeiouAEIOU"
end

# no_voweles(album1)
# no_voweles(album2)
# no_voweles(album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome_vibe_check (str)
  if str.downcase.reverse == str.downcase
    p "#{str} is a palindrome and passes the vibe check."
  else
    p "#{str} does not pass the vibe check."
  end
end

# palindrome_vibe_check(is_palindrome1)
# palindrome_vibe_check(is_palindrome2)
# palindrome_vibe_check(is_palindrome3)
# palindrome_vibe_check("ReViver")
# palindrome_vibe_check("race car")
# palindrome_vibe_check(2002)