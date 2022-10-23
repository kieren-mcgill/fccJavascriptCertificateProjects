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
