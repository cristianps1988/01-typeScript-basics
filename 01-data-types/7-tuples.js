"use strict";
(() => {
    // los tuples no existen en JS
    // tuples: es como un array, pareja de llave - valor (aunque puede ser trio, cuarteto, etc)
    const tupla = [1, 'Cristian', true]; // especifico que el primero debe ser number, el segundo string y el tercero boolean
    tupla[0] = 2; // si asigno otro tipo, que no sea numero, me da error
    tupla[1] = 'Maidelin'; // igual pero si no es strint
    tupla[2] = false; // igual pero si no es boolean
    console.log(tupla);
})();
