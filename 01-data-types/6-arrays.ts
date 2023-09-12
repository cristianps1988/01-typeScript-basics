(() => {
    // arrays

    // aqui especifico los tipos de datos que puede tener mi arreglo: strings, numbers, booleans
    const arregloUno: (string | number | boolean)[] = [1, 2, 3, 4, '5', 6, 7, 8, 9];
    arregloUno.push(true); // por eso aqui me deja 
    console.log(arregloUno);

    const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']
    dias.forEach(dia => console.log(dia.toUpperCase())) // sabe que el array es de strings, me da la ayuda con los metodos de los strings

})()