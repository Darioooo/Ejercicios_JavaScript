/* Usa un for...in para imprimir por consola los datos del alienigena. */

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let datoAlien in alien){
    console.log(datoAlien, alien[datoAlien]);
}
