function sym(args) {
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < (arguments[i].length - 1); j++) {
            if (arguments[i][j] === arguments[i][j + 1]) {
                arguments[i].splice(j, 1);
                j -= 1;
            }
        }
    }
    var ans = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        var newarr = [];
        for (var j = 0; j < ans.length; j++) {
            if (arguments[i].indexOf(ans[j]) !== -1) {
                var k = arguments[i].indexOf(ans[j]);
                arguments[i].splice(k, 1);
            }
            else {
                newarr.push(ans[j]);
            }
        }
        for (var p = 0; p < arguments[i].length; p++) {
            newarr.push(arguments[i][p]);
        }
        ans = newarr;
    }
    return ans.sort();
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);