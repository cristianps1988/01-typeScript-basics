"use strict";
(() => {
    const msg = 'Holis!!!';
    console.log(msg);
    const hero = {
        name: 'Cristian',
        age: 35
    };
    console.log(hero);
    console.log(hero.age + 1);
})();
(() => {
    const a = 10;
    let b = 10;
    let c;
    let d;
    function sayHello(msg) {
        console.log(msg);
    }
    sayHello('holi');
})();
(() => {
    const error = (msg) => {
        throw new Error(msg);
    };
    error('Auxilio');
})();
(() => {
    const nada = undefined;
    console.log(nada);
    const isActive = true;
    console.log(isActive);
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
        Fuerza[Fuerza["superman"] = 100] = "superman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.flash;
    const fuerzaSuperman = Fuerza.superman;
    const fuerzaBatman = Fuerza.batman;
    const fuerzaAcuaman = Fuerza.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let avengers = 10;
    let villanos = 20;
    if (avengers < villanos) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos bien');
    }
    avengers = Number('55');
    avengers = Number('45A');
})();
(() => {
    var _a;
    const batman = 'Batman';
    const superman = "Superman";
    const batichica = `Batichica`;
    console.log(`Hola, soy ${batman}`);
    console.log(superman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No existe');
})();
(() => {
    let avenger = 123;
    let existe;
    avenger = 'Holiiiiiis';
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 12453.2378;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(2));
    console.log(existe);
})();
(() => {
    const arregloUno = [1, 2, 3, 4, '5', 6, 7, 8, 9];
    arregloUno.push(true);
    console.log(arregloUno);
    const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
    dias.forEach(dia => console.log(dia.toUpperCase()));
})();
(() => {
    const tupla = [1, 'Cristian', true];
    tupla[0] = 2;
    tupla[1] = 'Maidelin';
    tupla[2] = false;
    console.log(tupla);
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["med"] = 1] = "med";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.min;
    console.log(currentAudio);
    let VolumenLevel;
    (function (VolumenLevel) {
        VolumenLevel[VolumenLevel["min"] = 1] = "min";
        VolumenLevel[VolumenLevel["med"] = 2] = "med";
        VolumenLevel[VolumenLevel["max"] = 10] = "max";
    })(VolumenLevel || (VolumenLevel = {}));
    const currentVolumen = VolumenLevel.med;
    console.log(currentVolumen);
})();
(() => {
    function callMom() {
        return;
    }
    const callDad = () => {
        return;
    };
    const a = callMom();
    console.log(a);
})();
(() => {
    const hero = 'Superman';
    function returnHero() {
        return hero;
    }
    const heroName = returnHero();
    const returnBatiSignal = () => {
        return 'Batiseñal activada';
    };
})();
(() => {
    const fullName = (name, lastName) => {
        return `${name}, ${lastName}`;
    };
    const cristian = fullName('Cristian', 'Peña');
    console.log(cristian);
})();
(() => {
    const fullName = (name, lastName) => {
        return `${name}, ${lastName || 'No LastName'}`;
    };
    const cristian = fullName('Cristian');
    console.log(cristian);
})();
(() => {
    const fullName = (name, lastName, upper = false) => {
        if (upper) {
            return `${name} ${lastName}`.toUpperCase();
        }
        else {
            return `${name} ${lastName || 'No LastName'}`;
        }
    };
    const cristian = fullName('Cristian', 'Peña', true);
    console.log(cristian);
})();
(() => {
    const nombres = (first, ...rest) => {
        return `${first} ${rest.join(' ')}`;
    };
    const familia = nombres('Ana', 'Cristian', 'Flor', 'Daniela', 'Maidelin');
    console.log({ familia });
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    let profesor = {
        nombre: "Cristian Peña",
        edad: 34,
        asignaturas: ['Fisiología del ejercicio', 'Administración deportiva']
    };
    profesor = {
        nombre: 'Maidelin',
        edad: 31,
        asignaturas: ['Administración', 'Fundamentos de liderazgo'],
    };
    let obrero = {
        name: 'Pedro',
        job: ['Pintar', 'Resanar'],
        getName() {
            return this.name;
        }
    };
    console.log(obrero.getName());
})();
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
    let anyTypeAcepted = 'Cristian';
    console.log(typeof anyTypeAcepted);
    anyTypeAcepted = 34;
    console.log(typeof anyTypeAcepted);
    anyTypeAcepted = {
        name: 'Bruce Wayne',
        age: 58,
        powers: ['Volar', 'Billete']
    };
    console.log(typeof anyTypeAcepted);
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
console.log('holis');
//# sourceMappingURL=main.js.map