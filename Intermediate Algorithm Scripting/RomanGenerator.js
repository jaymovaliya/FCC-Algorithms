function convertToRoman(num) {
    var numA = [];
    var romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M', 'MM', 'MMM'];
    var ansA = [];
    var n = parseInt(Math.log10(num));
    for (var i = 0; i <= n; i++) {
        var rem = num % 10;
        rem *= Math.pow(10, i);
        numA.push(rem);
        num /= 10;
        num = parseInt(num);
    }
    numA.reverse();
    for (var i = 0; i < numA.length; i++) {
        var len = parseInt(Math.log10(numA[i]));
        var ind = (9 * len) + (numA[i] / (Math.pow(10, len))) - 1;
        ansA.push(romans[ind]);
    }
    var ans = ansA.join("");
    return ans;
}

convertToRoman(3999);