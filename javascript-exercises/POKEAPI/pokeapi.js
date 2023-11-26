AOS.init();
const pokeContainer = document.querySelector('.container_pokemons');
const buttonsOfType$$ = document.querySelector('.buttonsOfType');
/* 
* Función: callPokeApiById
* Realiza llamadas a la PokeAPI con filtro por ID
* Return: datos de cada pokemon 
*/
const callPokeApiById = async (id) => {
    try {          
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data;               
    } catch (error){   
        return error = new Error(error);        
    };      
};
/* 
* Función: callPokeApiByType
* Realiza una llamada a la PokeAPI con filtro por tipo 
* Return: datos de los tipos de pokemon existentes
*/
const callPokeApiByType = async () => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/type`);
        const data2 = await response.json();
        return data2.results;
    } catch(error){
        return error = new Error(error);
    };
};
/* 
* Función: takeBackgroundForType
* Entra el tipo de pokemon, y contiene el objeto backgroundByType para asignar una URL por tipo. 
* Return: pokemonBackground con la URL correspondiente
*/ 
const takeBackgroundForType = (type) =>{
    const backgroundByType = {
                    normal: "url(https://images.wikidexcdn.net/mwuploads/wikidex/5/50/latest/20090407174646/EP361_Campo_del_Gimnasio_Arborada.jpg)",
                    fire: "url(https://www.cristalab.com/images/tips/photoshop/efectoFondoFuego/efectoFondoFuego01.jpg)",
                    water: "url(https://i.pinimg.com/474x/13/f7/9c/13f79c0b836d910508966fae8b97b5df.jpg)",
                    grass: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG8-y70swe3g40RPZb6FY9KVVjtLs8wQyKSWWpjygJjS4W3agTDTzsJLKZ46Uv_7PGuDg&usqp=CAU)",
                    electric: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QosyJWxebyabSojQFrg8jiEO-n735AKQww&usqp=CAU)",
                    rock: "url(https://img.freepik.com/vector-premium/relajante-paisaje-frio_24908-4926.jpg)",
                    psychic: "url(https://img.freepik.com/vector-gratis/fondo-remolino-purpura-degradado_23-2149920059.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699488000&semt=ais)",
                    bug: "url(img/background_bicho.jpg)",
                    ground: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fe75f9c3-fdf7-4818-a734-6dc426ff4085/dd82nw5-32f9d406-056c-4d75-8d80-13cb142c84ce.png/v1/fill/w_1280,h_1024,q_80,strp/free_use_anime_background_8_by_mamamj63_dd82nw5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2ZlNzVmOWMzLWZkZjctNDgxOC1hNzM0LTZkYzQyNmZmNDA4NVwvZGQ4Mm53NS0zMmY5ZDQwNi0wNTZjLTRkNzUtOGQ4MC0xM2NiMTQyYzg0Y2UucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.gYzRLkIFmMFrLsC4b6jXZLq9Qj_3iwbguAYHRrjHFp8)",
                    ice: "url(https://thumbs.dreamstime.com/b/fondo-helado-del-hielo-24708855.jpg)",
                    ghost: "url(https://img.freepik.com/fotos-premium/banner-fondo-fantasmas-flotantes-estetica-papel-tapiz_879987-4325.jpg)",
                    poison: "url(https://img.freepik.com/vector-premium/arte-fluido-abstracto-creativo-efecto-marmol-liquido_632498-178.jpg)",
                    dragon: "url(https://i.pinimg.com/736x/c2/45/d2/c245d25943813823e4386a22044bf732.jpg)",
                    fighting:"url(https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D185978912W10000H5728/views/1,width=378,height=378,appearanceId=839,backgroundColor=F2F2F2/dos-patadas-de-karate-voladores-o-patada-de-teca.jpg)"
                };
    let pokemonBackground = backgroundByType[type];
    return pokemonBackground;
};
/* 
* Función: takeColorForType
* Entra el tipo de pokemon, y contiene el objeto colorType para asignar un color por tipo. 
* Return: pokemonColor con el color correspondiente.
*/ 
const takeColorForType = (type) =>{
    const colorType = {
                    normal: "rgba(255,236,201,0.95)",
                    fire: "rgba(230,10,10,0.95)",
                    water: "rgba(0,247,247,0.95)",
                    grass: "rgba(80,225,50,0.95)",
                    electric: "rgba(255,255,0,0.95)",
                    rock: "rgba(160,160,160,0.95)",
                    psychic: "rgba(174,49,174,0.95)",
                    bug: "rgba(180,222,86,0.95)",
                    ground: "rgba(205,150,108,0.95)",
                    ice: "rgba(167,216,221,0.95)",
                    ghost: "rgba(157,40,66,0.95)",
                    poison: "rgba(245,0,245,0.95)",
                    dragon: "rgba(182,144,33,0.95)",
                    fighting: "rgba(208,208,210,0.95)"
                };
    let pokemonColor = colorType[type];
    return pokemonColor;
};
/* 
* Función: sayPokemonForType
* Entra el tipo de pokemon, y contiene el objeto textType para asignar un texto por tipo. 
* Return: pokemonText con el texto correspondiente.
*/
const sayPokemonForType = (type)=>{
    const textType = {
                    normal: " ¡¡Elígeme a mí!!",
                    fire: "¡¡Reduciré todo a cenizas!!",
                    water: "¡¡Hidro bomba!!",
                    grass: "¡Ciclón de hojas! ¡Látigo cepa!",
                    electric: "¡Puño trueno! ¡RAYO!",
                    rock: "¡¡Mi medio es la roca!!",
                    psychic: "¡¡Rayo hipnótico!!",
                    bug: "¿Te gustan los bichos?",
                    ground: "¡Somos imparables en tierra!",
                    ice: "¡¡Ice ice baby!!",
                    ghost: "¿¿Un susto de muerte??",
                    poison: "Dicen que tengo, veneno en la piel",
                    dragon: "¡Los dragones somos seres honorables!",
                    fighting: "¡Mis artes marciales son legendarias!",
                    fairy: "¡¡Fairy, fairy!!"
                };                     
        pokemonText = textType[type];
    return pokemonText;
};
/* 
* Función: addPokemon
* Entran los datos del pokemon (data), y si recibe datos, crea el HTML para ese pokemon. 
*/
const addPokemon = (data) => {        
    if (data) {                              
            pokeContainer.innerHTML = "";
            for (pokemon of data){
                if (pokemon.id < 10) {
                    pokeId = `#00${pokemon.id}`
                } else if (pokemon.id < 100) {
                    pokeId = `#0${pokemon.id}`
                } else if (pokemon.id > 100) {
                    pokeId = `#${pokemon.id}`
                };
                
                pokemonTypes = new Array();
                pokemon.type.forEach((element) => {
                    capitalizedPokeType = element.type.name.charAt(0).toUpperCase() + element.type.name.slice(1);
                    pokemonTypes.push(capitalizedPokeType);
                });                      
                capitalizedPokeName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                let watchTypesString = pokemonTypes.join(' '); 
                
                
                const htmlStr = `
                    <li class="pokemon" style="background-image:${takeBackgroundForType(pokemon.type[0].type.name)}">
                        <div class="pokemon_bocadillo">
                            <div class="pokemon_bocadillo_contenedor">
                                <img src="img/bocadillo.png" alt="">
                                <p>${sayPokemonForType(pokemon.type[0].type.name)}</p>
                            </div>
                        </div>
                        <h2 class="poke-id">${pokeId}</h2>
                        <h3 class="poke-name">${capitalizedPokeName}</h3>
                        <img class="poke-img" src=${pokemon.img}>                     
                        <h3 class="poke-type">${watchTypesString}</h3>
                    </li>`;
                pokeContainer.insertAdjacentHTML('beforeend', htmlStr);
                pokeContainer.style.opacity = 1;
            };                    
    };
};
/* 
* Función: MapPokemons
* Optiene los datos de los 151 pokemons y después crea un mapa con los datos necesarios. 
* Return: el mapa con los datos que vamos a utilizar.
*/
const MapPokemons = async () =>{
    let id = 0;
    let pokemons = [];          
    for (let i = 1; i <= 151; i++) {
        id++;
        pokemons.push(await callPokeApiById(id));                               
    };
    
    return pokemons.map((pokemon) => ({
        name: pokemon.name,
        id: pokemon.id,
        type: pokemon.types,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`               
    }));

};
/* 
* Función: searchPokemonByName
* Entran los datos mapeados de los pokemon. 
* Crea el input donde se filtraran los pokemon por nombre.
* Llama a la función de filterPokemonsByName. 
*/    
const searchPokemonByName = (mappedPokemons) => {
    const input$$ = document.querySelector("input");
    input$$.addEventListener("input", () => filterPokemonsByName(mappedPokemons, input$$.value));
};
/* 
* Función: filterPokemonsByName
* Filtra los pokemon por nombre. 
* Llama a la función addPokemon con los pokemon filtrados.
*/        
const filterPokemonsByName = (mappedPokemons, dataToFilter) =>{
    let filteredPokemon =  mappedPokemons.filter((poke) => poke.name.toLowerCase().includes(dataToFilter.toLowerCase()));
    console.log(filteredPokemon);
    addPokemon(filteredPokemon);
    
};
/* 
* Función: takeTypes
* Optiene los datos de los tipos de pokemon. 
* Return: typesPokemon
*/ 
const takeTypes = (dataOfCallByTypes) => {            
    let typesPokemon = [];
    for (let i=0 ; i < dataOfCallByTypes.length -2; i++){  
        if(dataOfCallByTypes[i].name !== "dark")
        typesPokemon.push(dataOfCallByTypes[i].name);
    }; /* No necesito algunos tipos que incluyen otras versiones, los dos últimos y dark*/
    return typesPokemon;          
};
/* 
* Función: filterByTypes
* Crea los botones mediante los cuales filtraremos por tipo de pokemon. Si se pulsa de nuevo sobre el último botón, se anula el filtrado por tipo.
* Llama a la función addPokemon, con los datos del filtro, o con el mapeo de los 151 en caso de anular el filtrado.
*/
const filterByTypes = (arrayTypesPokemon, mappedPokemons) => {
    arrayTypesPokemon.forEach(type => {
        var newButton$$ = document.createElement('button');
        newButton$$.textContent = type;
        newButton$$.className = `myType ${type}`;
        newButton$$.style.backgroundColor = takeColorForType(type);
        buttonsOfType$$.appendChild(newButton$$);
    });
    let filterPokemonByType = new Array();
    let pressed = false;
    let typePressed = "";
        let allOfButtons = document.querySelectorAll(".myType");
        allOfButtons.forEach((button) =>{
            button.addEventListener("click", () => {
                filterPokemonByType = mappedPokemons.filter((poke) => {
                        pokemonTypes = new Array();
                        poke.type.forEach((element) => {
                            pokemonTypes.push(element.type.name);
                        }); 
                        return pokemonTypes.includes(button.textContent);
                    });
                                           
                if (pressed === false){
                    pressed = true;
                    typePressed = button.textContent;                         
                    addPokemon(filterPokemonByType);
                } else if ((pressed === true) && (typePressed === button.textContent)){                            
                    pressed = false;                         
                    addPokemon(mappedPokemons);                            
                } else if ((pressed === true)){                            
                    typePressed = button.textContent;                         
                    addPokemon(filterPokemonByType);
                } 
                });    
        }); 
};
/* 
* Función: init
* Función inicial de organización del código y llamadas a funciones.
*/      
const init = async ()  => {
    const mappedPokemons = await MapPokemons();
    addPokemon(mappedPokemons);
    searchPokemonByName(mappedPokemons);
    const dataOfCallByTypes = await callPokeApiByType();
    const arrayTypesPokemon = takeTypes(dataOfCallByTypes);
    takeColorForType(dataOfCallByTypes);
    filterByTypes(arrayTypesPokemon, mappedPokemons);
};
init();      
