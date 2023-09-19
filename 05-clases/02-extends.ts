(() => {
    // clase padre
    class Car {
        constructor(
            public name: string,
            public country: string
        ) {
            console.log('Constructor Carro llamado')
        }
        protected getCar() { // la diferencia con private, es que con puedo acceder a esta propiedad desde la clase hija
            return `${this.name} - ${this.country}`
        }
    }

    // clase hija
    class Mazda extends Car {

        // hereda las propiedades de la clase padre, pero tengo que definirlas en el constructor... las defino sin public para diferenciarlas
        constructor(
            name: string,
            country: string,
            public model: number // propiedad nueva
        ) {
            super(name, country) // en el super defino las clases heredadas, debe ser llamado de primero
            console.log('Constructor Mazda llamado')
        }
        getCarfromMazda() {
            console.log(super.getCar()) // accediendo a la propiedad protected, si fuera private me daría un error
        }

        // el get no recibe parametros y siempre debe devolver algo
        get fullName() {
            return `${this.name} - ${this.country} desde el getter`
        }

        // el set solo recibe un parámetro y no debe devolver nada.... se pueden llamar igual
        set fullName(name: string) {
            this.name = name
        }
    }
    const mazda = new Mazda('Mazda 3', 'Japón', 2023)
    console.log(mazda)
    mazda.getCarfromMazda()
    mazda.fullName = 'Cristian' // invocando el setter
    console.log(mazda.fullName) // invocando el getter
})()