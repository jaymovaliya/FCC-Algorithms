function pairElement(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        var pair = [];
        pair.push(str[i]);
        if (str[i] === 'G') {
            pair.push("C");
        }
        else if (str[i] === 'C') {
            pair.push("G");
        }
        else if (str[i] === 'A') {
            pair.push("T");
        }
        else {
            pair.push("A");
        }
        arr.push(pair);
    }
    return arr;
}

pairElement("GCG");