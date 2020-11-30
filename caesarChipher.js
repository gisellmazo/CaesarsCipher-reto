'use strict';

function rot13(str) {
    let rotCharArray = [];
    let regEx = /[A-Z]/;
    str = str.split("");
    for (let x in str) {
      if (regEx.test(str[x])) {
        rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
      } else {
        rotCharArray.push(str[x].charCodeAt());
      }
    }
    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
  }
  
  
  console.log(rot13("SERR PBQR PNZC")); //FREE CODE CAMP

  console.log(rot13("SERR CVMMN!")); // FREE PIZZA

  console.log(rot13("SERR YBIR?")); // FREE LOVE?

  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

