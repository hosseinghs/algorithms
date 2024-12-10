// time complexity O(n^2)
// if almost sorted then O(n)
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let currentVal = array[i]
        for (let j = i - 1; j >= 0 && array[j] > currentVal; i--) {
            array[j + 1] = array[j]
        }
        array[j + 1] = currentVal;
    }
    return array;
}
