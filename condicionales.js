// 1.10 RETOS REPASO CONDICIONALES del 1-6

function zodiac (day, month){
    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)){
        return "Capricornio"
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)){
        return "Acuario"
    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Piscis";
    } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "Aries";
    } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "Tauro";
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Géminis";
}}

// en Ternario

function zodiacc (day, month) {return (month == 1 && day <= 20) || (month == 12 && day >=22) ? "Capricornio" :
           (month == 1 && day >= 21) || (month == 2 && day <= 18) ? "Acuario" :
           (month == 2 && day >= 19) || (month == 3 && day <= 20) ? "Piscis" :
           (month == 3 && day >= 21) || (month == 4 && day <= 20) ? "Aries" :
           (month == 4 && day >= 21) || (month == 5 && day <= 20) ? "Tauro" :
           (month == 5 && day >= 21) || (month == 6 && day <= 20) ? "Géminis" : "undefined"}
           
           
// let Manu = zodiacc(10, 1);
// console.log(Manu);

// Dado el nombre de un país te imprima en que continente estás

function continent(country) {return ((country == "Nigeria") || (country == "Kenya") || (country == "Marocco") || (country == "Tanzania")) ? "Africa" : 
    ((country == "Spain") || (country == "Germany") || (country == "Italy") || (country == "UK") || (country == "Greece"))  ? "Europa" : 
    ((country == "Thailand") || (country == "Philipines") || (country == "Indonesia") || (country == "Vietnam") || (country == "Malasya")) ? "Asia" : undefined
};

// let pais = continent("Spain");
// console.log(pais);

// Realizar una función que te imprima por consola el siguiente mensaje: “El numero es par”, si es par o numero es impar

function isEven(number) {
    if (number % 2 == 0) {
        console.log("El numero es par");
    } else {
        console.log("El numero es impar");
    }
}

module.exports = isEven;

// let numeropar = isEven(20);
// console.log(numeropar); 