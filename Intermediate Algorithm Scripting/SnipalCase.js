function spinalCase(str) {
    var arr = str.match(/[A-Z][a-z]+|[a-z][a-z]+/g);
    console.log(arr);
    str = arr.join("-");
    str = str.toLowerCase();
    console.log(str);
}

spinalCase('Teletubbies say Eh-oh');