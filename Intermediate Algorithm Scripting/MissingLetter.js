function fearNotLetter(str) {
    var char = '';
    for (var i = 0; i < (str.length - 1); i++) {
        if (String.fromCharCode(str.charCodeAt(i) + 1) == str[i + 1]) {
        }
        else {
            char += String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    if (char == '') {
        return undefined;
    }
    else {
        return char;
    }
}

fearNotLetter("yz");