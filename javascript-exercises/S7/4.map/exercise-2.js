/* Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
 */

const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];


const nameUsers = users.map(user => user.name);

const aStartNames = nameUsers.filter( aNames => aNames[0] === ("A"));

console.log(nameUsers);
console.log(aStartNames);