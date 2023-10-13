const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;  // Return false if the word is not found.
}

module.exports = wordSearch;
