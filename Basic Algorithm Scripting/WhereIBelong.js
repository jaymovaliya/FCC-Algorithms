function getIndexToIns(arr, num) {
    arr.sort();
    var ind = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            ind += 1;
        }
    }
    return ind;
}

getIndexToIns([40, 60], 50);