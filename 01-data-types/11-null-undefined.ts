(() => {
    // null - undefined

    // stricknullchecks
    const nada: undefined = undefined;
    console.log(nada)

    const isActive: boolean = true;
    //isActive = undefined // error
    // isActive = null // error
    console.log(isActive)
})()