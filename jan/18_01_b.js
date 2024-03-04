/*
Given two strings, determine if they share a common substring. 
A substring may be as small as one character.
INPUT : 
s1='hello'
s2='world'
OUTPUT : Yes
*/
let s1='hello';
let s2='world';
let count=0;
for(let i=0;i<s1.length;i++){
    for(let j=0;j<s2.length;j++){
       if(s1[i].search(s2[j])===0){
        count++
       }
    }
}
if(count>0){
    console.log('Yes')
}
else{
    console.log('No')
}