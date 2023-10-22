"use strict";
// RETO REPASO 2.
// Reto 1
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.setTrademark = function (newTrademark) {
        this.trademark = newTrademark;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Mobile.prototype.Caracteristica = function () {
        console.log("The characteristics of the mobile name are " + " name " + this.name + " Trademark " + this.trademark + "model " + this.model + " color " + this.color + " price " + this.price);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
