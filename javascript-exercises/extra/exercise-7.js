/* Dado el siguiente string */


const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`

/* 
transformalo en el siguiente (Mayusculas incluidas)

`Gracioso Pero No Gracioso De Risa Gracioso De Raro` */

const textArray = text.split("-");

const textoFinal = textArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log(textoFinal);