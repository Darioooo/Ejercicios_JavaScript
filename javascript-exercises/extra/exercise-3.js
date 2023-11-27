/* En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9. */


const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]

let animalString = animals.join(" ");
let numeroAinArray = 0;

for (letra of animalString) {
    if (letra === "a"){
        numeroAinArray++;
    };
};
console.log(numeroAinArray);