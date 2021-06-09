longestWord = (str) => {
  //create filtered array, filter out , . ..,
  const wordArr = str.toLowerCase().match(/[a-z0-9]+/g);
  //sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  //if multiple words, then put in array
  const longestwordArray = sorted.filter(
    (word) => word.length === sorted[0].length
  );

  if (longestwordArray.length === 1) {
    return longestwordArray[0];
  } else {
    return longestwordArray;
  }
};

module.exports = longestWord;
///////////my solution
// longestWord = (str) => {
//     const words = str.toLowerCase().split(/\W+/);
//     const wordLengths = {};
//     let maxLength = 0;
//     let maxWord = "";
//     let prevmaxLength = 0;
//     let maxWords = [];
//     for (let word of words) {
//       wordLengths[word] = word.length;
//       if (word.length >= maxLength) {
//         maxLength = word.length;
//         maxWord = word;
//         debugger;
//         if (maxLength > prevmaxLength) {
//           prevmaxLength = maxLength;
//           maxWords.splice(0, 1, maxWord);
//         } else {
//           prevmaxLength = maxLength;
//           maxWords.push(maxWord);
//         }
//       }
//     }

//      if(maxWords.length===1){
//     return maxWords[0]
//     }else{
//     return maxWords
//     }
//   };

//////other solution
// longestWord = (str) => {
//     //create filtered array, filter out , . ..,
//   const wordArr = str.toLowerCase().match(/[a-z0-9]+/g)
//     //sort by length
//     const sorted = wordArr.sort((a,b)=>{
//         return b.length - a.length
//     })
//     //if multiple words, then put in array
//     const longestwordArray = sorted.filter((word)=>{
//         return word.length === sorted[0].length
//     })

//     if(longestwordArray.length ===1){
//         return longestwordArray[0]
//     }else{
//         return longestwordArray
//     }
// };
