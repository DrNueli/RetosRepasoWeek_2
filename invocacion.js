"use strict";
// RETOS REPASO INVOCACION
Object.defineProperty(exports, "__esModule", { value: true });
// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si
// es par o impar la suma de los caracteres de cada uno de los siguientes arrays:
var funcionesBucleCondi_1 = require("./funcionesBucleCondi");
var funcionesBucleCondi_2 = require("./funcionesBucleCondi");
var cc = ["Casa", "Coche", "Ciudad", "Cesta"];
var bb = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var vv = ["Venezuela", "Veneno", "Voltaje"];
var sumatorio = (0, funcionesBucleCondi_1.add)(cc);
console.log(sumatorio);
console.log((0, funcionesBucleCondi_2.isEven)(sumatorio));
var bbb = (0, funcionesBucleCondi_1.add)(bb);
console.log(bbb);
console.log((0, funcionesBucleCondi_2.isEven)(bbb));
var vvv = (0, funcionesBucleCondi_1.add)(vv);
console.log(vvv);
console.log((0, funcionesBucleCondi_2.isEven)(vvv));
// export function add(myWords: string[]): number {
// export function isEven(number: number): void {
