// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const twoSum = function(nums, target) { 
  for (let i = 0; i < nums.length; i++) {
      for (let x = i+1; x < nums.length; x++) {    
          if (nums[i] + nums[x] === target) return [i, x]  
      }
  }
};

console.log(twoSum([12,4,2,6,4,9,6], 6));