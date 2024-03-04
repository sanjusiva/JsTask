let str="a quick brown fox jumps over the lazy dog"
let mapObj = {
   fox:"dog",
   dog:"fox"
};
str = str.replace(/fox|dog/gi, function(matched){
    console.log('matched: ',matched);
    return mapObj[matched];
});
console.log(str);
