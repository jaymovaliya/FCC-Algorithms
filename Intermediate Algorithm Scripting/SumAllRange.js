function sumAll(arr) {
    var n1 = arr[0];
    var n2 = arr[1];
    if (n1 > n2) {
        t = n1;
        n1 = n2;
        n2 = t;
    }
    var sum = 0;
    for (var i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
}

sumAll([5, 10]);