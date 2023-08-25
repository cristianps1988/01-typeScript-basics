(() => {
    let isSuperman: boolean = true
    let isBatman = false // ts trata de inferir el tipo de dato de la variable
    // isBatman = 124 // aquí me da error porque sabe que es un boolean

    isSuperman = (isBatman) ? true : false
    console.log({ isSuperman })
})()