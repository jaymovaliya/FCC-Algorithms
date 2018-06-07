function diffArray(arr1, arr2) {
    var newArr = [];
    var check;
    for (var i = 0; i < arr1.length; i++) {
        check = arr2.indexOf(arr1[i]);
        if (check === -1) {
            newArr.push(arr1[i]);
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        check = arr1.indexOf(arr2[i]);
        if (check === -1) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);