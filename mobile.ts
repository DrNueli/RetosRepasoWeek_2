// RETO REPASO 2.
// Reto 1

export class Mobile {
    constructor (private name:string, private trademark:string, private model:string, private color:string, private price:number){
    this.name = name;
    this.trademark = trademark;
    this.model = model;
    this.color = color; 
    this.price = price; 
    }

    public getName ():string{
        return this.name
    }
    
    public setName (newName:string):void{
        this.name = newName
    }

    public getTrademark():string{
        return this.trademark
    }

    public setTrademark (newTrademark:string):void{
        this.trademark = newTrademark
    }

    public getModel ():string{
        return this.model
    }

    public setModel(newModel:string):void{
        this.model = newModel
    }

    public getColor():string{
        return this.color
    }

    public setColor(newColor:string):void{
        this.color = newColor
    }

    public getPrice():number{
        return this.price
    }

    public setPrice(newPrice:number):void{
        this.price = newPrice
    }

    public Caracteristica():void{
        console.log("The characteristics of the mobile name are " + " name " + this.name + " Trademark " + this.trademark + "model " + this.model + " color " + this.color + " price " + this.price)
    }
}


