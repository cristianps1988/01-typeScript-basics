(() => {
    // desestructuración de objetos

    type Empleado = {
        nombre: string;
        edad: number;
        profesion: string;
        activo: boolean;
    }

    const empleado: Empleado = {
        nombre: 'Cristian',
        edad: 34,
        profesion: 'Docente',
        activo: true
    }
    const { nombre } = empleado // desestructurar del objeto empleado
    console.log(nombre)

    // si vamos a utilizarlo en una función, entonces le creamos el type
    const getName = ({ profesion, ...resto }: Empleado) => { // puedo desestructurar directamente
        console.log(profesion)
        console.log(resto) // las demás propiedades me las muestra en un objeto
    }
    getName(empleado)


    // desestructuración de arrays
    const nArr: [string, number, boolean, string, string, string] = ['Cristian', 35, true, 'no', 'no', 'si']
    const [primero, segundo, tercero, , , sexto] = nArr // si quiero saltarme una posición, pongo una (,) coma por cada espacio
    console.log(primero, segundo, tercero, sexto)
})()