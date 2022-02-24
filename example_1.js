var containsDuplicate = function(nums) {
  duplicates_found = false;
  nums.forEach((num_1, index_1) => {
    nums.forEach((num_2, index_2) => {
      if (num_1 === num_2 && index_1 !== index_2) {
        duplicates_found = true;
      }
    })
  })
  return duplicates_found;
};

let test_case_1 = [1,2,3]
let test_case_2 = [1,2,1,3]
let test_case_3 = [1,1,2,3,4,5,6]
let test_case_4 = [1,2,3,4,5,5]

console.log(containsDuplicate(test_case_1)) //false
// console.log(containsDuplicate(test_case_2)) //true
// console.log(containsDuplicate(test_case_3)) //true
// console.log(containsDuplicate(test_case_4)) //true
