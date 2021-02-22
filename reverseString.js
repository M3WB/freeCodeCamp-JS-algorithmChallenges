// Basic Algorithms Exercise #2
// Write an algorithm that takes a string input by the user and outputs the reverse of that string

function reverseString(str) {
    let strArr = [];
    for (let i = 0; i < str.length; i++){
      strArr.push(str[i]);
    }
    
    let reverseArr = strArr.reverse();
  
    return reverseArr.join("");
  }
  
  reverseString("hello"); // Output: "olleh"
  reverseString("Get a coffee"); // Output: "eeffoc a teG"
