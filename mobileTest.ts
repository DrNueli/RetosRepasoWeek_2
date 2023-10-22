import { Mobile } from "./mobile";

let mi = new Mobile('Mi1', "Samsung", "Xiaomi 1", "negro", 150);
let mi2 = new Mobile('Mi2', "Sams", "Xiaomi 2", "blanco", 250);
let mi3 = new Mobile('Mi3', "sung", "Xiaomi 3", "verde", 350);
let myMobiles: Mobile[] = [mi, mi2, mi3];

// console.log(mi.Caracteristica());

for (let moviles of myMobiles) {
    moviles.Caracteristica();
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


