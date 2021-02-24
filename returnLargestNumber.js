// Basic Algorithm Exercise #5
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Hint given: Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    let resultArr = [];                             // Define an empty array to be populated by the largest number
    for (let i = 0; i < arr.length; i++) {          // Set up a recursive loop that will iterate through the outer array
        let bigNum = arr[i][0];                     // Initialize the value of the bigNum variable to index [0] (the first number) in inner array
        for (let j = 1; j < arr[i].length; j++) {   // Set up a recursive loop that will iterate through the inner array
        if (arr[i][j] > bigNum) {                   // Check the iterated [j] index number with initialized index [0] which is the current value of bigNum variable.
            bigNum = arr[i][j];                     // If bigger, set as the value of bigNum variable. The loop iterates, comparing the new value to the previous until complete.
            }
        }

    resultArr.push(bigNum);                         // Add the bigNum variable, which is now the largest number in the inner array, to the end of the result array.
    }

    return resultArr;                              // Return the result array.
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // Returns [ 5, 27, 39, 1001 ]