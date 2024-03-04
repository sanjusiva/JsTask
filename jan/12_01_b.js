const e = require("express");

/*
There is a new mobile game that starts with consecutively numbered clouds.
Some of the clouds are thunderheads and others are cumulus. 
The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. 
The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. 
It is always possible to win the game.

For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.
INPUT : 7
        0 0 1 0 0 1 0
OUTPUT : 4
*/
let noOfClouds=7;
let arr =[0,0,1,0,0,1,0]
let count=0
// for(let [i,ele] of arr.entries()){
//     for(let j=i+1;j<arr.length;j++){
//         if(ele!==1){
//         if(ele===arr[j]){
//             count=count+1;
//             break;
//         }
//         }
//     }
// }

for (let i = 0; i < noOfClouds - 1;) {
    if (i + 2 < noOfClouds && arr[i + 2] !== 1) {
        i += 2;
    } else {
        i += 1;
    }
    count += 1;
}
console.log(count)