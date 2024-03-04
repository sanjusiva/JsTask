/*
Starting with a 1-indexed array of zeros and a list of operations, 
for each operation add a value to each the array element between two given indices, inclusive. 
Once all operations have been performed, return the maximum value in the array.
INPUT : 
n=10
a=[[1,5,3],[4,8,7],[6,9,1]]
OUTPUT : 10
EXPLANATION : 
q => 
    a b k
    1 5 3
    4 8 7
    6 9 1

index->	 1 2 3  4  5 6 7 8 9 10
	    [0,0,0, 0, 0,0,0,0,0, 0]
	    [3,3,3, 3, 3,0,0,0,0, 0]
	    [3,3,3,10,10,7,7,7,0, 0]
	    [3,3,3,10,10,8,8,8,1, 0]
*/

let noOfIndex = 10;
let arraySize = 3;
let array = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
];
// let array = [
//     [1,5,3],
//     [4,8,7],
//     [6,9,1]
// ]
let newArray = Array(noOfIndex).fill(0);


for (let i = 0; i < arraySize; i++) {
  for (let j = 0; j < noOfIndex; j++) {
    let k = array[i][j] - 1;
    let l = array[i][arraySize - 2];

for (k; k < l; k++) {
    newArray[k] = newArray[k] + array[i][arraySize - 1];
  }
  break

  }
}

console.log(newArray);
let output=Math.max(...newArray)
console.log(output);

