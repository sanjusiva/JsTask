/*
You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] 
without any duplicates. You are allowed to swap any two elements. 
Find the minimum number of swaps required to sort the array in ascending order.
INPUT : arr=[7, 1, 3, 2, 4, 5, 6] 
OUTPUT : 5

EXPLANATION : 
i   arr                         swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]
*/

let arr=[7, 1, 3, 2, 4, 5, 6];
let n=7
let output = swapFunc(n,arr)
console.log(output)

function swapFunc(n,arr){
    let count=0;
    for(let i=0;i<n;i++){
        while(arr[i]!==i+1){
            let val=arr[i];
            arr[i]=arr[val-1];
            arr[val-1]=val;
            count++;
        }
    }
    return count
}