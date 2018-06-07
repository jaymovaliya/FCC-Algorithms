function smallestCommons(arr) {

    var t;
    if (arr[0] > arr[1]) {
        t = arr[0];
        arr[0] = arr[1];
        arr[1] = t;
    }
    var ans = arr[1];
    while (1) {
        var flag = 0;
        for (var i = arr[0]; i <= arr[1]; i++) {
            if (ans % i !== 0) {
                ans += arr[1];
                flag = 1;
            }
        }
        if (flag === 0) {
            break;
        }
    }
    return ans;
}


smallestCommons([5, 1]);