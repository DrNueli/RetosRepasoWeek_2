// RETOS REPASO INVOCACION

// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si
// es par o impar la suma de los caracteres de cada uno de los siguientes arrays:

import { add } from "./funcionesBucleCondi";
import { isEven } from "./funcionesBucleCondi";

let cc: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let bb: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let vv: string[] = ["Venezuela", "Veneno", "Voltaje"];

let sumatorio = add(cc);
console.log(sumatorio);
console.log(isEven(sumatorio));

let bbb = add(bb);
console.log(bbb);
console.log(isEven(bbb));

let vvv = add(vv);
console.log(vvv);
console.log(isEven(vvv));

// export function add(myWords: string[]): number {
// export function isEven(number: number): void {