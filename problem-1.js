// Remove Duplicates from Sorted Array

function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

const nums = [1, 2, 2, 2, 4, 5, 6, 6];

console.log(removeDuplicates(nums))
