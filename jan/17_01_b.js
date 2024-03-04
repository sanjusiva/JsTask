/*
A left rotation operation on an array shifts each of the array's elements 1 unit to the left. 
For example, if 2 left rotations are performed on array [1,2,3,4,5], 
then the array would become [3,4,5,1,2]. Note that the lowest index item moves to the 
highest index in a rotation. This is called a circular array.

Given an array a of n  integers and a number,d, perform d left rotations on the array. 
Return the updated array to be printed as a single line of space-separated integers.
INPUT : 
5 4
1 2 3 4 5
OUTPUT : [5,1,2,3,4]
*/

let n=5;
let arr=[1,2,3,4,5];
let d=4;
let newArr=arr
for(let i=0;i<d;i++){
    let val=newArr[0]
    newArr=newArr.slice(1,n)
    newArr.push(val)
}
console.log(newArr)
