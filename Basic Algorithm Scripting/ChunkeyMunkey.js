function chunkArrayInGroups(arr, size) {
    var ans = [];
    for (var i = 0; i < arr.length; i += size) {
        ans.push(arr.slice(i, i + size));
    }
    return ans;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);