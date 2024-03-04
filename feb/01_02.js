/*
input = [
    field1:[
        {option:op1},
        {option:op2}
        {option:op3}
    ],
    field2:[
        {dep:{field:field1,option:option1}}
    ],
    field3:[
        {dep:{field:field1,option:option2}}
    ],
    field4:[
        {dep:{field:field2}}
    ]
]
output=>
field1=[field2,field3,field4]
field2=[field4]
*/
let input = [
    {field1:[
        {option:'op1'},
        {option:'op2'},
        {option:'op3'}
    ]},
    {field2:[
        {dep:{field:'field1'},option:'option1'}
    ]},
    {field3:[
        {dep:{field:'field1'},option:'option2'}
    ]},
    {field4:[
        {dep:{field:'field2'}}
    ]},
    // {field5:[
    //     {dep:{field:'field3'},option:'option3'}
    // ]}
]
let resObj={}
input.forEach((obj)=>{
    Object.keys(obj).forEach((key)=>{
    obj[key].forEach((item)=>{
        if(item.dep?.field!==undefined){
            if(!resObj[item.dep?.field]){
                resObj[item.dep?.field]=key
            }
            else{
                resObj[item.dep?.field]=[resObj[item.dep?.field],key]
            }
        }
    })
    })
})
console.log(resObj);
Object.entries(resObj).forEach(([k,v])=>{
    console.log(v.hasOwnProperty('0'),v,k)
    if(v.hasOwnProperty('0') && typeof v==='object'){
        v.forEach((ele)=>{findDep(ele)
        })
    }
})
function findDep(keyData){
    let rootKey;
    input.forEach((obj)=>{
        Object.keys(obj).forEach((key)=>{
            obj[key].forEach((item)=>{
                if(item.dep?.field!==undefined && keyData==item.dep?.field){
                    console.log(item.dep?.field,keyData);
                    Object.entries(resObj).forEach(([keyEle,valEle])=>{
                        if(valEle.hasOwnProperty('0') && typeof valEle==='object'){
                            valEle.forEach((ele)=>{
                                if(keyData==ele){
                        console.log("ele: ",keyEle,ele);
                        rootKey=keyEle;
                                }
                            })
                        }
                        if(keyEle==rootKey){
                            console.log("ele1: ",rootKey,keyEle);
                            resObj[keyEle].push(resObj[keyData])
                        }

                    })
                }
            })
        })
    })
    console.log("res: ",resObj);
}
