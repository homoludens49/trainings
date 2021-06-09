
maxCharacters = (str) => {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";
  str.split("").forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  for (let char in charMap) {
    //debugger;
    if(charMap[char]>maxNum){
        maxNum=charMap[char]
        maxChar= char
    }
  }
  return maxChar
};
module.exports = maxCharacters;
