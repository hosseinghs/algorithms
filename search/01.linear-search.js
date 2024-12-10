// task1 write a function that takes an array of integers and a target integers and a value
// and returns the index if the target is found in the array or returns null otherwise

// indexOf, findIndex, find, includes are using this algorithm
// Time Complexity, O(n) 
// best case O(1), worst case O(n), average: O(n)
// as the length of array grows, the average of O(n) grows too.
function linearSearch (array, value) {
    if (!Array.isArray(array) || !array.length) return
    let foundIndex = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) foundIndex = i;
    }
    return foundIndex
}

console.log(linearSearch([10, 2, 3, 4, 5], 1000))