function titleCase(str) {
    var ans = "";
    str = str.toLowerCase();
    ans += str[0].toUpperCase();
    for (var i = 1; i < str.length; i++) {
        if (str[i] == ' ') {
            ans += str[i];
            ans += str[i + 1].toUpperCase();
            i++;
        }
        else {
            ans += str[i];
        }
    }
    return ans;
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");