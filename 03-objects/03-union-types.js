"use strict";
(() => {
    // Utilizar varios types
    let anyTypeAcepted = 'Cristian'; // puede ser instanciado con cualquiera de los 3 tipos declarados
    console.log(typeof anyTypeAcepted);
    anyTypeAcepted = 34;
    console.log(typeof anyTypeAcepted);
    anyTypeAcepted = {
        name: 'Bruce Wayne',
        age: 58,
        powers: ['Volar', 'Billete']
    };
    console.log(typeof anyTypeAcepted); // el type Hero no existe en JS, es un objeto realmente
})();
