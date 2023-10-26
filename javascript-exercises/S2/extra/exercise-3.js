/* Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a
favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para
comprender que hay muchas formas de hacer las cosas en javascript. */


const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let sumaWaves = 0;
let sumaRain =0;
let sumaFireCamp = 0;
let sumaShower = 0;
let sumaTrain = 0;
let sumaWind = 0;

let arraySonidos = new Array;

for(let user of users){
    for (let sound in user.favoritesSounds){
       arraySonidos.push(sound);
    }    
}
arraySonidos.forEach(sonidos => {
    if(sonidos==='waves'){
        sumaWaves += 1;
    }
    if(sonidos==='rain'){
        sumaRain++;
    }
    if(sonidos==='firecamp'){
        sumaFireCamp++;
    }
    if(sonidos==='shower'){
        sumaShower++;
    }
    if(sonidos==='train'){
        sumaTrain++;
    }
    if(sonidos==='wind'){
        sumaWind++;
    }
});


console.log(arraySonidos);

console.log('Sonido waves es favorito',sumaWaves, 'veces');
console.log('Sonido rain es favorito',sumaRain, 'veces');
console.log('Sonido firecamp es favorito',sumaFireCamp, 'veces');
console.log('Sonido shower es favorito',sumaShower, 'veces');
console.log('Sonido train es favorito',sumaTrain, 'veces');

