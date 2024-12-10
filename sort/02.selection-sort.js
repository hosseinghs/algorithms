const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

// Time complexity O(n^2)
// bubble sorts swaps over and over again,
// in selection we make a one swap at the end of the loop
function selectionSort(array) {
    if(!Array.isArray(array) || !array.length) return
    for(let i = 0; i < array.length; i++) {
        let minNumberIndex = i
        for (j = i + 1; j < array.length; j++) {
            if (array[j] > array[minNumberIndex]) minNumberIndex = j
        }
        if (i !== minNumberIndex) swap(array, i, minNumberIndex)
    }
    return array
}

selectionSort([2, 1, 14, 22, 8, 345, 0, 123, 43]);