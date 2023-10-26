/* Crea una función llamada ``swap`` que reciba 3 parametros. Un array y dos parametros más que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante. */


arrayA = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array,param1,param2){
    let memoria = array[param1];
    array[param1] = array[param2];
    array[param2] = memoria;
    console.log(array);
}

swap(arrayA,0,2);