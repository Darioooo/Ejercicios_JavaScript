/* Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas. */

const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let sumaTotal = 0;
let mediaVentas = 0;
let totalProductos = 0;

for (let producto of products){
    sumaTotal += producto.sellCount;
    totalProductos++;
}

mediaVentas = sumaTotal/totalProductos;
console.log('Las ventas totales son:',sumaTotal, 'Y la media por producto:', mediaVentas);