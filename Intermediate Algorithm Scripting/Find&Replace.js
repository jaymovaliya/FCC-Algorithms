function myReplace(str, before, after) {
    var fafter = '';
    if (before[0] >= 'A' && before[0] <= 'Z') {
        if (after[0] >= 'A' && after[0] <= 'Z') {
            fafter[0] += after[0];
        }
        else {
            fafter += String.fromCharCode(after.charCodeAt(0) - 32);
        }
    }
    else {
        fafter += after[0];
    }
    for (var i = 1; i < after.length; i++) {
        fafter += after[i];
    }

    var ans = str.replace(before, fafter);
    return ans;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");