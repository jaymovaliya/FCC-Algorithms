function destroyer(arr) {
    var temp = Array.from(arguments);
    var checkin = temp[0];
    var test = [];
    var out = [];
    for (var i = 1; i < temp.length; i++) {
        test.push(temp[i]);
    }
    for (var i = 0; i < test.length; i++) {
        out = checkin.filter(function (value) {
            return value != test[i];
        });
        checkin = out;
    }
    return out;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);