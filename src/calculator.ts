class Calculator {
    add(num1: number, num2: number): number {
        this.logMessage("Looging add function")
        const random = this.getRandomValue()
        return num1 + num2 + random
    }
    
    substract(num1: number, num2: number): number {
        this.logMessage("Looging substract function")
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

    getRandomValue(): number {
        return Math.floor(Math.random()*10 + 1)
    }

    logMessage(msg: string) {
        console.log(msg)
    }

    asyncFunctionPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(4)
            }, 200)
        })
    }
}

export default Calculator