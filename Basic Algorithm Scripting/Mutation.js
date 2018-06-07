function mutation(arr) {
    var flag = true;
    var check = arr[0].toLowerCase();
    var test = arr[1].toLowerCase();
    for (var i = 0; i < test.length; i++) {
        if (check.indexOf(test[i]) == -1) {
            flag = false;
        }
    }
    return flag;
}

mutation(["Mary", "Army"]);