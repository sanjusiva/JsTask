/*
There is a large pile of socks that must be paired by color. 
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.
INPUT : [1,2,1,2,1,3,2]
OUTPUT : 2
*/

let ip = [1, 2, 1, 2, 1, 3, 2];
let obj = {};
let count = 0;
for (let [i, ele] of ip.entries()) {
  for (let j = i + 1; j < ip.length; j++) {
    // console.log(i,j)
    if (!obj[ele] && ele !== "x") {
      obj[ele] = 1;
    }
    if (ip[i] === ip[j] && ele !== "x") {
      obj[ele] = obj[ele] + 1;
      ele = "x";
    }
  }
}
console.log(obj);
console.log(Math.floor(1/2))

Object.entries(obj).map(([key,val])=>{
console.log("k: ",key," val: ",val)
obj[key]=Math.floor(val/2)
})
console.log(obj);

let sum=0;
let output=Object.values(obj).reduce((acc,cv)=>
    acc+cv,
    sum
)

console.log("output: ",output)