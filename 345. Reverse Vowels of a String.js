var reverseVowels = function (s) {
  let str = "";
  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    let lowerString = s.toLowerCase();
    let x = 0;
    if (
      lowerString[i] == "a" ||
      lowerString[i] == "e" ||
      lowerString[i] == "i" ||
      lowerString[i] == "o" ||
      lowerString[i] == "u"
    ) {
      str += s[i];
    }
  }

  let reverse = [...str].reverse();

  let x = 0;
  for (let i = 0; i < s.length; i++) {
    let lowerString = s.toLowerCase();
    if (
      lowerString[i] == "a" ||
      lowerString[i] == "e" ||
      lowerString[i] == "i" ||
      lowerString[i] == "o" ||
      lowerString[i] == "u"
    ) {
      newStr += reverse[x];
      x++;
    } else {
      newStr += s[i];
    }
  }

  return newStr;
};
