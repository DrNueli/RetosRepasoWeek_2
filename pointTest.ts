
import { Point } from "./point";

let myPoint = new Point(2,5);
let otroPunto = new Point(5,9);

console.log(myPoint.getX());
console.log(myPoint.getY());
myPoint.setX(3);
myPoint.setY(7);
console.log(myPoint.getX());
console.log(myPoint.getY());
console.log(myPoint.toString());
console.log(myPoint.distanceToOrigin());
console.log(myPoint.calculateDistance(otroPunto));
console.log(myPoint.calculateQuadrant());

