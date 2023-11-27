// FUNCION PARA TESTS
const test = (resultado, functTested) =>
    Array.isArray(resultado)
        ? JSON.stringify(resultado) === JSON.stringify(functTested)
            ? 'test OK'
            : 'test KO'
        : resultado === functTested
            ? 'test OK'
            : 'test KO';

///////////////////////////////////////////////////////////////////////////

/* 
1. Crea una función que devuelva el numero de vocales que hay en un string.
*/

const contarVocales = (str) => {
    let vocales = "aeiou";
    let nVocales = 0;
    for(letra of str){
        if(vocales.includes(letra)){
            nVocales++;
        };
        
    }
    console.log(nVocales);
    return nVocales;
};


// test ejercicio 1.
console.log('1A. contarVocales', test(4, contarVocales('upgrade hub')));
console.log('1B. contarVocales', test(5, contarVocales('abracadabra')));

/* 
2. Crea una función que devuelva la suma de los dos numeros positivos más pequenhos de un array de numeros.

La función tiene que descartar aquellos que sean negativos o decimales
*/

const dosNumerosMenores = (numbers) => {
    let numerosPositivos = new Array();
    let sumaN = 0;
    for(number of numbers){
        if((number > 0) && (number%1 === 0)){
            numerosPositivos.push(number);
        };
    };
    console.log('array positivo', numerosPositivos);
    let primerN = numerosPositivos[0];
    let segundoN = numerosPositivos[0];
    for(let i = 0; i <= numerosPositivos.length; i++){
        if(numerosPositivos[i] < primerN){
            segundoN = primerN;
            primerN = numerosPositivos[i];
        } 
    };
    sumaN = primerN + segundoN;
    return sumaN;
  }

// test ejercicio 2
console.log('2A. dosNumerosMenores', test(6, dosNumerosMenores([1.5, 28, 4, 2, -43])));
console.log('2B. dosNumerosMenores', test(16, dosNumerosMenores([52, 7.6, 14, 12, 4, -1])));

/* 
3. Crea dos funciones para encriptar y desencriptar un mensaje.
la función 1 convertirá los caracteres en su número ascii equivalente y los guardará en un array
usa el método "Character".charCodeAt(0);
la funciín 2 convertirá un array de números ascii en letras y devolverá un string.
usa el método String.fromCharCode(numero);
*/

const encriptar = (str) => {
    let encriptado = new Array; 
    for(letra of str){        
        encriptado.push(letra.charCodeAt(0));
    }
    return encriptado;
  };


const desencriptar = (array) => { 
    let desencriptacion = new Array();
    for(number of array){
        desencriptacion.push(String.fromCharCode(number));
    };
    return desencriptacion.join("");  
 };

console.log(encriptar('Agarra la gata de la azotea'))

console.log('3A. encriptar', test([
    65, 103, 97, 114, 114, 97, 32,
    108, 97, 32, 103, 97, 116, 97,
    32, 100, 101, 32, 108, 97, 32,
    97, 122, 111, 116, 101, 97
], encriptar('Agarra la gata de la azotea')));

console.log('3B. desencriptar', test(
    'Agarra la gata de la azotea',
    desencriptar([
        65, 103, 97, 114, 114, 97, 32,
        108, 97, 32, 103, 97, 116, 97,
        32, 100, 101, 32, 108, 97, 32,
        97, 122, 111, 116, 101, 97
    ])));


/* 
4. Crea una funcion que, dados 3 numeros, la funcion debe decir si es posible 
construir un triangulo cuyos lados sea la longitud dada por los números.

PISTA: en todo triangulo la suma de los dos lados más cortos tiene que ser mayor
al lado mas largo. a + b > c;
*/


const esTriangulo = (a, b, c) => {
    let esTriangulo;
    if((a + b) > c){
        esTriangulo = true;
    } else{
        esTriangulo = false;
    }
    return esTriangulo;
  };

console.log('4A. esTriangulo', test(false, esTriangulo(1.5, 4, 6)));
console.log('4B. esTriangulo', test(true, esTriangulo(3, 7, 8)));


/* 
5. Calendario Marciano.

Un día en Marte tiene una duración de 24,6 horas terrestres.
Un año en Marte tiene una duración de 864 días marcianos.

Si consideramos que los calendarios Occidental Terrestre y Marciano tienen el punto de origen
en el 1 de enero del año 1... 


-> Crea una función que convierta una fecha terrestre a fecha marciana.

El parametro fecha debe expresarse con el siguiente formato: 'DD-MM-AAAA', tanto en el input como
en el return.

Para simplificar, asumiremos que:
- Todos los eventos tienen lugar a las 0:00 AM 
- Todos los meses tienen 30 días en la tierra y 72 en marte. 
- No hay años bisiestos

*/

const calendarioMarciano = (fecha) => {
    /* Separamos en números enteros dia, mes y año de Marte */
    let [diaEnTierra, mesEnTierra, anhoEnTierra] = fecha.split('-');
    diaEnTierra = parseInt(diaEnTierra);
    mesEnTierra = parseInt(mesEnTierra);
    anhoEnTierra = parseInt(anhoEnTierra); 
    console.log (diaEnTierra, mesEnTierra, anhoEnTierra);
    /* pasamos la fecha a horas terrestres */

    anhoEnTierra * 365 * 24; /* horas Terrestres por X años */    
    mesEnTierra * 30 * 24; /* horas Terrestres por el mes del año tierra */
    diaEnTierra * 24; /* horas por los días  */

    let horasTerrestresFechaTierra = (((anhoEnTierra * 365) + (mesEnTierra * 30) + diaEnTierra)*24);
    console.log('horas Terrestres de la fecha de la Tierra',horasTerrestresFechaTierra);

    let diasTotalesMarte = horasTerrestresFechaTierra / 24.6; console.log('días Marte', diasTotalesMarte);

    let anhoMarte = diasTotalesMarte / 864; console.log('año',anhoMarte);
    anhoMarte = parseInt(anhoMarte); console.log('año',anhoMarte);

    let mesMarte = (diasTotalesMarte % 864)/72;
    mesMarte = parseInt(mesMarte); console.log('mes',mesMarte);
    if (mesMarte < 10){
        mesMarte = "0"+ mesMarte
    }

    let diaMarte = ((diasTotalesMarte % 864)%72);
    diaMarte = parseInt(diaMarte); console.log('dia',diaMarte);
    if (diaMarte < 10){
        diaMarte = "0"+ diaMarte
    }
    let arrayFecha = [diaMarte,mesMarte,anhoMarte];
    let fechaMarciana = arrayFecha.join('-');
    console.log(fechaMarciana);

    return fechaMarciana;   


 }  

console.log('5A. calendarioMarciano', test('23-06-196', calendarioMarciano('4-10-476')));
console.log('5c. calendarioMarciano', test('28-09-811', calendarioMarciano('20-07-1969')));
console.log('5B. calendarioMarciano', test('04-02-834', calendarioMarciano('18-11-2023')));
