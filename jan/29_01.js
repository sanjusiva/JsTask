/*
This is a sample obj,
 
const fileSystem = {
  root: {
    files: ['file1.txt', 'file2.txt'],
    subdirectories: {
      folderA: {
        files: ['fileA1.txt', 'fileA2.txt'],
        subdirectories: {
          folderB: {
            files: ['fileB1.txt', 'fileB2.txt'],
          }
        }
      },
      folderC: {
        files: ['fileC1.txt', 'fileC2.txt'],
      }
    }
  }
};

From this obj get all the file paths as array. Output need to be 
 
[
  'root/file1.txt',
  'root/file2.txt',
  'root/folderA/fileA1.txt',
  'root/folderA/fileA2.txt',
  'root/folderA/folderB/fileB1.txt',
  'root/folderA/folderB/fileB2.txt',
  'root/folderC/fileC1.txt',
  'root/folderC/fileC2.txt',
]
*/

const fileSystem = {
    root: {
      files: ['file1.txt', 'file2.txt'],
      subdirectories: {
        folderA: {
          files: ['fileA1.txt', 'fileA2.txt'],
          subdirectories: {
            folderB: {
              files: ['fileB1.txt', 'fileB2.txt'],
              subdirectories: {
                folderD: {
                  files: ['fileD1.txt', 'fileD2.txt'],
                }
            }
        }
          }
        },
        folderC: {
          files: ['fileC1.txt', 'fileC2.txt'],
        }
      }
    }
  };
let res=[]
let output=[];
Object.entries(fileSystem).forEach(([key,val])=>{
    console.log("k: ",key," v: ",val)
    Object.entries(val).forEach(([key1,val1])=>{
        console.log("k1:",key1," v1: ",val1)
        console.log(val1.hasOwnProperty('0'),val1)
        output=getPath(key,val1)
    })
})
function getPath(root,val){
    if(val.hasOwnProperty('0')){
        val.forEach((ele)=>{
            console.log("r: ",root+"/"+ele);
            res.push(root+"/"+ele)
            return res;
        })
    }
    else{
        console.log('else: ',val)
        Object.entries(val).forEach(([eleKey,eleVal])=>{
        console.log("ev: ",eleVal," ek: ",eleKey);
        Object.entries(eleVal).forEach(([key2,val2])=>{
            console.log("k2: ",key2," v2: ",val2)
            let rootKey=root+"/"+eleKey
            console.log(getPath(rootKey,val2))
        })
    })
    return res;
}
}
console.log("output: ",output)