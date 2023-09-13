(() => {
    // never
    // funciones que no tienen un punto alcanzable luego de su ejecución

    const error = (msg: string): never => {
        throw new Error(msg) // despues de esto, no pasa nada mas

        //return true // esto da error, porque no puede pasar nada luego del throw error
    }

    // error('Auxilio')
})()