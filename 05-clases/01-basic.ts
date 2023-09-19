(() => {
    class Avenger {
        private name: string
        public team: string
        public realName?: string // la puedo hacer opcional
        static avAge: number = 35

        constructor(name: string, team: string, realName?: string) {
            this.name = name
            this.team = team
            this.realName = realName
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Pepito Perez')
    console.log(antman)
    console.log(antman.team) // me muestra las propiedades publicas
    console.log(Avenger.name) // si quiero acceder a las privadas, debo referirme a la clase, no a la instancia


    // Forma corta de declarar claes en TS
    // Métodos privados, públicos
    class AvengerII {
        static avAge: number = 22
        static getName() { // método estático
            return this.name // me retornará el nombre de la clase, que será AvengerII
        }

        constructor(
            private name: string,
            public team: string,
            public realName?: string,
        ) { }
        // metodo publico
        public bio() {
            return `${this.name} = ${this.team}`
        }

        // método privado
        private bioII() {
            return `${this.name} = ${this.team}`
        }
    }

    const superman = new AvengerII('Superman', 'Capitanes', 'Clark Kent')
    console.log(superman)
    console.log(superman.team)
    console.log(superman.bio())
    console.log(AvengerII.getName()) //para acceder debo referirme a la clase
})()