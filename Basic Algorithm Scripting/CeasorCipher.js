function rot13(str) {
    var out = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] < 'A' || str[i] > 'Z') {
            out += str[i];
        }
        else {
            out += String.fromCharCode(((str.charCodeAt(i) + 13 - 65) % 26) + 65);
        }
    }
    return out;
}

rot13("SERR PBQR PNZC");