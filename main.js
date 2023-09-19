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
    };
    console.log(superman);
    console.log(batman);
    console.log(superman.getName());
})();
(() => {
    const cliente1 = {
        name: 'Cristian',
        age: 35,
        adress: {
            city: 'Melgar',
            street: '11-35',
            zip: 458927
        },
        getCity() {
            return this.adress.city;
        }
    };
    const cliente2 = {
        name: 'Maidelin',
        adress: {
            city: 'Valledupar',
            street: '7b-35',
            zip: 2500
        },
        getCity() {
            return this.adress.city;
        }
    };
    console.log({ cliente1, cliente2 });
    console.log(cliente1.getCity());
})();
(() => {
    class Cristian {
        constructor(name, age, job, experience) {
            this.name = name;
            this.age = age;
            this.job = job;
            this.experience = experience;
        }
        getName() {
            return this.name;
        }
    }
})();
(() => {
    const addTwoNumbersFunction = (a, b) => {
        return a + b;
    };
    console.log(addTwoNumbersFunction(5, 8));
})();
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
    }
}
//# sourceMappingURL=main.js.map