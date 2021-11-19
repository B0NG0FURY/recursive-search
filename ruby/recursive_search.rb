def recursive_search(arr, target)
  if arr.length === 0
    return false
  end

  if arr[0] === target
    return true
  end

  arr.shift()
  recursive_search(arr, target)
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: true"
  puts "=>", recursive_search([1, 2, 3], 2)

  puts

  puts "Expecting: false"
  puts "=>", recursive_search([3, 2, 1], 4)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
