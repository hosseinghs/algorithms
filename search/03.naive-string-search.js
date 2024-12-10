// write a function that accepts a string and a substring
// and returns the number of times the substring appears in the string
function naiveStringSearch(str, subStr) {
    if (!str.length || !subStr.length) return
    let count = 0;

    for(let i = 0; i< str.length; i++) {
        for(let j = 0; j < str.length; j++) {
            if (str[i + j] !== subStr[j]) break;
            if (j === subStr.length - 1) count++;
        }
    }
    return count;
}
