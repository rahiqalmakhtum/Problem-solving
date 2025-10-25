var reverseWords = function (s) {
  let str = s.split(" ");
  let arr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i]) {
      arr.push(str[i]);
    }
  }

  return arr.join(" ");
};

console.log(reverseWords("the sky is blue"));
