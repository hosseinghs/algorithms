// create pointers or values that correspond to an index or position and move 
// towards the beginning, end or middle, based on condition.

// task1: write a function called sumZero which accepts a sorted
// array of integers. the function should find the first pair where 
// the sum is 0. return an array that includes both values. 
// note that the given array is sorted

// time complexity - O(n^2)
function notRecommendedSumZero(arr) {
    if(!arr.length) return
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) return [arr[i], arr[j]]
        }
    }
}

// time complexity is linear - O(n)
function sumZero (arr) {
    if(!arr.length) return
   
    let startOfArr = 0
    let endOfArr = arr.length - 1

    while (startOfArr < endOfArr) {
        const sum = arr[startOfArr] + arr[endOfArr]
        if(sum === 0) return [arr[startOfArr], arr[endOfArr]]
        else if (sum > 0) endOfArr--;
        else startOfArr ++
    }
}

// taks2: implement a function called countUniqueValues which
// accepts a sorted array and counts the uniuqe values in the array.
// there can be negative numbers in the array, but it will always be sorted

function countUniqueValues(arr) {
    if(!arr.length) return
    let i = 0
    let j = arr.length - 1
    let uniqeCounts = 0

    while(i !== j) {
        if (arr[i] !== arr[j]) {
            uniqeCounts++
            i = i + 1
        }
    }
    return uniqeCounts
}
