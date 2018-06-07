function chk(arg) {
    if (typeof arg === 'number') {
        return arg;
    }
    else {
        return undefined;
    }
}

function addTogether() {
    if (arguments.length === 2) {
        var x = chk(arguments[0]);
        var y = chk(arguments[1]);
        if (x !== undefined && y !== undefined) {
            return x + y;
        }
        else {
            return undefined;
        }
    }
    else {
        var i = chk(arguments[0]);
        if (i !== undefined) {
            return function (secondarg) {
                {
                    if (chk(secondarg) !== undefined) {
                        return i + secondarg;
                    }
                    else {
                        return undefined;
                    }
                }
            }
        }
        else {
            return undefined;
        }
    }
}

addTogether(2, [3]);