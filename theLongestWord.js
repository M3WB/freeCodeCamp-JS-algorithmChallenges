// Basic Algorithms Exercise #4
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    let strBreak = str.split(" ");
    let count = 0;
  
    for (let i = 0; i < strBreak.length; i++) {
      if (strBreak[i].length > count) {
        count = strBreak[i].length;
      }
    }
    
    return count;
  
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog"); // Returns 6
  findLongestWordLength("May the force be with you"); // Returns 5
  findLongestWordLength("What is the average airspeed velocity of an unladen swallow"); // Returns 8
  findLongestWordLength("esoteric theological discoveries"); // Returns 11
  findLongestWordLength("yessssssssssssssssssssssss!!!! no"); // Returns 30