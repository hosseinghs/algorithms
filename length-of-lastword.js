var lengthOfLastWord = function(s) {
    const chars = Array.from(s.trim())
    const reversed = chars.reverse()
    let counter = 0
    
    for (let i = 0; i < reversed.length; i++) {
        if (reversed[i] === ' ') break
        else counter++
    }
    return counter
};



console.log(lengthOfLastWord("   fly me   to   the moon  "));
