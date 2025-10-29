var isPalindrome = function (x) {
  let item = x.toString();
  let a = [...item];
  let b = [...a].reverse();
  let flag = true;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i] || x < 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

console.log(isPalindrome(0));
