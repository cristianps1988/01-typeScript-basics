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

    const antman: Avenger = new Avenger('Antman', 'Capitan')
    console.log(antman)
    console.log(antman.team) // me muestra las propiedades publicas
    console.log(Avenger.name) // si quiero acceder a las privadas, debo referirme a la clase, no a la instancia
})()