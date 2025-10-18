var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const gcd = (a, b) => {
    if (b == 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  };

  return str1.slice(0, gcd(str1.length, str2.length));
};
