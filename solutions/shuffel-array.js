function shuffel(nums, n) {
    var length = nums.length,
        i = j = k = 0;
    var newArray = [];
    j = n;
    for (i; i < n; i++, k++) {
        newArray.push(nums[i])
        newArray.push(nums[j + k])
    }
    return newArray;
}
var GivenArray = [2, 5, 1, 3, 4, 7];
var p = shuffel(GivenArray, 3);
console.log(p);