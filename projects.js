//Palindrome Checker

function palindrome(str) {
//Removes special characters, spaces and uppercase
  const lowerStr = str.toLowerCase();
  const replacedStr = lowerStr.replace(/[^a-z0-9]/gi, '');
  let splitStr = replacedStr.split("");
  let newArray = "";
  
//Returns the string as an array, but without the middle character if it has an odd number of characters.
  if (splitStr.length%2 === 1) {
    const halfArray = (splitStr.length -1)/2;
    newArray = splitStr.slice(0, halfArray).concat(splitStr.slice((halfArray + 1), splitStr.length));
  } else {
    newArray = splitStr;
  }

//Splits the array version of the string into a front and back half.
  let frontOfArray = newArray.slice(0, (newArray.length/2));
  let backOfArray = newArray.slice((newArray.length/2), newArray.length);
  let reversedBackOfArray = backOfArray.reverse();
  
//Compares the front half and reversed back half of the string;
if (frontOfArray.join("") == reversedBackOfArray.join("")) {
  return true;
} else {
  return false;
}
}

//Palindrome Checker refactored!

function palindrome (str) {
  const newStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  for (let i = 0; i < newStr.length; i++) {
    if (newStr.charAt(0 +i) !== newStr.charAt((newStr.length - 1) - i)) {
      return false;
    }
  } return true
}

//Caesars Cipher

const alpha = [
  'A', 'B', 'C', 'D', 'E',
  'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q',
  'R', 'S', 'T', 'U', 'V', 'W',
  'X', 'Y', 'Z', '.', '?', '!', 
  ' '
];

function rot13(str) {
// find the position in the alphabet of each character and store in array
  let characterIndex = [];
  for (let i = 0; i < str.length; i++) {
    for (let i2 = 0; i2 < alpha.length; i2++) {
      if (str.charAt(i) === alpha[i2]) {
        characterIndex.push(i2);
      }
    }
  }
//array to receive deciphered characters
  let deciphered = [];

//For each indexed letter in the string...
for (let i3 = 0; i3 <characterIndex.length; i3++) {
  //Separate what to do if the letters are a to m, n to z, or other character
  characterIndex[i3] < 13 ?
      deciphered.push(alpha[characterIndex[i3]+13])
  
  : characterIndex[i3] > 12 && characterIndex[i3] < 26 ?
      deciphered.push(alpha[characterIndex[i3]-13])
      
  : deciphered.push(alpha[characterIndex[i3]]);
}
 return deciphered.join("");
}
rot13("SERR PBQR PNZC");



//Telephone number validator - worked but didn't pass all the tests. Need to look at checking the length of the different mini-strings of numberals

const regex1 = /^\b\d{10}\b$/g;
const regex2 = /^\(\d{3}\)\d{3}-\d{4}\b$/g;
const regex3 = /^\d{3}-\d{3}-\d{4}\b$/g;
let newStr = "";

function telephoneCheck(str) {
  if (str.charAt(0) == 1) {
    newStr = str.replace(/\s/g, '').slice(1);
  } else newStr = str.replace(/\s/g, '');

  if (regex1.test(newStr)||regex2.test(newStr)||regex3.test(newStr)) {
    return true;
  } else return false;
}


//Roman Numeral Converter

const digitIndex = [[0], [1], [1, 1], [1, 1, 1], [4], 
[5], [5, 1], [5, 1, 1], [5, 1, 1, 1], [9]];

const romanDigits = [{0: "", 1: "M"}, {0: "", 1: "C", 4: "CD", 5: "D", 9: "CM"},{0: "", 1: "X", 4: "XL", 5: "L", 9: "XC"}, {0: "", 1: "I", 4: "IV", 5: "V", 9: "IX"}]
   
function convertToRoman(num) {
  let numberAsArray = Array.from(String(num), Number);
  let digitAsNumeral = [];
  
  for (let j = 0; j < numberAsArray.length; j++) {
    
    let chosenDigitIndex = digitIndex[numberAsArray[j]];
    
  for (let i = 0; i < chosenDigitIndex.length; i++) {
    digitAsNumeral.push(romanDigits[j + (4 - numberAsArray.length)][chosenDigitIndex[i]]);
    } 
  }
  return digitAsNumeral.join("");
}
