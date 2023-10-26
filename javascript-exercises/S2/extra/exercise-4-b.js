/* Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.
 */
/* De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente. */
let borrar;
function findArrayIndex(array, text) {
    for(let i = 0; i < array.length; i++){
        if (array[i] == text){
            borrar = i;
        }
    }
}
let bichos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
let t = 'Salamandra'; /* prueba 1 */
let v = 'Ajolote'; /* prueba 2 */

findArrayIndex(bichos, v);

function removeItem(datoBorrar){
    bichos.splice(datoBorrar,1);
    console.log(bichos);
}

removeItem(borrar);
