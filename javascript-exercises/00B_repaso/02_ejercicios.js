/* 
Crea una funcion que incremente o decremente un número atendiendo a su orden de magnitud.

Requisitos:
- La misma funcion debe tener la capacidad de incrementar o decrementar, no utilizar funciones auxiliares ni callbacks.
- Todos los números de magnitud inferior contenidos en el número se descartarán.
- Si el valor introducido es 0, no es un número, o es un numero negativo, la función valdrá 0.
- Crea una batería de tests para los casos: 
-- Incrementos:  0.5; 1.6; 1234; 34.567; 12345587654567; "hola"
-- Decrementos:  1.4; 234323454; 23.2; 2343; -45.87


Ejemplos de incremento:
0.01 -> 0.02
4 -> 5
23 -> 30
3456 -> 4000

Ejemplos de decremento:
4.36 -> 3
3456 -> 2000
1000 -> 0
4567890 -> 3000000

*/

const incrementoDecremento = (numero, incrementarDecrementar) => {
let resultado;

/* No se consiguen sacar las potencias de 10 de los numeros, con lo que se resume el ejercicio en un único IF para incrementar y otro para decrementar */

    if(incrementarDecrementar === "incrementar"){
        if(numero>0 && numero<0.1){
            resultado = (numero*100) + 1;
            resultado = parseInt(resultado);
            resultado = resultado/100;
        } else if (numero>=0.1 && numero<1){
            resultado = (numero*10) + 1;
            resultado = parseInt(resultado);
            resultado = resultado/10;
        } else if (numero>=1 && numero<10){
            resultado = numero + 1;
            resultado = parseInt(resultado);
        } else if (numero>=10 && numero<100){
            resultado = numero/10 +1;
            resultado = parseInt(resultado);
            resultado = resultado * 10;
        } else if (numero>=100 && numero<1000){
            resultado = numero/100 +1;
            resultado = parseInt(resultado);
            resultado = resultado * 100;
        } else if (numero>=1000 && numero<10000){
            resultado = numero/1000 +1;
            resultado = parseInt(resultado);
            resultado = resultado * 1000;
        } else if (numero>=10000 && numero<100000){
            resultado = numero/10000 +1;
            resultado = parseInt(resultado);
            resultado = resultado * 10000;
        } else if (numero>=100000 && numero<1000000){
            resultado = numero/100000 +1;
            resultado = parseInt(resultado);
            resultado = resultado * 100000;    
        } else if (numero>=1000000 && numero<10000000){
            resultado = numero/1000000 +1;
            resultado = parseInt(resultado);
            resultado = resultado * 1000000;    
        } else if (numero>=10000000 && numero<100000000){
            resultado = numero/10000000 +1;
            resultado = parseInt(resultado);
            resultado = resultado * 10000000;    
        } else if (numero>=100000000 && numero<1000000000){
            resultado = numero/100000000 +1;
            resultado = parseInt(resultado);
            resultado = resultado * 100000000;    
        } else if (numero>=10000000000000 && numero<100000000000000){        
            resultado = numero/10000000000000 +1;
            resultado = parseInt(resultado);
            resultado = resultado * 10000000000000;
        };
    };

    if(incrementarDecrementar === "decrementar"){
        if(numero>0 && numero<0.1){
            resultado = (numero*100) - 1;
            resultado = parseInt(resultado);
            resultado = resultado/100;
        } else if (numero>=0.1 && numero<1){
            resultado = (numero*10) - 1;
            resultado = parseInt(resultado);
            resultado = resultado/10;
        } else if (numero>=1 && numero<10){
            resultado = numero + 1;
            resultado = parseInt(resultado);
        } else if (numero>=10 && numero<100){
            resultado = numero/10 -1;
            resultado = parseInt(resultado);
            resultado = resultado * 10;
        } else if (numero>=100 && numero<1000){
            resultado = numero/100 -1;
            resultado = parseInt(resultado);
            resultado = resultado * 100;
        } else if (numero>=1000 && numero<10000){
            resultado = numero/1000 -1;
            resultado = parseInt(resultado);
            resultado = resultado * 1000;
        } else if (numero>=10000 && numero<100000){
            resultado = numero/10000 -1;
            resultado = parseInt(resultado);
            resultado = resultado * 10000;
        } else if (numero>=100000 && numero<1000000){
            resultado = numero/100000 -1;
            resultado = parseInt(resultado);
            resultado = resultado * 100000;    
        } else if (numero>=1000000 && numero<10000000){
            resultado = numero/1000000 -1;
            resultado = parseInt(resultado);
            resultado = resultado * 1000000;    
        } else if (numero>=10000000 && numero<100000000){
            resultado = numero/10000000 -1;
            resultado = parseInt(resultado);
            resultado = resultado * 10000000;    
        } else if (numero>=100000000 && numero<1000000000){
            resultado = numero/100000000 -1;
            resultado = parseInt(resultado);
            resultado = resultado * 100000000;    
        };
    };
    
    if (numero <= 0 || typeof(numero) == "string"){
        resultado = 0;
    }
    console.log('resultado',resultado);
    return resultado;
};

const test = (resultado, functTested) =>
    Array.isArray(resultado)
        ? JSON.stringify(resultado) === JSON.stringify(functTested)
            ? 'test OK'
            : 'test KO'
        : resultado === functTested
            ? 'test OK'
            : 'test KO';

/* -- Incrementos:  0.5; 1.6; 1234; 34.567; 12345587654567; "hola"
-- Decrementos:  1.4; 234323454; 23.2; 2343; -45.87 */           
console.log('1. Incrementar', test(0.6, incrementoDecremento(0.5, "incrementar")));
console.log('2. Incrementar', test(2, incrementoDecremento(1.6, "incrementar")));
console.log('3. Incrementar', test(2000, incrementoDecremento(1234, "incrementar")));
console.log('4. Incrementar', test(40, incrementoDecremento(34.567, "incrementar")));
console.log('5. Incrementar', test(20000000000000, incrementoDecremento(12345587654567, "incrementar")));
console.log('6. Incrementar', test(0, incrementoDecremento("hola", "incrementar")));


console.log('7. Decrementar', test(2, incrementoDecremento(1.4, "decrementar")));
console.log('8. Decrementar', test(100000000, incrementoDecremento(234323454, "decrementar")));
console.log('9. Decrementar', test(10, incrementoDecremento(23.2, "decrementar")));
console.log('10. Decrementar', test(1000, incrementoDecremento(2343, "decrementar")));
console.log('11. Decrementar', test(0, incrementoDecremento(-45.87, "decrementar")));