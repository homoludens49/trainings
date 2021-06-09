const checkPalindrome = (str) => {

    const newstr =  str.split("").reduce((revStr, char) => {
        return char + revStr;
      }, "");
     return newstr === str ? true:false
  };

module.exports = checkPalindrome;
