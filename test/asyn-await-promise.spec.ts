import { expect } from "chai"
import Calculator from "../src/calculator"

describe('Asyn Await Promise Tests', () => {
    let calculator: Calculator

    it("Should work with Async and Await", async() => {
        calculator = new Calculator()
        const result = await calculator.asyncFunctionPromise()
        expect(result).to.equal(4)
    })

    it("Should work with Callback", () => {
        calculator = new Calculator()
        calculator.asyncFunctionPromise()
            .then(result => {
                expect(result).to.equal(4)
            })
    })
})