/*
There is a string,s, of lowercase English letters that is repeated infinitely many times. 
Given an integer,n, find and print the number of letter a's in the first n letters of 
the infinite string.

INPUT : 
s='aba'
n=10

OUTPUT : 
7
*/

let s='aba'
let n=10;
let str;
let count=0;
str=s.repeat(n)
let newStr=str.slice(0,n)
for(let i=0;i<newStr.length;i++){
    if(newStr[i]==='a'){
        count++;
    }
}
console.log(count)
