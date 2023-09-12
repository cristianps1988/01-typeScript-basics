(() => {
    // void: nada
    // una función tipo void no retorna nada
    // el void va luego de los parentesis

    // ejemplo con funciones normales
    function callMom(): void {
        // return true // esto me daria un error, porque al ser tipo void no puede retornar un boolean
        return
    }

    // ejemplo con arrow functions
    const callDad = (): void => {
        return
    }

    const a = callMom()
    console.log(a) // undefined... !important: undefined no es igual a null
})()