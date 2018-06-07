function translatePigLatin(str) {
    var ans = ''
    if (str[0] === 'a' || str[0] === 'e' || str[0] === 'i' || str[0] === 'o' || str[0] === 'u') {
        ans = str + 'way';
    }
    else if (str[1] === 'a' || str[1] === 'e' || str[1] === 'i' || str[1] === 'o' || str[1] === 'u') {
        ans = str.substr(1) + str.substr(0, 1) + 'ay';
    }
    else {
        ans = str.substr(2) + str.substr(0, 2) + 'ay';
    }

    return ans;
}

translatePigLatin("glove");
