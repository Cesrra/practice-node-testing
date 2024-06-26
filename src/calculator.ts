class Calculator {
    add(num1: number, num2: number): number {
        return num1 + num2
    }

    substract(num1: number, num2: number): number {
        return num1 - num2
    }

    multiple(num1: number, num2: number): number {
        return num1 * num2
    }

    divide(num1: number, num2: number): number {
        if(num2 === 0) {
            throw new Error("Can not divide by cero!")
        }
        return num1 / num2
    }
}

export default Calculator