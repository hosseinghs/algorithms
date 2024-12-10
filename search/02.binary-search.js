// binary search can be much faster than linear search.
// binary search can eliminate half of the remaning elements at a time.
// binary search only works on sorted arrays.

// divide and conquer!!
// remember the array HAS to be SORTED
// Time Complexity: O(log n)
// best case O(1) worst case and average casee O(log n)

// compare to linear search: O(log n) > O(n)
function binarySearch(array, value) {
    if (!Array.isArray(array) || !array.length) return
    let start = 0
    let end = array.length - 1
    let middle = Math.floor((start + end) / 2)

    while(array[middle] !== value && start <= end) {
        if (value < array[middle]) end = middle - 1
        else start = middle + 1
        middle = Math.floor((start + end) / 2)
    }
    return array[middle] === value ? middle : -1
}
