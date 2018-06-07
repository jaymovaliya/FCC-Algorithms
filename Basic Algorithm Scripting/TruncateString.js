function truncateString(str, num) {
    var ans = str.substr(0, num);
    if (ans.length > 3 && num < str.length) {
        ans = ans.substr(0, (ans.length - 3));
        ans += '...';
        return ans;
    }
    else if (num >= str.length) {
        return str;
    }
    else {
        ans += '...';
        return ans;
    }
}

truncateString("A-", 1);