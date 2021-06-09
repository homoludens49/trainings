const capitalizeStr = (str) => {
    return str.toLowerCase().split(' ').map(word=> word[0].toUpperCase()+word.substring(1,word.length)).join(' ');
};

module.exports = capitalizeStr;

/////////////
// let words = str.toLowerCase().split(' ')
// for(i=0;i < words.length;i++){
//     words[i]=words[i].substring(0,1).toUpperCase()+words[i].substring(1)
// }
// return words.join(' ')
/////////////////////////
//return str.toLowerCase().split(' ').map(word=> word[0].toUpperCase()+word.substring(1,word.length)).join(' ');
////////////////?????????
// return str.replace(/\b[a-z]/gi, function(char){
//     return char.toUpperCase()
// })
