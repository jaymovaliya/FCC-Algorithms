function whatIsInAName(collection, source) {
    var arr = [];
    var msource = [];
    var val = [];
    msource = Object.keys(source);

    for (var i = 0; i < msource.length; i++) {
        val.push(source[msource[i]])
    }
    for (var i = 0; i < collection.length; i++) {
        var cnt = msource.length;
        for (var j = 0; j < msource.length; j++) {
            if (collection[i].hasOwnProperty(msource[j]) && collection[i][msource[j]] === val[j]) {
                cnt -= 1;
            }
        }
        if (cnt === 0) {
            arr.push(collection[i]);
        }
    }
    return arr;
}

whatIsInAName([{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2}], {"a": 1, "b": 2});