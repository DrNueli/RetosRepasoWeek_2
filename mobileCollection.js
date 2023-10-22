"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.setMobiles = function (newmobiles) {
        this.mobiles = newmobiles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.setTotalPrice = function (newtotalPrice) {
        this.totalPrice = newtotalPrice;
    };
    MobileCollection.prototype.totalPriceCalculation = function () {
        var totalPrice = 0;
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var otro = _a[_i];
            totalPrice += otro.getPrice();
        }
        return totalPrice;
    };
    MobileCollection.prototype.printCollection = function () {
        console.log("This is all my mobiles:");
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var mobile = _a[_i];
            console.log("The characteristics of the mobile name are:");
            console.log("- Name: ".concat(mobile.getName()));
            console.log("- Trademark: ".concat(mobile.getTrademark()));
            console.log("- Model: ".concat(mobile.getModel()));
            console.log("- Color: ".concat(mobile.getColor()));
            console.log("- Price: ".concat(mobile.getPrice()));
        }
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
