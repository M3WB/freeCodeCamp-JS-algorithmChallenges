// Basic Algorithms Exercise #3
// Return the factorial of the provided integer. Ex: 5! = 1*2*3*4*5 = 120
 

function numberFactorial(num) {
    let product = 1;
    for (product = 1; num > 0; num--) {
      product *= num;
    }
    return product;
  }
  
  numberFactorial(5); // Returns 120
  numberFactorial(0) // Returns 1
  numberFactorial(20) // Returns 2432902008176640000