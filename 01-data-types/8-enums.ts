(() => {
    // enums
    // es un tipo de datos que solo existe en TS. Es una forma semantica de dar sentido a los rangos

    // se declara con la palabra reservada enum, comienza con mayuscula
    enum AudioLevel {
        min,
        med,
        max
    }

    const currentAudio = AudioLevel.min
    console.log(currentAudio) // la enumeracion comienza desde 0, sigue de uno en uno


    // puedo asignar mis propios valores
    enum VolumenLevel {
        min = 1, // ahora comienza desde 1, no desde 0
        med,
        max = 10
    }

    const currentVolumen = VolumenLevel.med
    console.log(currentVolumen) // en este caso es el número que sigue al 1, no el promedio
})()