"use strict";
(() => {
    // argumentos rest sirve para cuando no se cuantos argumentos puedo recibir, puede ser uno, dos o muchos
    const nombres = (first, ...rest) => {
        return `${first} ${rest.join(' ')}`;
    };
    const familia = nombres('Ana', 'Cristian', 'Flor', 'Daniela', 'Maidelin');
    console.log({ familia });
})();
