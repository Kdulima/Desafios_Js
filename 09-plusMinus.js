// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// arr = [1,1,0,-1,-1]

// There are n=5 elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000

// Function Description

// Complete the plusMinus function in the editor below.

// plusMinus has the following parameter(s):

// int arr[n]: an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.

function plusMinus(arr) {
  let size = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let index = 0; index < size; index++) {
    if (arr[index] > 0) {
      positive++;
    } else if (arr[index] < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  console.log(positive / size);
  console.log(negative / size);
  console.log(zero / size);
}
console.log(plusMinus([1, 1, 0, -1, -1]));