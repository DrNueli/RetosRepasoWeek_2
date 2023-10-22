
import { Point } from "./point";
import { Triangle } from "./triangle";


let lado1: Point = new Point(0, 0);
let lado2: Point = new Point(3, 0);
let lado3: Point = new Point(0, 4);

let myTriangle: Triangle = new Triangle(lado1, lado2, lado3);

console.log(myTriangle.calculateLengthSides());
