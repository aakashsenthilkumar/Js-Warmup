//Given a word, "getLengthOfWord" returns the length of the given word.

function getLengthOfWord(word1) {
     
    if (typeof word1 === 'string') {
        const lengthWord = word1.length;
        return lengthWord;
    } else {
        return -1; 
    }
   
}
console.log(getLengthOfWord("GUVI"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord());
console.log(getLengthOfWord(9));