/*
A string is said to be a child of a another string if it can be formed 
by deleting 0 or more characters from the other string. 
Letters cannot be rearranged. Given two strings of equal length, 
what's the longest string that can be constructed such that it is a child of both?

INPUT : 
    ABCD
    ABDC
OUTPUT : 3
*/

let ip1 = 'ABCD'//'ABCDEF';
let ip2 = 'ABDC'//'FBDAMN';

let arr1 = Array.from(ip1);
let arr2 = Array.from(ip2);

let count = 1;
// arr1.map((ele,ind1)=>{
//     arr2.map((val,ind2)=>{
//         console.log(ele,ind1," : ",val,ind2)
//         if(ele===val && ind1<=ind2){
//             // console.log(ele,val,ind1,ind2)
//             count++
//         }
//     })
// })

// for(let [ind1,ele] of arr1.entries()){
//     for(let [ind2,val] of arr2.entries()){
//         if(ele==val && ind1<=ind2){
//             count++;
//             console.log(ele,ind1,val,ind2)
//         }
//     }
// }

// for(let [ind1,ele] of arr1.entries()){
//     for(let val=1;val<=ip2.length;val++){
//         if(ele===ip2[val] && ind1<=val){
//             console.log(ele,ip2[val],ind1,val)
//             count++;
//         }
//     }
// }

// let ind1=-1,ind2=-1
// for(let ele=0;ele<ip1.length;ele++){
//     // console.log(ip1[ele])
//     for(let val=ele;val<ip2.length;val++){
//         // console.log(ip1[ele],ip2[val])
//         if(ip1[ele]==ip2[val] && ele<=val && ind1!=val && ind2!=ele){
//             ind1=val;
//             ind2=ele
//             console.log(ip1[ele],ip2[val],ele,val)
//             count++;
//         }
//     }
// }

let obj = {};
//     for(let ele=0;ele<ip1.length;ele++){
//         for(let val=0;val<ip2.length;val++){
//             // console.log("ele: ",i,e)
//             if(ip1[ele]===ip2[val] ){
//                 console.log("ele: ",ip1[ele],ip2[val],ele,val)
//                 // console.log(ip1[ele],ip2[val])
//                 obj[ele]=count++;
//             }
//     }
//     count=0
// }

// for (let [i, e] of arr1.entries()) {
//     for (let val=i,ele = 0; val < ip1.length && ele<ip2.length; val++,ele++) {
//     //   console.log(ele,val)
//       if (ip1[ele] === ip2[val]) {
//             // j=val
//           console.log("ele: ",ip1[ele],ip2[val],ele,val);
//           obj[i] = count++;
//           console.log(obj);
//           // break;
//       }
//       else if(ip1[ele] !== ip2[val] && val!=0){
//         val--;   
//   }
//   else if(ip1[ele] !== ip2[val] && val==0){
//     val=-1;
//     }
//     }
//   count = 1;
// }
// console.log(count)

for (let [i, e] of arr1.entries()) {
    for (let val=i,ele = 0; val < ip1.length && ele<ip2.length; val++,ele++) {
      // console.log(ele,val)
      if (ip1[ele] === ip2[val]) {
            // j=val
          // console.log("ele: ",ip1[ele],ip2[val],ele,val);
          obj[i] = count++;
          console.log(obj);
          // break;
      }
      else if(ip1[ele] !== ip2[val] && val!=0){
        val--;   
  }
  else if(ip1[ele] !== ip2[val] && val==0){
    val=-1;
    }
    else if(val==0){
        ele=0;
    }
    }
  count = 1;
}

console.log(obj);

let output=Math.max(...Object.values(obj))

console.log("final count: ",output)