(() => {
    interface addTwoNumbers {
        (a: number, b: number): number
    }

    const addTwoNumbersFunction: addTwoNumbers = (a: number, b: number) => {
        return a + b
    }

    console.log(addTwoNumbersFunction(5, 8))
})()