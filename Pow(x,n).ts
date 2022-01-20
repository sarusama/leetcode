/**
 * Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
 * 计算幂函数
 * 最简单的思路 => 先判断幂的正负，再根据幂自乘
 * => 使用二分法对函数进行优化
 */
 function myPow(x: number, n: number): number {
    if (n == 0) {
        return 1
    }
    
    var m = n;
    var y = x
    
    if (m < 0) {
        m = -n;
        
        y = 1 / y;
    }
    
    return multi(y, m);
};
/**
 * 递归自乘
 * @param x number 底数
 * @param n number 幂
 * @returns number
 */
function multi(x: number, n: number): number {
    if (n == 0) {
        return 1;
    }
    
    let product = multi(x, n % 2 == 0 ? (n / 2) : ((n - 1) / 2));
    
    product *= product;
    
    if (n%2 != 0) {
        product *= x;
    }
    
    return product;
}

