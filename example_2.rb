def contains_duplicate(nums)
  num_count = Hash.new(0)
  nums.each do |num|
    num_count[num] += 1
  end
  num_count.each do |key, value|
    if value > 1
      return true
    end
  end
  return false
end

test_case_1 = [1,2,3]
test_case_2 = [1,2,1,3]
test_case_3 = [1,1,2,3,4,5,6]
test_case_4 = [1,2,3,4,5,5]

puts contains_duplicate(test_case_1) # false
# puts contains_duplicate(test_case_2) # true
# puts contains_duplicate(test_case_3) # true
# puts contains_duplicate(test_case_4) # true
