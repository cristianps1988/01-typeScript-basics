"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
})();
(() => {
    const empleado = {
        nombre: 'Cristian',
        edad: 34,
        profesion: 'Docente',
        activo: true
    };
    const { nombre } = empleado;
    console.log(nombre);
    const getName = (_a) => {
        var { profesion } = _a, resto = __rest(_a, ["profesion"]);
        console.log(profesion);
        console.log(resto);
    };
    getName(empleado);
    const nArr = ['Cristian', 35, true, 'no', 'no', 'si'];
    const [primero, segundo, tercero, , , sexto] = nArr;
    console.log(primero, segundo, tercero, sexto);
})();
(() => {
    const persona1 = {
        nombre: 'Cristian',
        edad: 34
    };
    const persona2 = {
        nombre: 'Maidelin',
        edad: 31
    };
    const persona3 = {
        nombre: 'Flor',
        edad: 60
    };
    const personas = [persona1, persona2, persona3];
    for (const persona of personas) {
        const { nombre, edad } = persona;
        console.log(nombre, edad);
    }
})();
//# sourceMappingURL=main.js.map