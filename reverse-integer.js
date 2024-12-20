var reverse = function(x) {
    const stringX = Array.from(Math.abs(x).toString());
    const reversedX = stringX.reverse();
    const reversedNum = Number(reversedX.join(''))
    
    const result = x < 0 ? -reversedNum : reversedNum
    return Math.pow(-2, 31) <= result && result <= (Math.pow(2, 31) - 1) ? result : 0
};

console.log(reverse(1534236469))