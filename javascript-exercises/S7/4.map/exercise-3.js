/*  Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.  */


const cities = [{isVisited:true, name: 'Tokyo'},
                {isVisited:false, name: 'Madagascar'},
                {isVisited:true, name: 'Amsterdam'},
                {isVisited:false, name: 'Seul'}];

const namesCities = cities.map(city => city.name);

for (let i=0; i < cities.length; i++){
    if(cities[i].isVisited === true){
        namesCities[i] += (('(Visitado)'));
    }
}
console.log(namesCities);
console.log(cities);


