function telephoneCheck(str) {
    var regXp = /^1? ?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/;
    return regXp.test(str);
}

telephoneCheck("1 555 555 5555");