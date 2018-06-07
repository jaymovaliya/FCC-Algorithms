function uniteUnique(arr) {
    var ans = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            if (ans.indexOf(arguments[i][j]) === -1) {
                ans.push(arguments[i][j]);
                console.log(arguments[i][j]);
            }
        }
    }
    return ans;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);