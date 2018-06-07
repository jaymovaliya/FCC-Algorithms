function updateInventory(arr1, arr2) {
    if (arr1.length === 0) {
        return arr2.sort(function (a, b) {
            var x = a[1].toLowerCase();
            var y = b[1].toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
    }
    else if (arr2.length === 0) {
        return arr1.sort(function (a, b) {
            var x = a[1].toLowerCase();
            var y = b[1].toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            return 0;
        });
    }
    else {
        for (var i = 0; i < arr2.length; i++) {
            var chg = 0;
            for (var j = 0; j < arr1.length; j++) {
                if (arr1[j][1] === arr2[i][1]) {
                    arr1[j][0] += arr2[i][0];
                    chg = 1;
                    break;
                }
            }
            if (chg === 0) {
                arr1.push(arr2[i]);
            }

        }

    }
    return arr1.sort(function (a, b) {
        var x = a[1].toLowerCase();
        var y = b[1].toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

k = updateInventory(curInv, newInv);
console.log(k);