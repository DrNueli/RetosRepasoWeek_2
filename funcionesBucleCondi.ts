// en el enunciado ponia literal .js, pero al llegar al final veo que tiene que ser todo .ts

export function add(myWords: string[]): number {
    let suma = 0;
    for(let i = 0; i < myWords.length; i++){
        suma += myWords[i].length;
    }
    return suma;
};

export function isEven(number: number): void {
    if (number % 2 == 0) {
        console.log("El numero es par");
    } else {
        console.log("El numero es impar");
    }
}