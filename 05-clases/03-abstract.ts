(() => {
    // la clase abstract me sirve para crear clases que extienden, no la puedo instanciar directamente
    abstract class Car {
        constructor(
            public name: string,
            public country: string
        ) { }
    }

    class Toyota extends Car {
        myPower() {
            return 'Confiabilidad'
        }
    }

    class Ford extends Car {
        myTecnology() {
            return 'Se parquea solo'
        }
    }

    const txl = new Toyota('caresapo', 'Japón')
    const raptor = new Ford('raptor', 'USA')

    console.log(txl.myPower())
    console.log(raptor.myTecnology())

    const printName = (parametro: Car) => {
        console.log(parametro.name)
    }

    printName(txl)
    printName(raptor)
})()