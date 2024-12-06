// use case: some operation has to be done into args

// function outer(input) {
//     const otherScopedVar = []
//     function helper(helperInput) {
//         helper(helperInput--)
//     }

//     helper(input)

//     return otherScopedVar
// }


function collectOdds(arrayOfNums) {
    const result = [];

    function isOdd (arr) {
        if (!arr.length) return
        if (arr[0] % 2 !== 0) result.push(arr[0]);
        isOdd(arr.slice(1))
    }

    isOdd(arrayOfNums)
    return result
}