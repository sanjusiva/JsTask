/*
The first line contains an integer t, the number of test cases.

Each of the next t pairs of lines are as follows:
- The first line contains an integer t, the number of people in the queue
- The second line has n space-separated integers describing the final state of the queue.

INPUT : 
STDIN       Function
-----       --------
2           t = 2
5           n = 5
2 1 5 3 4   q = [2, 1, 5, 3, 4]
5           n = 5
2 5 1 3 4   q = [2, 5, 1, 3, 4]

OUTPUT : 
3
Too chaotic
*/
let t=2;
let n1=5;
let q1=[2, 1, 5, 3, 4]
let n2=5;
let q2=[2, 5, 1, 3, 4]

let output = countNoOfBribes(n1,q1);
console.log(output)
function countNoOfBribes(n,q){
    let crtArr=Array(n).fill().map((v,i)=>i+1);
    let sum=0
    // console.log(crtArr)
    for(let i=0;i<crtArr.length;i++){
        if(crtArr[i]!==q[i] && q[i]-crtArr[i]>0){
            // console.log(q[i]-crtArr[i])
            if(q[i]-crtArr[i]>2){
                return 'Too chaotic';
            }
            else{
                sum=sum+q[i]-crtArr[i]
            }
        }
    }
    return sum;
}