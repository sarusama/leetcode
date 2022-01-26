/**
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
 * 给定两个非负整数的字符串，要求返回两个字符串的积
 * 大数乘法
 * 
 */
function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }
    
    let numberArray1 = [];
    let numberArray2 = [];
    let numberLength1 = num1.length;
    let numberLength2 = num2.length;
    let totalLength = numberLength1 + numberLength2 - 1;
    let productArray = createArray(totalLength);
    let product = "";
    let a = 0;
    
    numberArray1 = num1.split("").map(item => {
        return parseInt(item);
    });
    numberArray2 = num2.split("").map(item => {
        return parseInt(item);
    });
    
    for (let i = 0; i < numberLength1; i ++) {
        for (let j = 0; j < numberLength2; j ++) {
            productArray[i + j] += numberArray1[i] * numberArray2[j];
        }
    }
    
    for (let i = totalLength - 1; i >= 0; i --) {
        let b = 0;
        b = productArray[i] + a;
        
        if (i > 0) {
            b = b % 10;
            a = (productArray[i] + a - b) / 10;
        }
        
        product = `${b}${product}`;
    }
    
    return product;
};

function createArray(length: number): number[] {
    let array = [];
    while(length > 0) {
        array.push(0);
        length --;
    }
    return array;
}
