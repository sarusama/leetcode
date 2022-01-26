/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * 给定 n 个非负整数，表示每个条的宽度为 1 的直方图，计算下雨后它可以捕获多少水。
 * 
 * 思路：最高的柱子决定最多能蓄多少水，最短的柱子决定能蓄多少水。
 * 左右两边一起开始数，只要柱子没有比左右两边高的，就能蓄水，最短的柱子决定蓄多少水。
 */
function trap(height: number[]): number {
    let area = 0;
    let length = height.length;
    let leftMax = 0;
    let rightMax = 0;
    let i = 0;
    let j = length - 1;
    
    while(i < j) {
        if (height[i] < height[j]) {
            leftMax = maxNumber(leftMax, height[i]);
            area += (leftMax - height[i]);
            i ++;
        } else {
            rightMax = maxNumber(rightMax, height[j]);
            area += (rightMax - height[j]);
            j --;
        }
    }
    
    return area;
};

function maxNumber(x: number, y: number): number {
    return x > y ? x : y;
}

