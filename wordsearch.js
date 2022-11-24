const wordSearch = (letters, word) => { 
    let output = false;
    if (letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
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

module.exports = wordSearch;