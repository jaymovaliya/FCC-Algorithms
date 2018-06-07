function checkCashRegister(price, cash, cid) {
    var change = [];
    var chk = 0;
    var diff = cash - price;
    for (var i = 0; i < cid.length; i++) {
        chk += cid[i][1];
    }
    if (chk <= diff) {
        if (chk < diff) {
            return "Insufficient Funds";
        }
        else {
            return "Closed";
        }
    }
    else {
        var mod_cid = [[0.01], [0.05], [0.1], [0.5], [1], [5], [10], [20], [100]];
        for (i = 0; i < cid.length; i++) {
            mod_cid[i].push(cid[i][1]);
        }
        for (i = (mod_cid.length - 1); i >= 0; i--) {
            if (diff > mod_cid[i][0]) {
                var t = Math.floor(diff / mod_cid[i][0]);
                t *= mod_cid[i][0];
                if (t > mod_cid[i][1]) {
                    t = mod_cid[i][1];
                }
                console.log(t);
                diff -= t;
                diff = diff.toFixed(2);
                change.push([cid[i][0], t]);
            }
            else if (diff === mod_cid[i][0]) {
                if (diff > mod_cid[i][1]) {
                    return "Insufficient Funds";
                }
                change.push([cid[i][0], diff]);
                break;
            }
        }
    }
    return change;
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
