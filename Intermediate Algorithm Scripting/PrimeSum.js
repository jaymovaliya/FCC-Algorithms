function sumPrimes(num) {
    var sum = 2;
    for (var j = 3; j <= num; j++) {
        var flag = 0;
        for (var i = 2; i <= Math.sqrt(j); i++) {
            if (j % i === 0) {
                flag = 1;
                break;
            }
        }
        if (flag === 0) {
            sum += j;
        }
    }

    return sum;
}

sumPrimes(977);