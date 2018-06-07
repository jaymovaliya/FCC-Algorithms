function confirmEnding(str, target) {
    var k = target.length;
    if (str.substr(-k) == target) {
        return true;
    }
    return false;
}

confirmEnding("Bastian bhai", "ki");