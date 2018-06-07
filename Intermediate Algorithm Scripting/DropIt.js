function dropElements(arr, func) {
    var ans = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            ans.push(arr[i]);
            break;
        }
    }
    for (var j = i + 1; j < arr.length; j++) {
        ans.push(arr[j]);
    }
    return ans;
}

dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
});