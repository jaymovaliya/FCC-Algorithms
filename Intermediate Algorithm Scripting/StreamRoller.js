function steamrollArray(arr) {
    var ans = [];
    var roller = function (x) {
        if (!Array.isArray(x)) {
            ans.push(x);
        } else {
            for (var i in x) {
                roller(x[i]);
            }
        }
    };
    arr.forEach(roller);
    return ans;
}


steamrollArray([1, [2], [3, [[4]]]]);