(() => {
    // No puedo poner un argumento opcional antes de uno required, pero si le declaro un valor defulat, me salto esa regla... los opcionales siempre deben ir al final

    const fullName = (name: string, lastName?: string, upper: boolean = false): string => {
        if (upper) {
            return `${name} ${lastName}`.toUpperCase() // no coloco la opción del No Lastname porque siempre que venga un true, vendrá el lastname
        } else {
            return `${name} ${lastName || 'No LastName'}`
        }
    }

    const cristian = fullName('Cristian', 'Peña', true)
    console.log(cristian)
})()