(() => {
    // debo declarar el tipo de dato de los argumentos
    // estos argumentos se vuelven obligatorios, si no los paso da error

    const fullName = (name: string, lastName: string): string => {
        return `${name}, ${lastName}`
    }

    const cristian = fullName('Cristian', 'Peña') // si no enviara uno de los dos argumentos o enviara del tipo que no es, me da error
    console.log(cristian)
})()