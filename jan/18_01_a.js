/*
Harold is a kidnapper who wrote a ransom note, but now he is worried it will 
be traced back to him through his handwriting. He found a magazine and wants to 
know if he can cut out whole words from it and use them to create an untraceable 
replica of his ransom note. The words in his note are case-sensitive and he must use 
only whole words available in the magazine. He cannot use substrings or concatenation 
to create the words he needs.
Given the words in the magazine and the words in the ransom note, 
print Yes if he can replicate his ransom note exactly using whole words from the magazine; 
otherwise, print No.
INPUT : 
6 4
give me one grand today night
give one grand today
OUTPUT: Yes
*/
let m=6;
let n=4;
let maga='give me one grand today night';
let note='give one grand today';

// let m=6;
// let n=5;
// let maga='two times three is not four'
// let note='two times two is four'

let output = wordsMatch(m,n,maga,note);
console.log(output)

function wordsMatch(m,n,maga,note){
    if(n>m){
        return 'No'
    }
    else{
        let mArr=maga.split(' ');
        let nArr=note.split(' ');
        let count=0
        // console.log(mArr,nArr)
        for(let i=0;i<=m ;i++){
            for(let j=0;j<=n;j++){
                if(mArr[i]===nArr[j] && mArr[i]!==undefined){
                    console.log(mArr[i],nArr[j])
                    mArr[i]='';
                    count++;
                }
            }
        }
        console.log(mArr,count)
        if(count===n){
            return 'Yes'
        }
        else{
            return 'No'
        }
    }
}