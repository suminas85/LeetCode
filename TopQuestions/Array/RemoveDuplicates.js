// TODO: 14.89/100 to improve.
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  for (i = 1; i < nums.length; i++) {
    console.log(i, 'nums:', nums)
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result = removeDuplicates(nums);

console.log(nums, result);
