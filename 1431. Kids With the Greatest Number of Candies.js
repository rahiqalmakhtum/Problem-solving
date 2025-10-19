var kidsWithCandies = function (candies, extraCandies) {
  const arr = [];
  const max = Math.max(...candies);

  for (let i in candies) {
    if (candies[i] + extraCandies >= max) {
      arr[i] = true;
    } else {
      arr[i] = false;
    }
  }

  return arr2;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
