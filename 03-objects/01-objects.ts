(() => {
    // declaración de objetos literales en TS

    let profesor = { // TS crea un elemento de tipo profesor, con las siguientes propiedades
        nombre: "Cristian Peña",
        edad: 34,
        asignaturas: ['Fisiología del ejercicio', 'Administración deportiva']
    }

    // ahora no puedo agregar más propiedades al objeto, me da error
    // profesor = {
    //     color: 'Amarillo'
    // }

    // puedo redeclarar las propiedades existentes
    profesor = {
        nombre: 'Maidelin',
        edad: 31,
        asignaturas: ['Administración', 'Fundamentos de liderazgo'],
        //color: 'Rojo' // esto también me daría un error
    }

    // vamos a crear un objeto con sus tipos
    let obrero: { name: string, age?: number, job: string[], getName: () => string } = { // puedo definir que una propiedad sea opcional con el ?. A diferencia de las funciones, no importa el orden
        name: 'Pedro',
        // age: 35, // definí la edad como opcional, así que no me da error
        job: ['Pintar', 'Resanar'],
        getName() {
            return this.name
        }
    }

    console.log(obrero.getName())

})()