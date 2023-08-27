"use strict";
(() => {
    // demo
    const msg = 'Holis!!!';
    console.log(msg);
    const hero = {
        name: 'Cristian',
        age: 35
    };
    //hero.age = '35' // error al asignar un string, el tipo de valor original es un number
    console.log(hero); // igual lo compila
    console.log(hero.age + 1); //  pero no me convierte el string a number
})();
