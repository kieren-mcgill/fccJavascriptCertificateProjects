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



//Telephone number validator

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


//Cash Register

function checkCashRegister(price, cash, cid) {
  const currency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let changeNeeded = cash - price; //running total of remaining change to give.
  let changeGiven = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  let arrToReturn = [];
  
  //Starting condition of coinsNotes
  let coinsNotes = [[], [], [], [], [], [], [], [], []];
  for (let i = 8; i >= 0; i--) {
    let coinNoteCount = cid[i][1]/currency[i];
    for (let j = 0; j < coinNoteCount; j++) {
      coinsNotes[i].push(currency[i])
    } 
  }
  //Starting condition of cashInRegister
  let cashInRegister = 0;
  for (let k = 0; k <= 8; k++) {
  cashInRegister += cid[k][1];
} cashInRegister = Math.round(cashInRegister*100)/100;

//Populates the array to return if change can be given
for (let l = 8; l >= 0; l--) {
  for (let m = 0; m < coinsNotes[l].length; m++) {
    if (coinsNotes[l][m] <= changeNeeded) {
        changeGiven[l][1] += coinsNotes[l][m];
        cashInRegister -= coinsNotes[l][m];
        cashInRegister = Math.round(cashInRegister*100)/100;
        changeNeeded -= coinsNotes[l][m];
        changeNeeded = Math.round(changeNeeded*100)/100;
      }
    } 
//Inelegent solution to decimal problem
    var changeGivenRounded = [["PENNY", Math.round(changeGiven[0][1]*100)/100], ["NICKEL", Math.round(changeGiven[1][1]*100)/100], 
                              ["DIME", Math.round(changeGiven[2][1]*100)/100], ["QUARTER", Math.round(changeGiven[3][1]*100)/100], 
                              ["ONE", Math.round(changeGiven[4][1]*100)/100], ["FIVE", Math.round(changeGiven[5][1]*100)/100], 
                              ["TEN", Math.round(changeGiven[6][1]*100)/100], ["TWENTY", Math.round(changeGiven[7][1]*100)/100], 
                              ["ONE HUNDRED", Math.round(changeGiven[8][1]*100)/100]];
    
    if (changeGiven[l][1] > 0) {
  arrToReturn.push(changeGivenRounded[l]);
  }  
}

return (changeNeeded > 0 ? 
{status: "INSUFFICIENT_FUNDS", change: []} :
changeNeeded === cashInRegister ? {status: "CLOSED", change: changeGivenRounded} :
{status: "OPEN", change: arrToReturn});
}

