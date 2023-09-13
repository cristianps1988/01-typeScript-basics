(() => {
    // uso del for of

    type Persona = {
        nombre: String,
        edad: number
    }

    const persona1: Persona = {
        nombre: 'Cristian',
        edad: 34
    }

    const persona2: Persona = {
        nombre: 'Maidelin',
        edad: 31
    }

    const persona3: Persona = {
        nombre: 'Flor',
        edad: 60
    }

    const personas: Persona[] = [persona1, persona2, persona3]

    for (const persona of personas) {
        const { nombre, edad } = persona
        console.log(nombre, edad)
    }
})()