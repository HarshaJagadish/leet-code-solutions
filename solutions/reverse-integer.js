var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
var MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER;

// let givenNumber;
function ReverseNumberFunction(x) {
    var reverse = 0,
        p;
    x < 0 ? p = -1 : p = 1;
    x < 0 ? x = x * p : x = x;
    while (x != 0) {
        var pop = x % 10;
        x = Math.floor(x / 10);

        reverse = (reverse * 10 + pop);
    }

    return reverse * p;
}

var p = ReverseNumberFunction(1534236469)
console.log(p)