function pairwise(arr, arg) {
    var newarr = [];
    if (arr.length === 0) {
        return 0;
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === arg && newarr.indexOf(i) < 0 && newarr.indexOf(j) < 0) {
                newarr.push(i, j);
                break;
            }
        }
    }

    return newarr.reduce(function (a, b) {
        return a + b;
    });
}

var k = pairwise([1, 1, 1], 2);
console.log(k);
