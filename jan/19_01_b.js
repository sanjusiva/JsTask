/*
You are given an array and you need to find number of tripets of indices (i,j,k)
such that the elements at those indices are in geometric progression for a given 
common ratio r and i<j<k.
INPUT : 
4 2
1 2 2 4
OUTPUT : 2
EXPLANATION : 
There are 2 triplets in satisfying our criteria, whose indices are (0,1,3) and (0,2,3)
*/

let r=2
let arr=[1,4,16,64]
let length=4;
let resArr=[]
let count=0;
let ii=[];
let jj=[];
let kk=[];
let i,j,k;
let newR=[]
let res=[]

arr.forEach((ele,ind)=>{

    // console.log(ele%r,ele)
    if( ele%r==0 && ind!==length-1){
        // j.push(ind)
        newR.push(ele)
    }
})
// console.log("r: ",newR)
// arr.forEach((ele,ind)=>{
//     console.log("by: ",r/ele," a: ",arr[ind]," ind: ",ind);
//     j.forEach((jVal,jInd)=>{
//         if(ind<jVal && newR[jInd]/ele===newR[jInd]){
//             // console.log(r/ele,arr[ind],ind);
//             i.push(ind);
//         }
//         if(ind>jVal && ele===newR[jInd]*newR[jInd]){
//             // console.log(r*r,arr[ind],ind);
//             k.push(ind);
//         }
//     })
// })
console.log(findOutput())
function findOutput(){
     newR.forEach((rVal)=>{
    arr.forEach((ele,ind)=>{
        // console.log(rVal/ele,rVal,ele*rVal)
        i=rVal/ele;
        j=rVal;
        k=ele*rVal;
        count = checkPresence(i,j,k)
    })
})
console.log("&&: ",count.length);
return count.length
}
count=i.length
// console.log(i,j,k,count)
function checkPresence(i,j,k){
    arr.forEach((ele,ind)=>{
        if(arr.includes(i) && arr.includes(j) && arr.includes(k) && i!==k && i!==j && j!==k){
            // console.log(i,j,k)
            res.push([i,j,k])
        }
        
    })
    console.log("res: ",res)
return removeDuplicateSubarrays(res)
}
function removeDuplicateSubarrays(arrOfArr) {
    const uniqueArr = new Set();
    const result = [];

    for (const arr of arrOfArr) {
        const str = JSON.stringify(arr);
        if (!uniqueArr.has(str)) {
            result.push(arr);
            uniqueArr.add(str);
        }
    }

    return result;
}
