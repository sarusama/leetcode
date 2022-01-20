/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * 给你一个数组，请找出相邻元素相加的最大和
 */
function maxSubArray(nums: number[]): number {
    let sum = 0;
    let max = nums[0];
    
    for (let i = 0; i < nums.length; i ++) {
        sum += nums[i];
        
        max = maxNumber(sum, max);
        
        if (sum < 0) {
            sum = 0;
        }
    }
    
    return max;
};

function maxNumber(x: number, y: number): number {
    return x > y ? x : y;
}

