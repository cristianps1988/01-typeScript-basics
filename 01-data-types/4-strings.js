"use strict";
(() => {
    var _a;
    // Formas de declarar strings en TS
    const batman = 'Batman'; // con comillas sencillas
    const superman = "Superman"; // con comillas dobles
    const batichica = `Batichica`; // con backtits
    console.log(`Hola, soy ${batman}`);
    console.log(superman.toUpperCase());
    // TS no es infalible
    // console.log(batman[10].toUpperCase()) // esto me da un error, no puede pasar a mayusculas un undefined
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No existe'); // con el ? evaluamos si existe algo en esa posición, si no, entonces no ejecuta el uppercase. Con el || entonces pasamos a la otra condición.
})();
