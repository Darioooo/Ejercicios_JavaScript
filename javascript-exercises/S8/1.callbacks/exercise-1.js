/* # Español
Usa el siguiente código como base y crea 3 funciones llamadas father, sum, subtract. La función sum sumara dos parametros a y b y los retornará. La función substract hará lo mismo pero restando y la función father recibirá como parámetros a, b y una función callback (sum o substract).

La función father deberá ejecutar la función que reciba como callback y añadir el numero que retorne la función al array numersList.

Ejecuta varias veces la función father y haz finalmente un console.log de numbersList */


const numbersList = [];

function sum(a, b){
    return a + b;

}

function substract(a, b){
    return a - b;
}

function father(a, b, chooseFunction){
    let result = chooseFunction(a,b);
    numbersList.push(result);
}

father(8,2, sum);
father(30,20, sum);
father(20,15, substract);
father(40,35, substract);
father(12,8, sum);
father(24,6, sum);

console.log('Resultado de las funciones:',numbersList);

