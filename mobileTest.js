"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var mi = new mobile_1.Mobile('Mi1', "Samsung", "Xiaomi 1", "negro", 150);
var mi2 = new mobile_1.Mobile('Mi2', "Sams", "Xiaomi 2", "blanco", 250);
var mi3 = new mobile_1.Mobile('Mi3', "sung", "Xiaomi 3", "verde", 350);
var myMobiles = [mi, mi2, mi3];
// console.log(mi.Caracteristica());
for (var _i = 0, myMobiles_1 = myMobiles; _i < myMobiles_1.length; _i++) {
    var otro = myMobiles_1[_i];
    otro.Caracteristica();
}
// console.log(mi.getName());
// mi.setName('iPhone');
// console.log(mi.getName());
// console.log(mi.getTrademark());
// mi.setTrademark("Marca: Apple");
// console.log(mi.getTrademark());
// console.log(mi.getModel());
// mi.setModel("iphone Pro 14");
// console.log(mi.getModel());
// console.log(mi.getColor());
// mi.setColor("blanco");
// console.log(mi.getColor());
// console.log(mi.getPrice());
// mi.setPrice(1000);
// console.log(mi.getPrice());
