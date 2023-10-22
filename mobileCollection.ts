
import { Mobile } from "./mobile";

export class MobileCollection {
    private mobiles:Mobile[];
    private totalPrice:number; 

    constructor(mobiles:Mobile[]){   
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    public getMobiles(): Mobile[] {
        return this.mobiles;
      }
      
    public setMobiles(newmobiles: Mobile[]): void {
        this.mobiles = newmobiles;
      }
      
    public getTotalPrice(): number {
        return this.totalPrice;
      }
      
    public setTotalPrice(newtotalPrice: number): void {
        this.totalPrice = newtotalPrice;
      }

    public totalPriceCalculation(): number {
        let totalPrice: number = 0;
        for (let otro of this.mobiles) {
            totalPrice += otro.getPrice();
        }
        return totalPrice;
    }

    public printCollection(): void {
        console.log("This is all my mobiles:");
        for (let mobile of this.mobiles) {
          console.log("The characteristics of the mobile name are:");
          console.log(`- Name: ${mobile.getName()}`);
          console.log(`- Trademark: ${mobile.getTrademark()}`);
          console.log(`- Model: ${mobile.getModel()}`);
          console.log(`- Color: ${mobile.getColor()}`);
          console.log(`- Price: ${mobile.getPrice()}`);
        }
      }
}

