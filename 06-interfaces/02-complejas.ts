(() => {
    // para construir los tipos de objetos anidados, es mejor construír una interfaz por nivel
    interface Client {
        name: string,
        age?: number,
        adress: Adress,
        getCity(): string // en las interfaces también puedo definir funciones
    }

    interface Adress {
        city: string,
        street: string,
        zip: number
    }

    const cliente1: Client = {
        name: 'Cristian',
        age: 35,
        adress: {
            city: 'Melgar',
            street: '11-35',
            zip: 458927
        },
        getCity() {
            return this.adress.city
        }
    }

    const cliente2: Client = {
        name: 'Maidelin',
        adress: {
            city: 'Valledupar',
            street: '7b-35',
            zip: 2500
        },
        getCity() {
            return this.adress.city
        }
    }

    console.log({ cliente1, cliente2 })
    console.log(cliente1.getCity())
})()