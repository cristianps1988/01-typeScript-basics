"use strict";
(() => {
    let superman = {
        name: 'Clark Kent',
        age: 45,
        powers: ['Super fuerza', 'Vision nocturna'],
        canFly: true,
        getName() {
            return this.name;
        },
    };
    let batman = {
        name: 'Pepito Perez',
        age: 54,
        powers: ['Billete', 'Batimobil']
        // las otras dos propiedades son opcionales, así que no me da error
    };
    console.log(superman);
    console.log(batman);
    console.log(superman.getName()); // como getName es opcional, me da error... con el ! evito ese error de llamar un argumento que es opcional, que puede no estar
})();
