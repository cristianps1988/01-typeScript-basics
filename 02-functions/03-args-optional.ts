(() => {
    // para declarar un argumento como opcional, solo debo poner un ?

    const fullName = (name: string, lastName?: string): string => {
        return `${name}, ${lastName || 'No LastName'}` // puedo dar la opción si no viene un argumento, imprimir ese texto... pero no me va a dar error si no viene este argumento
    }

    const cristian = fullName('Cristian') // ahora no da error si no envio el segundo argumento
    console.log(cristian)
})()