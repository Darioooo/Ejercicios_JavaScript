const miCamino = {
  inicio: "dar el primer paso.",
  objetivo:
    "recorrer los 14 ochomiles y llegar hasta la cima del mundo: el Everest.",
  material: [
    {
      nombre: "Piolets",
      descripcion:
        "un instrumento usado en alpinismo para asegurarse en el hielo o la nieve; consiste en una especie de pico de metal con el extremo del mango afilado.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen del piolet",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen del piolet",
          },
        },
      ],
    },
    {
      nombre: "Crampones",
      descripcion:
        "una pieza de metal con púas que se sujeta a la suela de la bota para escalar o caminar sobre el hielo o la nieve.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de los crampones",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de los crampones",
          },
        },
      ],
    },
    {
      nombre: "Cuerdas",
      descripcion:
        "un objeto delgado, muy alargado y flexible, hecho de hilos o fibras torcidos o entrelazados, que se usa generalmente para atar o sujetar cosas.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la cuerda",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la cuerda",
          },
        },
      ],
    },
    {
      nombre: "Mochila",
      descripcion:
        "una bolsa para transportar provisiones en excursiones, viajes u otro tipo de desplazamientos, que está confeccionada con tela resistente y a menudo impermeable y se lleva colgada a la espalda por medio de correas.",
      imagenes: [
        {
          imagen1: {
            url: "has conseguido acceder a la primera imagen de la mochila",
          },
        },
        {
          imagen2: {
            url: "has conseguido acceder a la segunda imagen de la mochila",
          },
        },
      ],
    },
  ],
  cimas: [
    {
      nombre: "K2",
      altitud: 8.611,
      localizacion: "China/Pakistan",
    },
    {
      nombre: "Kangchenjunga",
      altitud: 8.586,
      localizacion: "India/Nepal",
    },
    {
      nombre: "Lhotse",
      altitud: 8.516,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Makalu",
      altitud: 8.463,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Cho Oyu",
      altitud: 8.201,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Dhaulagiri",
      altitud: 8.167,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Manaslu",
      altitud: 8.163,
      localizacion: "Nepal",
    },
    {
      nombre: "Nanga Parbat",
      altitud: 8.125,
      localizacion: "Pakistan",
    },
    {
      nombre: "Annapurna",
      altitud: 8.091,
      localizacion: "Nepal",
    },
    {
      nombre: "Gasherbrum I",
      altitud: 8.068,
      localizacion: "Pakistan/China",
    },
    {
      nombre: "Broad Peak",
      altitud: 8.846,
      localizacion: "Nepal/Tibet",
    },
    {
      nombre: "Gasherbrum II",
      altitud: 8.035,
      localizacion: "Pakistan/China",
    },
    {
      nombre: "Shisha Pangma",
      altitud: 8.027,
      localizacion: "Tibet",
    },
    {
      nombre: "Everest",
      altitud: 8.846,
      localizacion: "Nepal/Tibet",
    },
  ],
  subiendoAlEverest: [
    [
      {
        campoBase: [
          {
            campoI: {
              campoII: {
                campoIII: {
                  campoIV: [
                    "Tranquilo",
                    "lo",
                    "peor",
                    "ha",
                    "pasado",
                    8.846,
                    "ya.",
                    "¡Animo!",
                    {
                      cima: "¡Enhorabuena!, probablemente no seas el primero en llegar hasta aquí, pero estas con la programación, no con el alpinismo.",
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    ],
  ],
};

// Ejercicio

//Habiendo visto como acceder a las propiedades de los distintos objetos,como podemos recorrer arrays y ir buceando en ellos, es el momento de ponernos a prueba.

//Pasos a seguir para llegar a la cima

//vamos a imaginarnos que vamos a narrar la historia de como subi los 14 ochomiles y esta historia solo puede ser contada a traves de console.log, es decir,

// primer paso: vamos a empezar nuestro camino de la mejor manera y esa no puede ser de otra manera que dando el primer paso, por tanto vamos a decir: Lo mas importante es {inicio}

console.log(`Lo mas importante es ${miCamino.inicio}`);

//2º: vamos a decir : El objetivo de mi camino es : {objetivo}

console.log(`El objetivo de mi camino es ${miCamino.objetivo}`);

/* 3º: en este paso ya empezaremos a toquetear con bucles y le vamos a decir: lo primero que debo llevar es {nombre del primer material} y es { su descripcion} */
/* console.log(`Lo primero que debo llevar ${miCamino.material[0].nombre} y es ${miCamino.material[0].descripcion}`); */
 /* lo segundo que debo  llevar es {nombre del segundo material} y es { su descripcion} */
 /* console.log(`Lo segundo que debo llevar ${miCamino.material[1].nombre} y es ${miCamino.material[1].descripcion}`); */
 /* lo tercero que debo  llevar es {nombre del tercer material} y es { su descripcion} */
/*  console.log(`Lo tercero que debo llevar ${miCamino.material[2].nombre} y es ${miCamino.material[2].descripcion}`); */
/*  y por ultimo debo llevar la {mochila} que es {su descripcion} */
/* console.log(`Lo primero que debo llevar ${miCamino.material[3].nombre} y es ${miCamino.material[3].descripcion}`); */

for (let i = 0; i < miCamino.material.length; i++){
  let orderTols;
  if (i === 0){
    orderTols = 'primero';
  } else if (i === 1){
    orderTols = 'segundo';
  }else if (i === 2){
    orderTols = 'tercero';
  }else if (i ===3){
    orderTols = 'último'
  }
  console.log(`Lo ${orderTols} que debo llevar ${miCamino.material[i].nombre} y es ${miCamino.material[i].descripcion}`);
}

/* 4º: vamos a decir: para subir al {nombre de la cima}  debo subir {altura } metros y debo viajar a {ubicacion} */

for (let cima of miCamino.cimas){
  console.log(`Para subir al ${cima.nombre} debo subir ${cima.altitud} metros y debo viajar ${cima.localizacion}`)
}

/* 5º: para llegar a la cima tendremos que darnos aliento y decirnos la frase que esta divida y que tiene que quedar así: "Tranquilo,lo peor ha pasado ya.¡Animo! */
let myArray = new Array;
const paradita = miCamino.subiendoAlEverest[0][0].campoBase[0].campoI.campoII.campoIII.campoIV;

for(let i = 0; i < paradita.length; i++){
  if(typeof paradita[i] === "string"){  /* Realiza mejor la función, sin tener que contar posiciones en el array */
    myArray.push(paradita[i]);
  }
 /* if (i!=5 && i!=8){
    myArray.push(paradita[k]);
  } */
  
}
let myString = myArray.join(" ");
console.log(myString);

/* 6º: mostraremos el mensaje final guardado en la cima */
console.log(paradita[8].cima);

/* por ultimo como bonus,en un console.log mostraremos por pantalla las urls de todas las imagenes de los materiales y en otro haremos la media de la altitud de todas la cimas que hemos subido. */
miCamino.material[0].imagenes
for (let t = 0; t < miCamino.material[0].imagenes.length; t++){
  if(t == 0){
  console.log(miCamino.material[0].imagenes[0].imagen1.url)
  }
  if(t == 1){
    console.log(miCamino.material[0].imagenes[1].imagen2.url)
  }
}