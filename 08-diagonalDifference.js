// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is (15 - 17) = 2.

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers
// Return

// int: the absolute diagonal difference

function diagonalDifference(arr) {
  let leftToRight = 0;
  let rightToLeft = 0;
  let size = arr.length;

  for (let index = 0; index < size; index++) {
    leftToRight += arr[index][index];
    rightToLeft += arr[index][size - index - 1];
  }

  return Math.abs(leftToRight - rightToLeft);
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]));