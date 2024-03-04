/*
Given a number N denoted the elements in an array.He wants to arrange the elements of an array such that odd positions have sorted elements in ascending order and even positions have sorted elements in descending order. for example, if we have 1 2 3 4 5 then the result will be 1 5 2 4 3.
Please write the code for this problem
I/P:
 		
const n = 8;
const str = '3 6 9 10 12 5 15 18';
 
O/P need to be:
 [3, 18, 5, 15, 6, 12, 9, 10]
*/

let n=8;
let str='3 6 9 10 12 5 15 18';
let arr=Array.from(str.split(' ')).sort(function(a, b){return a-b})
let res=[...arr];
arr.forEach((ele,i)=>{
    if(i!==arr.length && i%2!==0){
        console.log(i);
        res.splice(i,0,res[n-1])
        res.splice(n)
    }
})
console.log(res)