// lasePointconlossiguientesatributosprivados: • x: number
// • y: number
// 3. Elconstructordelaclasedebetenerlosmismosparámetrosdeentradaqueatributos.
// 4. Crearlosmétodossettersygettersparatodoslosatributosdelaclase.
// 5. CrearunmétodotoString()queconviertaatextolascoordenadasdelpunto. Debe devolver: “(x,y)”

export class Point{
    constructor(private x:number, private y:number){
        this.x = x;
        this.y = y;
    }

    public getX():number {
        return this.x
    }

    public setX(newX:number):void{
        this.x = newX
    }

    public getY():number{
        return this.y
    }

    public setY(newY:number):void{
        this.y = newY
    }

    public toString():string{
        return `(${this.x},${this.y})`
    }

    public distanceToOrigin(): number {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    public calculateDistance(anotherPoint: Point): number {
        return Math.sqrt(Math.pow(this.x - anotherPoint.x, 2) + Math.pow(this.y - anotherPoint.y, 2));
    }

    public calculateQuadrant(): number {
        if (this.x === 0 || this.y === 0) {
          return 0;
        } else if (this.x > 0 && this.y > 0) {
          return 1;
        } else if (this.x < 0 && this.y > 0) {
          return 2;
        } else if (this.x < 0 && this.y < 0) {
          return 3;
        } else (this.x > 0 && this.y < 0)
            return 4;
      }
      
    public calculateNearest(points: Point[]): Point {
        let nearestPoint: Point = points[0];
        let nearestDistance: number = this.calculateDistance(points[0]);
        for (let i = 1; i < points.length; i++) {
          let distance: number = this.calculateDistance(points[i]);
          if (distance < nearestDistance) {
            nearestPoint = points[i];
            nearestDistance = distance;
          }
        }
        return nearestPoint;
      }
}
  

let myPoint = new Point(2,5);
let otroPunto = new Point(5,9);

let punto1 = new Point(11,5);
let punto2 = new Point(89,9);
let punto3 = new Point(9,7);
let puntos = [punto1, punto2, punto3];

// console.log(myPoint.getX());
// console.log(myPoint.getY());
// myPoint.setX(3);
// myPoint.setY(7);
// console.log(myPoint.getX());
// console.log(myPoint.getY());
// console.log(myPoint.toString());
// console.log(myPoint.distanceToOrigin());
// console.log(myPoint.calculateDistance(otroPunto));
// console.log(myPoint.calculateQuadrant());
console.log(myPoint.calculateNearest(puntos));

