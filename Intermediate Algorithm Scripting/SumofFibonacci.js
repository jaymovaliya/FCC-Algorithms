function sumFibs(num) {
    var sum = 2;
    var k1 = 1;
    var k2 = 1;
    var k = 0;
    while (k <= num) {
        if (k % 2 !== 0) {
            sum += k;
        }
        k = k1 + k2;
        k1 = k2;
        k2 = k;
    }
    return sum;
}

sumFibs(75025);