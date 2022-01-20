/**
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
 * 给你一个数组，请找出相邻元素相乘得到的最大积
 * @param nums number[]
 * @returns number
 */
function maxProduct(nums: number[]): number {
    let product = nums[0];
    let max = 1;
    let min = 1;
    
    for (let i = 0; i < nums.length; i ++) {
        let currentMax = max;
        let currentMin = min;
        max = maxNumber(maxNumber(currentMax * nums[i], nums[i]), currentMin * nums[i]);
        min = minNumber(minNumber(currentMax * nums[i], nums[i]), currentMin * nums[i]);
        
        product = maxNumber(max, product);
    }
    
    return product;
};

function maxNumber(x: number, y: number): number {
    return x > y ? x : y;
}

function minNumber(x: number, y: number): number {
    return x > y ? y : x;
}
