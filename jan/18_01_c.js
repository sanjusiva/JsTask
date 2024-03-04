/*
Two strings are anagrams of each other if the letters of one string can be rearranged 
to form the other string. Given a string, find the number of pairs of substrings of the 
string that are anagrams of each other.
INPUT : s='mom'
OUTPUT : 2
EXPLANATION : [m,m],[mo,om]
*/

let s = "ifailuhkqq";
let n = s.length;
let j = 1;
let obj = {};
for (let i = 0; i <= n; i++) {
  while (j <= n) {
    let newStr = s.substring(i, j).split("").sort().join();
    let finalStr = newStr.toString();
    if (!obj[finalStr]) {
      if (i !== j) {
        obj[finalStr] = 1;
      }
    } else {
      obj[finalStr] = obj[finalStr] + 1;
    }
    j++;
  }
  j = i + 1;
}

console.log(obj);
let sum = 0;
Object.entries(obj).forEach(([key, val]) => {
  if (val === 1) {
    delete obj[key];
  } else if (val === 2) {
    obj[key] = 1;
    sum = sum + 1;
  } else {
    sum = sum + val;
  }
});
console.log(sum);
