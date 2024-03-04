/*
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
INPUT : 8
        UDDDUDUU
OUTPUT : 1

EXPLANATION : 

If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:

_/\      _
   \    /
    \/\/

The hiker enters and leaves one valley

*/

let steps=8;
let path=['U','D','D','D','U','D','U','U']
let obj={}
for(let [i,ele] of path.entries()){
    for(let j=i+1;j<path.length;j++){
        if(!obj[ele] && ele!=='x'){
            obj[ele]=1;
        }
        if(ele===path[j] && ele!=='x'){
            obj[ele]=obj[ele]+1;
            ele='x';
        }
    }
}
console.log(obj)

let max=Math.max(...Object.values(obj))
let min=Math.min(...Object.values(obj))

let output;
output=Math.floor(max/min)

console.log("output: ",output)