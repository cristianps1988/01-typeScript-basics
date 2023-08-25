// inferir tipos y strict mode

(() => {
    const a = 10 // queda tipo '10'

    let b = 10 // queda tipo number

    let c // queda tipo any, puedo reasignar cualquier tipo de dato: array, objeto, boolean, etc

    let d: boolean // aquí queda especificado que el tipo de dato debe ser boolean
    d = true
    d = 'hola' // como reasigno un string, da error
    d = 32 // error
    d = {} // también error
    d = false // este si pasa


    // hay que especificar el tipo de dato en los parámetros de las funciones

    function sayHello(msg: string) {
        console.log(msg)
    }
    sayHello('holi')
})()
