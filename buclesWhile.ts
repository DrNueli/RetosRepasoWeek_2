// RETOS REPASO WHILE
//Realizar una función que te devuelva si existe un numero par en el array de números que introduces como parámetro de entrada. cabecera function hasEven(myNums)

export function hasEven(myNumes:number[]):boolean{
    let i = 0;
    while(i < myNumes.length){
        
            if(myNumes[i] % 2 == 0) {
                return true
            }  // else {return false} si lo posiciono el par en primera posicion da bien, pero si esta en medio, se para el bloque y da el retorno como false aunque haya un par
        i++
    }
    return false
}

// let pares1 = hasEven([3, 5, 7]);
// let pares2 = hasEven([3, 5, 2, 7]);

// console.log(pares1);
// console.log(pares2);


// Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si todos los nombres empiezan por M. Cabecera function startWithM(myNames)

export function startWithM (myNames:string[]): boolean { 
    let i = 0;
    while(i < myNames.length){
        if (myNames[i][0] !== "M"){
            return false
        }
        i++
        }
       return true;
    }

// let equipo = startWithM(["Manu", "Maria", "Noe"]);
// console.log(equipo);
