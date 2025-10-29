var increasingTriplet = function (nums) {
 let n1, n2;
 let flag = false;
  n1 = nums[0];
  for (let x = 1; x < nums.length; x++) {
    if(flag && nums[x] > n2){
      return true
    }
    
    if (nums[x] <= n1) {
      n1 = nums[x];
    } else {
      n2 = nums[x];
      flag = true;
    }
  }
  return false;
};

console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
