import { expect } from "chai"
import Calculator from "../src/calculator"
import sinon, { SinonStub } from "sinon"

describe("Test Calculator Class", () => {
    const  calcu = new Calculator()
    let stub: SinonStub

    afterEach(() => {
        console.log('AfterEach')
        if(stub) stub.restore()
    })

    it("Should return Sum", () => {
        stub = sinon.stub(calcu, "getRandomValue").returns(8) 
        const result = calcu.add(2,3)

        expect(result).to.equal(13)
    })

    it("Should return Substract", () => {    
        const result = calcu.substract(2,3)

        expect(result).to.equal(-1)
    })

    it("Should return Divide", () => {
        const result = calcu.divide(6,3)

        expect(result).to.equal(2)
    })

    it("Should return Multiple", () => {
        const result = calcu.multiple(2,3)

        expect(result).to.equal(6)
    })

    it("Should throu an Error when divide by cero", () => {
        expect(() => calcu.divide(2,0)).to.throw("Can not divide by cero!")
    })

    it("Should return a ramdon number, from 1 to 10", () => {
        const result = calcu.getRandomValue()
        expect(result).to.be.a("number")
        expect(result).to.be.at.least(1)
        expect(result).to.be.at.most(10)
    })
})