function findPermutations(string) {
    if (string.length === 1) {
        return string;
    }

    var permutations = [];

    for (var i = 0; i < string.length; i++) {
        var char = string[i];

        var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

        for (var subPermutation of findPermutations(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}

function norepeat(str) {
    var n = findPermutations(str);
    var cnt = 0;
    var st, flag;
    for (var j = 0; j < n.length; j++) {
        st = n[j];
        flag = 0;
        for (var i = 0; i < (st.length - 1); i++) {
            if (st[i] === st[i + 1]) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            cnt += 1;
        }
    }
    return cnt;
}


k = norepeat('aab');
console.log(k);