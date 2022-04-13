// Given an array of integers, find the sum of its elements.

// For example, if the array ar = [1,2,3], 1 + 2 + 3 = 6 , so return 6.

// Function Description

// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

// simpleArraySum has the following parameter(s):

// ar: an array of integers
// Input Format

// The first line contains an integer, n, denoting the size of the array.
// The second line contains  space-separated integers representing the array's elements.


function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));