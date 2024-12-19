// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; i < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
};

console.log(twoSum([3,2,3]))