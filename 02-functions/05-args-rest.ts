(() => {
    // argumentos rest sirve para cuando no se cuantos argumentos puedo recibir, puede ser uno, dos o muchos
    const nombres = (first: string, ...rest: string[]): string => { // lo declaro con el spread opeartor y especifico el tipo que será un array de strings
        return `${first} ${rest.join(' ')}`
    }

    const familia = nombres('Ana', 'Cristian', 'Flor', 'Daniela', 'Maidelin')
    console.log({ familia })
})()