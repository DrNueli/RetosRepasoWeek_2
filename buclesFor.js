// 1.10 RETOS REPASO BUCLES FOR

// imprimir nº impares
function evenNumbers(num) {
    for(let i = 1; i <= num; i++) {
        if(i % 2 !== 0) {
            console.log(i)}}};

// let numero = evenNumbers(6);
// console.log(numero);

// Array revertido
function myRevert(myArray) {
    let newArray = [];
    for (let i = myArray.length-1; i>=0; i--){ // hay que meterle el -1 para que quite el cero y no de undefined
        newArray.push(myArray[i])
    }
    return newArray
};

// let letras = myRevert(["a", "m", "z"]);
// console.log(letras);

// Colores ArcoIris

function isRainbow(colors) {
    let Arcoiris = ["verde", "amarillo", "naranja"];
    let nuevoColor = [];
    for(let i = 0; i < colors.length; i++){
        if (colors[i] == Arcoiris[i]) {nuevoColor.push(colors[i])}
    }
    return nuevoColor
}

// let colores = isRainbow(["verde", "negro"]);
// console.log(colores);

// Realizar una función que te devuelva la suma del numero de caracteres de las palabras almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

function add(myWords){
    let suma = 0;
    for(let i = 0; i < myWords.length; i++){
        suma += myWords[i].length
    }
    return suma
};

// let sumatorio = add(["Colombia", "Peru"]);
// console.log(sumatorio);

module.exports = add;