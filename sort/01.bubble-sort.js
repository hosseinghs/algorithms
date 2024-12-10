// ES5
// function swap(arr, index1 ,index2) {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
// }

// ES2015
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

// set i to length of the array and loop from the end to the beginning
// to avoid redundent loops.
// set noSwaps to true to avoid redundent loops when the array is almost sorted


// average Time complexity O(n) => because of noSwaps
// worst Time complexity O(n^2)
function bubbleSort(array) {
    if (!Array.isArray(Array) || !array.length) return
    let noSwaps = null
    for(let i = array.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
                noSwaps = false
            }
        }
        if(noSwaps) break      
    }
    return array
}

console.log(bubbleSort([4, 8, 23 , 53, 655, 98321])) 
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6])) // almost sorted
