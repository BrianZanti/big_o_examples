var containsDuplicate = nums => {
  num_count = {}
  nums.forEach(num => {
    if (num_count[num] === undefined) {
      num_count[num] = 0;
    }
    num_count[num] = num_count[num] + 1;
  })
  for (num in num_count){
    if (num_count[num] > 1){
      return true;
    }
  }
  return false;
}

let test_case_1 = [1,2,3]
let test_case_2 = [1,2,1,3]
let test_case_3 = [1,1,2,3,4,5,6]
let test_case_4 = [1,2,3,4,5,5]

console.log(containsDuplicate(test_case_1)) //false
// console.log(containsDuplicate(test_case_2)) //true
// console.log(containsDuplicate(test_case_3)) //true
// console.log(containsDuplicate(test_case_4)) //true
