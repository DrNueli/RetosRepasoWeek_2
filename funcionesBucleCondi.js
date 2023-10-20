"use strict";
// en el enunciado ponia literal .js, pero al llegar al final veo que tiene que ser todo .ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = exports.add = void 0;
function add(myWords) {
    var suma = 0;
    for (var i = 0; i < myWords.length; i++) {
        suma += myWords[i].length;
    }
    return suma;
}
exports.add = add;
;
function isEven(number) {
    if (number % 2 == 0) {
        console.log("El numero es par");
    }
    else {
        console.log("El numero es impar");
    }
}
exports.isEven = isEven;
