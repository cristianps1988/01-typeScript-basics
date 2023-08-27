"use strict";
(() => {
    // formas de declarar funciones
    const hero = 'Superman';
    // funcion normal
    function returnHero() {
        return hero;
    }
    const heroName = returnHero(); // todo en orden porque la funcion retorna un string
    // arrow function
    const returnBatiSignal = () => {
        return 'Batiseñal activada';
    };
})();
