function orbitalPeriod(arr) {
    var newarr = [];
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for (var obj in arr) {
        var t1 = 2 * Math.PI;
        var t2 = Math.pow(earthRadius + arr[obj].avgAlt, 3);
        var t3 = Math.sqrt(t2 / GM);
        var orbPeriod = Math.round(t1 * t3);
        delete arr[obj].avgAlt;
        arr[obj].orbitalPeriod = orbPeriod;
        newarr.push(arr[obj]);
    }
    return newarr;
}

var k = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {
    name: "moon",
    avgAlt: 378632.553
}]);
console.log(k);