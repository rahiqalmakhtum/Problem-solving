var twoSum = function (nums, target) {
  let arr = [];
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      arr[x] = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] == target) {
        arr[x] = i;
        arr[x + 1] = j;
        x++;
      }
    }
  }
  return arr;
};
