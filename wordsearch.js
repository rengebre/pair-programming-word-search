const wordSearch = (letters, word) => { 
    let array = [];
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters[i].length; j++) {
            if (i === 0) {
                array.push([letters[i][j]])
            } else {
                array[j].push(letters[i][j])
            }
        }
    }
    
    const verticalJoin = array.map(ls => ls.join(''))
    for (line of verticalJoin) {
        if (line.includes(word)) {
            return true;
        }
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (line of horizontalJoin) {
        if (line.includes(word)) {
            return true;
        } 
    }

    return false;
}

module.exports = wordSearch