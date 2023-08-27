(() => {
    // formas de declarar funciones

    const hero: string = 'Superman'

    // funcion normal
    function returnHero(): string { // aqui especifico que debe devolver un string
        return hero
    }

    const heroName: string = returnHero() // todo en orden porque la funcion retorna un string

    // arrow function
    const returnBatiSignal = (): string => { // especifico que debe retornar un string
        return 'Batiseñal activada'
    }

})()