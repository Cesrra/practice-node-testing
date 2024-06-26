import { expect } from "chai"
import Calculator from "../src/calculator"

// describe.skip("Hooks Tests", () => { //Ignore this test cases an put the stage pending
// describe.only("Hooks Tests", () => { //Only excecuted this test cases
describe("Hooks Tests", () => {
    const calcu = new Calculator()

    describe("Set a Suite Tests", () => {
        it("Should return Sum", () => {
            const result = calcu.add(2,3)
    
            expect(result).to.equal(5)
        })
    
        it("Should return Substract", () => {
            const result = calcu.substract(2,3)
    
            expect(result).to.equal(-1)
        })
    })

    before(() => {
        console.log('Before')
    })

    beforeEach(() => {
        console.log('BeforeEach')
    })    

    after(() => {
        console.log('After')
    })

    afterEach(() => {
        console.log('AfterEach')
    })
})