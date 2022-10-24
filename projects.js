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

//Telephone number validator - worked but didn't pass all the tests. Need to look at checking the length of the different mini-strings of numberals

function telephoneCheck(str) {

//Check if first character is numeral or bracket around the first 3 digits
  const numeral = /^[0-9]/;
  if (str.charAt(0).match(numeral) || 
  (str.charAt(0) === "(" && str.charAt(4) === ")")) { /* start of if(1) */

//Remove all the non-numeric chracters
    const justNumerals = str.replace(/[^a-z0-9]/gi, '');

if (justNumerals.charAt(0) === "1" &&
    justNumerals.length === 11) { /* start of if(2) */
      return true; 
      } else if (justNumerals.length === 10) { /* end of if(2), start of if (3) */
      return true;
      } return false;/* end of if(3) */
  } /* end of if(1) */
}
