const reverseStr = (str) => {
  return str.split("").reduce((revStr, char) => {
    return char + revStr;
  }, "");
};

// Call Function

//Function to reverse string
// const reverseStr =(str)=>{
//     return str.split('').reduce((revStr,char)=>{
//         return char + revStr
//     }, '')
// }
// const reverseStr =(str)=>{
//     let revStr = ''
//     str.split('').forEach(char=>revStr =char+revStr)
//     return  revStr
// }

// const reverseStr =(str)=>{
//     let revStr =''
//     for(let char of str){
//         revStr=char+ revStr
//     }
//     return revStr

// }
// const reverseStr =(str)=>{
// let revStr = ''
// for (let i=0;i<=str.length -1 ; i++){
//     revStr = str[i]+revStr
// }
// return revStr
// }
////////////

//   str.toLowerCase().split('').reverse().join('')

module.exports = reverseStr;
