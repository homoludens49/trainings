const reverseInt = (int) => {
    return Number(int.toString().split('').reverse().join(''))
}


module.exports = reverseInt;
