(() => {
    // any: cualquier tipo... evitar utilizar este
    let avenger: any = 123
    let existe;

    avenger = 'Holiiiiiis' // puedo cambiar de number a string
    console.log(avenger.charAt(0)) // pero aquí pierdo la ayuda

    // casteo: decirle al lenguaje que trate una variable como un tipo de dato, ejemplo: como un string
    console.log((avenger as string).charAt(0)) // aquí recupero la ayuda porque le digo que lo trate como un string

    avenger = 12453.2378 // puedo volver a cambiar el tipo de dato
    console.log(avenger.toFixed(2)) // pero pierdo la ayuda

    // otra forma de castear
    console.log((<number>avenger).toFixed(2)) // recupero la ayuda

    console.log(existe) // undefined
})()