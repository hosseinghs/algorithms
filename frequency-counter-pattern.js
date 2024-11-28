// uses objects to collect value/frequencies of values
// this pattern can avoid using nested loops or O(N^2) operations with array or strings

// task1: write a function called same, which accepts to arrays.
// the function should return true if every value in the array has it's
// corresponding value squared in the second array.
// the frequency of values must be the same.

// same([1,2,3]), [1,4,9] => true
// same([1,2,3]), [1,2,9] => false
// same([1,1,3]), [1,9,9] => false

function notRecommendedSame(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++) {
        const x = arr1[i]
        const indexInSecondArr = arr2.indexOf(x ** 2)
        if (indexInSecondArr === -1) return false
        arr2.splice(indexInSecondArr, 1)
    }
    return true
}

function recommendedSame(arr1, arr2) {
    const frequencyCounter1 = {}
    const frequencyCounter2 = {}

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (const key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) return false
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false
    }
    return true
}


// task2: given two strings write a function to determine if the
// second string is an anagram of the first.
// an anagram is a word, phrase or name formed by rearranging the 
// letters of another, such as cinema, formed from iceman.

function isAnagram(str1, str2) {
    if(str1.length !== str2.length) return false
    
    const frequencyCounter1 = {}
    const frequencyCounter2 = {}

    for (let val of str1.split('')) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 
    }
    for (let val of str2.split('')) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    } 
    
    for (let val in frequencyCounter1) {
        if(frequencyCounter1[val] !== frequencyCounter2[val]) return false
    }
    return true
}

console.log(isAnagram('qwerty', 'qeywrt'))