/* Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce(), para conseguir la media de sus .score. La función .find() también podría ayudarte para el contrar el genero 'RPG' en el array .gender.
 */

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

/* rpgGames = videogames.find(games => games.genders.includes('RPG'));


console.log(rpgGames); */

const rpgGames = videogames.filter(game => {
    const rpgGenders = game.genders.find(gender => gender === 'RPG');    
    return rpgGenders;
});

const sumaRPG =  rpgGames.reduce((acumulo, notas) => {
    return acumulo + notas.score;
},0);

const rpgMediaScores = sumaRPG/rpgGames.length;


console.log('juegos RPG',rpgGames);
console.log('suma scores',sumaRPG);
console.log('media scores',rpgMediaScores);