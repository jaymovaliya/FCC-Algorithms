function binaryAgent(str) {
    var arr = str.split(" ");
    var ans = [];
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        var k = 0;
        for (var j = 0; j < arr[i].length; j++) {
            k += arr[i][j] * Math.pow(2, 7 - j);
        }
        console.log(k);
        ans.push(String.fromCharCode(k));
    }
    return ans.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");