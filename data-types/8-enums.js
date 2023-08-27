"use strict";
(() => {
    // enums
    // es un tipo de datos que solo existe en TS. Es una forma semantica de dar sentido a los rangos
    // se declara con la palabra reservada enum, comienza con mayuscula
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["med"] = 1] = "med";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.min;
    console.log(currentAudio); // la enumeracion comienza desde 0, sigue de uno en uno
    // puedo asignar mis propios valores
    let VolumenLevel;
    (function (VolumenLevel) {
        VolumenLevel[VolumenLevel["min"] = 1] = "min";
        VolumenLevel[VolumenLevel["med"] = 2] = "med";
        VolumenLevel[VolumenLevel["max"] = 10] = "max";
    })(VolumenLevel || (VolumenLevel = {}));
    const currentVolumen = VolumenLevel.med;
    console.log(currentVolumen); // en este caso es el número que sigue al 1, no el promedio
})();
