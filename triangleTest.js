"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangle_1 = require("./triangle");
var lado1 = new point_1.Point(0, 0);
var lado2 = new point_1.Point(3, 0);
var lado3 = new point_1.Point(0, 4);
var myTriangle = new triangle_1.Triangle(lado1, lado2, lado3);
console.log(myTriangle.calculateLengthSides());
