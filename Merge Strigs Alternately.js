var mergeAlternately = function (word1, word2) {
  let len = 0;
  let index = 0;
  let str = "";
  let smaller = "";
  let bigger = "";
  if (word1.length > word2.length) {
    len = word1.length;
    smaller = word2;
    bigger = word1;
  } else {
    len = word2.length;
    smaller = word1;
    bigger = word2;
  }

  for (let i = 0; i < len; i++) {
    if (index < word1.length) {
      str += smaller[i] + bigger[i];
    } else {
      str += bigger[i];
    }
  }

  return str;
};
console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));
