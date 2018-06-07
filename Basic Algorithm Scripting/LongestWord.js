function findLongestWord(str) {
    const k = str.split(' ');
    var len = 0;
    for (var i = 0; i < k.length; i++) {
        var tlen = k[i].length;
        if (tlen > len) {
            len = tlen;
        }
    }
    return len;
}

findLongestWord("The quick brown fox jumped over the lazy dog");