namespace Validations {
    export const validateText = (texto: string): boolean => {
        return (texto.length > 3) ? true : false
    }

    export const validateDate = (myDate: Date): boolean => {
        return (isNaN(myDate.valueOf())) ? true : false
    }

}

console.log(Validations.validateText('Cristian'))