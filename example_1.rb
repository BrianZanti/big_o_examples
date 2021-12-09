def contains_duplicate(nums)
  nums.each.with_index do |num_1, index_1|
    nums.each.with_index do |num_2, index_2|
      if num_1 == num_2 && index_1 != index_2
        return true
      end
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
