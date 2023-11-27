/* Dado el siguiente javascript, crea una función `attack` a la que le pases como parametro las dos naves y simule un disparo de la primera nave a la segunda.

Esta función generara un numero aleatorio de 1 al numero de la propiedad `.damage` de la primera nave y le restará el  resultado al valor de la propiedad `.pv` de la segunda nave.

Ejecuta la función tantas veces como quieras. */


const ship1 = {name: "Banca rota", damage: 44, pv: 150};

const ship2 = {name: "Cacique pero no", damage: 66, pv: 124};

const attack = (ship1, ship2) =>{
    let hit = Math.floor(Math.random() * ship1.damage);
    ship2.pv = 124 - hit;
};
attack(ship1, ship2)
console.log(ship2);
