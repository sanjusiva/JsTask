/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

For example, given nums = [2, 7, 11, 15], target = 9, the function should return [0, 1] because nums[0] + nums[1] == 9.
*/

let nums = [2, 7, 3, 6, 2];
let target=9;

function twoSum(nums, target) {
    const numObj = {};
    let res=[];

    for (let i = 0; i < nums.length; i++) {
        const val = target - nums[i];
        if (numObj.hasOwnProperty(val)) {
            res.push([numObj[val], i])
            // return [numObj[val], i];
        }
        numObj[nums[i]]= i;
    }

    return res;
}

console.log(twoSum(nums,target)); 
