/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * 
 * 有一个数字数组，返回一个answer[i]等于除nums[i]以外的所有元素之积的数组。
 */

/**
 * 思路1：既然是返回一个除nums[i]之外的所有元素之积，那么就可以先把所有元素之积求出来，然后除去对应位置的元素就可以了。
 *       需要排除0还有0的数量
 */
 function productExceptSelf1(nums: number[]): number[] {
    let a = nums;
    let total = 0;
    let hasZero = false;
    let times = 0;
    
    a.forEach(function (item: number) {
        if (item != 0) {
            total *= item;
            if (total == 0) {
                total = item;
            }
        } else {
            times ++;
            hasZero = true;
        }
    });
    
    return a.map(function (item: number): number {
        if (item == 0 && times == 1) {
            return total;
        } else if (!hasZero) {
            return total / item;
        } else {
            return 0;
        }
    });
};

/**
 * 思路2：通过一次遍历获取完对应位置左右部分的积，然后再遍历一边左右两边相乘。
 */
 function productExceptSelf2(nums: number[]): number[] {
    let left = [];
    let right = [];
    let newNums = [];
    let n = nums.length;
    
    for (let i = 0; i < n; i ++) {
        if (i > 0) {
            left[i] = left[i - 1] * nums[i - 1];
            right[n - 1 - i] = right[n - i] * nums[n - i];
        } else {
            left[i] = 1;
            right[n - 1] = 1;
        }
    }
    
    nums.forEach(function (item: number, index: number) {
        newNums[index] = left[index] * right[index];
    });
    
    return newNums;
};
