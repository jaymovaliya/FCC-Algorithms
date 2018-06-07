function bouncer(arr) {
    var answer = arr.filter(function (value) {
        return new Boolean(value) == true;
    });
    return answer;
}

bouncer([7, "ate", "", false, 9]);