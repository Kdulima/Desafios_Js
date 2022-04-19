// Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

// Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

// int n: an integer
// Print

// Print a staircase as described above.

// Input Format

// A single integer, n, denoting the size of the staircase.

function staircase(n) {
  let hash = '#';
  let space = " ";
  let size = n - 1;

  for(let lineIndex = 0; lineIndex < n; lineIndex++) {
    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
      if(columnIndex < size) {
        space += '';
      } else {
        space += hash;
      }
    }
    console.log(space);
    space = " ";
    size -= 1;
  }
}

staircase(6);