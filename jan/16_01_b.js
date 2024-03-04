/*
You can perform the following operations on the string,a:

    1.Capitalize zero or more of a's lowercase letters.
    2.Delete all of the remaining lowercase letters in a

Given two strings,a
and b, determine if it's possible to make a equal to b as described. If so, print YES on a new line. Otherwise, print NO.

For example, given a=AbcDE and b=ABDE, in a we can convert b and delete c to match b.
*/

let a = "daBcd";
let b = "ABC";

console.log(stringMatch(a, b));

// function stringMatch(a,b){
//     if(a.length<b.length){
//         return 'NO'
//     }
//     else{
//         let str=a.toUpperCase()
//         let output=str;
//         for(let i=0;i<str.length;i++){
//             if(output[i]!==b[i]){
//                 output=str.replace(str[i],'')
//             }
//         }
//         if(output===b){
//             return 'YES'
//         }
//         else{
//             return 'NO'
//         }
//     }
// }

function stringMatch(a, b) {
    if (a.length < b.length) {
      return "NO";
    } else {
      let str = a.toUpperCase();
      let output = str;
      for (let i = 0; i < str.length; i++) {
        console.log(b.search(output[i]));
        if (b.search(output[i]) === -1) {
          output=output.replace(output[i],'');
        }
      }
      console.log(output)
      if (output === b) {
        return "YES";
      } else {
        return "NO";
      }
    }
  }
