import { expect } from "chai"
import Calculator from "../src/calculator"
import sinon, { SinonStub } from "sinon"

// describe.skip("Hooks Tests", () => { //Ignore this test cases an put the stage pending
// describe.only("Hooks Tests", () => { //Only excecuted this test cases
describe("Hooks Tests", () => {
    const calcu = new Calculator()
    let stub: SinonStub

    afterEach(() => {
        console.log('AfterEach')
        if(stub) stub.restore()
    })

    describe("Set a Suite Tests", () => {
        it("Should return Sum", () => {
            stub = sinon.stub(calcu, "getRandomValue").returns(2) 
            const result = calcu.add(2,3)
    
            expect(result).to.equal(7)
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