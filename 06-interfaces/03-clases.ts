(() => {
    interface Person {
        name: string,
        age: number,
        getName(): string
    }

    interface Worker {
        job: string,
        experience: number
    }

    class Cristian implements Person, Worker {
        constructor(
            public name: string,
            public age: number,
            public job: string,
            public experience: number
        ) {

        }

        getName(): string {
            return this.name
        }
    }
})()