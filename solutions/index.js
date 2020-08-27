var twoSum = function (nums, target) {
    var indicies, collectedarray = [];
    var localArray = nums;
    var arrayLength = nums.length;
    for (var i = 0; i < arrayLength; i++) {
        for (let j = i + 1; j < arrayLength; j++) {
            if (localArray[i] + localArray[j] === target) {
                // console.log('found a match');
                collectedarray.push([i, j]);
            }
        }
    }
    return collectedarray;
};

var p = twoSum([
    2, 7, 11, 15
], 9)
console.log(p);