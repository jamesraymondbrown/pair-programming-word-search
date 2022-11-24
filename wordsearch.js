const wordSearch = (letters, word) => { 
    let output = false;
    if (letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    //console.log('horizontalJoin', horizontalJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            output = true;
        } 
    } 
    let newArray = [];
    for (let i = 0; i < letters[0].length; i++) {
        for (let j = 0; j < letters.length; j++) {
            newArray.push(letters[j][i])
        }
    } 

    for (let i = letters.length; i < newArray.length; i+=letters.length+1) {
        newArray.splice(i, 0, " ");
        
    }
    let verticalWords = newArray.join('');
        if (verticalWords.includes(word)) {
            output = true;
        }   
    return output;
}

module.exports = wordSearch

console.log(wordSearch([
    ['A', 'E', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'L', 'N', 'N', 'D', 'E', 'L', 'P'],
    ['E', 'D', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['I', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['S', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['E', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['I', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['N', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['F', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'SEINFELD'))