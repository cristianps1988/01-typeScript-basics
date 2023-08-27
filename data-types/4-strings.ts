(() => {
    // Formas de declarar strings en TS
    const batman: string = 'Batman'; // con comillas sencillas
    const superman: string = "Superman" // con comillas dobles
    const batichica: string = `Batichica` // con backtits

    console.log(`Hola, soy ${batman}`)
    console.log(superman.toUpperCase())

    // TS no es infalible
    // console.log(batman[10].toUpperCase()) // esto me da un error, no puede pasar a mayusculas un undefined
    console.log(batman[10]?.toUpperCase() || 'No existe') // con el ? evaluamos si existe algo en esa posición, si no, entonces no ejecuta el uppercase. Con el || entonces pasamos a la otra condición.
})()