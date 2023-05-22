//1. Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addToZero(arr) {
  const numSet = new Set();
  for (let num of arr) {
    if (numSet.has(-num)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
}
console.log(addToZero([])); 
console.log(addToZero([1])); 
console.log(addToZero([1, 2, 3])); 
console.log(addToZero([1, 2, 3, -2])); 
// Expected time complexity: O(n), space complexity: O(n)




//2. Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(str){
    const charSet = new Set();
    for(let char of str){
        if(charSet.has(char)){
            return false;
        }
        charSet.add(char);
    }
    return true;
}
console.log(hasUniqueChars("Monday")); 
console.log(hasUniqueChars("Moonday")); 
// Expected time complexity: O(n), space complexity: O(n)




//3. Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(sentence){
    const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");
    for(let char of sentence.toLowerCase()){
        alphabetSet.delete(char);
    }
    return alphabetSet.size === 0;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!")); 
console.log(isPangram("I like cats, but not mice")); 
// Expected time complexity: O(n), space complexity: O(1)




//4. Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(words){
    let longestLength = 0;
    for(let word of words){
        if(word.length > longestLength){
            longestLength = word.length;
        }
    }
    return longestLength;
}
console.log(findLongestWord(["hi", "hello"]));
// Expected time complexity: O(n), space complexity: O(1)


