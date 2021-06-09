const reverseStr = require("./ReverseStrings");
const checkPalindrome = require("./checkPalindrome");
const reverseInt = require("./reverseInt");
const capitalizeStr = require("./capitalize");
const maxCharacters = require("./maxcharacters");
const fizzBuzz = require("./fizzbuzz");
const longestWord = require("./longestWord")
test("reverse string function exist", () => {
  expect(reverseStr).toBeDefined();
});
test("reverse string", () => {
  expect(reverseStr("hello")).toEqual("olleh");
});
test("reverse string to lower Case", () => {
  expect(reverseStr("Hello")).toEqual("olleH");
});

test("Palindrome function exist", () => {
  expect(checkPalindrome).toBeDefined();
});
test("Check if the word is a palindrome", () => {
  expect(checkPalindrome('racecar')).toBeTruthy();
});
test("Check if the word is NOT a palindrome", () => {
  expect(checkPalindrome('hello')).toBeFalsy()
});

test("reverseInt function exist", () => {
  expect(reverseInt).toBeDefined();
});
test("reverse integer", () => {
  expect(reverseInt(123)).toBe(321);
});

test("capitalizeStr function exist", () => {
  expect(capitalizeStr).toBeDefined();
});
test("let me go motherfucker === Let Me Go Motherfucker", () => {
  expect(capitalizeStr('let me go motherfucker')).toBe('Let Me Go Motherfucker');
});

test("maxCharacters function exist", () => {
  expect(fizzBuzz).toBeDefined();
});
test("Check the most common letter in a word/ sentence => javascript === a", () => {
  expect(maxCharacters('javascript')).toBe('a');
});


test("fizzBuzz function exist", () => {
  expect(fizzBuzz).toBeDefined();
});

test("longestWord function exist", () => {
  expect(longestWord).toBeDefined();
});
test("longestWord returns the longest word in a sentence", () => {
  expect(longestWord("Hello , im currently working")).toEqual('currently')
})
test("longestWord returns the longest word in a sentence", () => {
  expect(longestWord("Hello,,,,,,,,,,,,,,,,,, im currently working on a superpowerfullturbine")).toEqual('superpowerfullturbine')
})
test("longestWord returns the longest words if there are multiple of same length", () => {
  expect(longestWord("Hello there , im  here")).toEqual(["hello", "there"])
})

test("longestWord returns the longest words if there are multiple of same length AND ignore commas, dots etc", () => {
  expect(longestWord("Hello,... there,,,,,,,,,,,,,,  im  here")).toEqual(['hello', 'there'])
})