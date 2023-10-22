import { MobileCollection } from "./mobileCollection";
import { Mobile } from "./mobile";

let mi = new Mobile('Mi1', "Samsung", "Xiaomi 1", "negro", 150);
let mi2 = new Mobile('Mi2', "Sams", "Xiaomi 2", "blanco", 250);
let mi3 = new Mobile('Mi3', "sung", "Xiaomi 3", "verde", 350);
let mi4 = new Mobile('Mi4', "sung4", "Xiaomi 4", "rojo", 450);

let moviles = [mi, mi2, mi3, mi4];
let myCollection = new MobileCollection(moviles);

console.log(myCollection.getMobiles());
console.log(myCollection.totalPriceCalculation());
console.log(myCollection.printCollection());


