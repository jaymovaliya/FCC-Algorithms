var Person = function (firstAndLast) {
    var fullname = firstAndLast;
    var namearr = firstAndLast.split(' ');
    this.setFullName = function (firstAndLast) {
        fullname = firstAndLast;
        namearr = fullname.split(' ');
    };
    this.setFirstName = function (first) {
        namearr[0] = first;
        fullname = namearr.join(' ');
    };
    this.setLastName = function (last) {
        namearr[1] = last;
        fullname = namearr.join(' ');
    };
    this.getFirstName = function () {
        return namearr[0];
    };
    this.getLastName = function () {
        return namearr[1];
    };
    this.getFullName = function () {
        return fullname;
    };
};

var bob = new Person('Bob Ross');
var k = bob.getFullName();
console.log(k);