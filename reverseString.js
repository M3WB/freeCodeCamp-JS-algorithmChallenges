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
