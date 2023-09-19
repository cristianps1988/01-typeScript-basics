(() => {
    // es casi igual que el type, pero se nombran... la diferencia es que son extendibles
    interface Hero {
        name: string,
        age: number,
        powers: string[],
        canFly?: boolean,
        getName?: () => string
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 45,
        powers: ['Super fuerza', 'Vision nocturna'],
        canFly: true,
        getName() {
            return this.name
        },
    }

    let batman: Hero = {
        name: 'Pepito Perez',
        age: 54,
        powers: ['Billete', 'Batimobil']
    }

    console.log(superman)
    console.log(batman)
    console.log(superman.getName!())
})()