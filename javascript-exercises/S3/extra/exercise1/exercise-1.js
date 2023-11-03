/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises. */


const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let myList = document.createElement('ul');
countries.forEach( i =>{
    let li = document.createElement('li');
    li.textContent = i;
    myList.appendChild(li); 
})

document.body.appendChild(myList);

console.log(myList);