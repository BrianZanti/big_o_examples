var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++){
      let num1 = nums[i]
      let num2 = nums[j]
      if (num1 === num2 && i !== j) {
        return true;
      }
    }
  }
  return false;
};

let test_case_1 = [1,2,3]
let test_case_2 = [1,2,1,3]
let test_case_3 = [1,1,2,3,4,5,6]
let test_case_4 = [1,2,3,4,5,5]

console.log(containsDuplicate(test_case_1)) //false
// console.log(containsDuplicate(test_case_2)) //true
// console.log(containsDuplicate(test_case_3)) //true
// console.log(containsDuplicate(test_case_4)) //true
