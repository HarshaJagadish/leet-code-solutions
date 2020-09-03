var givenArray = [3, 1, 2, 10, 1];

function runningNumbers(receivedarray) {
    var i = j = p = 0;
    var returnArray = [];
    for (j = i; j <= receivedarray.length - 1; j++) {
        p = p + receivedarray[j];
        returnArray.push(p);
    }
    return returnArray;

}
var ans = runningNumbers(givenArray)
console.log(ans)